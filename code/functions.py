from import_utils import *

def scale_multiple_spatial_datasets(anndata_list, img_size=2000):
    """
    Scales spatial coordinates from a list of AnnData objects to fit within a defined image size.

    Parameters:
    - anndata_list: list of AnnData objects containing spatial coordinates in .obsm["spatial"]
    - img_size: size of the output canvas (default: 1000)

    Returns:
    - scaled_list: list of scaled spatial coordinate arrays
    """
    # Extract spatial coordinates from each AnnData object
    spatial_list = [adata.obsm["spatial"] for adata in anndata_list]

    # Concatenate all x and y coordinates
    all_x = np.concatenate([spatial[:, 0] for spatial in spatial_list])
    all_y = np.concatenate([spatial[:, 1] for spatial in spatial_list])

    # Compute global bounds
    global_x_min, global_x_max = all_x.min(), all_x.max()
    global_y_min, global_y_max = all_y.min(), all_y.max()

    # Determine the largest range for scaling
    global_x_range = global_x_max - global_x_min
    global_y_range = global_y_max - global_y_min
    global_max_range = max(global_x_range, global_y_range)

    # Compute scale factor
    scale = img_size / global_max_range

    # Add padding to center the data
    x_pad = (img_size - (global_x_range * scale)) / 2
    y_pad = (img_size - (global_y_range * scale)) / 2

    # Scale each spatial dataset
    scaled_list = []
    for spatial in spatial_list:
        x_scaled = (spatial[:, 0] - global_x_min) * scale + x_pad
        y_scaled = (spatial[:, 1] - global_y_min) * scale + y_pad
        scaled_spatial = np.vstack([x_scaled, y_scaled]).T
        scaled_list.append(scaled_spatial)

    return scaled_list


def update_scaled_spatial_data(original_datasets, scaled_spatials, dataset_names=None):
    """
    Updates the spatial coordinates of multiple AnnData objects with scaled spatial data.

    Parameters:
    - original_datasets: list of AnnData objects to be updated.
    - scaled_spatials: list of scaled spatial data arrays.
    - dataset_names: (optional) list of names for the datasets. If None, names will be inferred.

    Returns:
    - updated_datasets: list of updated AnnData objects with scaled spatial data.
    - updated_names: list of names for the updated datasets.
    """
    updated_datasets = []
    updated_names = []

    for i, data in enumerate(original_datasets):
        # Make a copy of the original AnnData object
        data_scaled = data.copy()
        # Update the spatial coordinates
        data_scaled.obsm["spatial"] = scaled_spatials[i]
        updated_datasets.append(data_scaled)

        # Get the dataset name
        if dataset_names:
            updated_names.append(dataset_names[i] + "_scaled")
        else:
            updated_names.append(f"dataset_{i+1}")  # Default naming if no names provided

    return updated_datasets, updated_names


# def perform_deg_analysis_on_list(datasets, groupby_column="broad_cell_types", pval_thresh=0.01, top_n=300, key="wilcoxon"):
#     """
#     Performs DEG analysis on a list of AnnData objects and stores the reordered top-N DEG expression matrix in .obsm['X_deg'].

#     Parameters:
#     - datasets: list of AnnData objects
#     - groupby_column: column in .obs to group cells by (default: 'broad_cell_types')
#     - pval_thresh: adjusted p-value threshold for significance
#     - top_n: number of top DEGs to include (default: 300)
#     - key: key under which DEG results are stored in .uns (default: 'wilcoxon')

#     Returns:
#     - updated_datasets: list of AnnData objects with .obsm['X_deg'] added
#     """
#     updated_datasets = []

#     for adata in datasets:
#         # Run DEG analysis
#         sc.tl.rank_genes_groups(adata, groupby_column, method='wilcoxon', key_added=key)

#         # Collect DEGs for each group
#         deg_dfs = []
#         for group in adata.obs[groupby_column].cat.categories:
#             df = sc.get.rank_genes_groups_df(adata, group=group, key=key)
#             df['group'] = group
#             deg_dfs.append(df)

#         # Combine and filter significant DEGs
#         deg_all = pd.concat(deg_dfs, ignore_index=True)
#         deg_sig = deg_all[deg_all['pvals_adj'] < pval_thresh]
#         deg_sig = deg_sig.sort_values(['group', 'logfoldchanges'], ascending=[True, False])

#         print(f"{len(deg_sig)} significant DEGs found...")
#         # Select top N unique DEGs
#         deg_genes = deg_sig['names'].drop_duplicates().head(top_n).tolist()

#         if len(deg_genes) == 0:
#             print(f"No significant DEGs found for dataset. Skipping .obsm['X_deg'].")
#             updated_datasets.append(adata)
#             continue

#         # Extract DEG expression matrix
#         X_deg = adata[:, deg_genes].X
#         if hasattr(X_deg, "toarray"):
#             X_deg = X_deg.toarray()

#         deg_expr_df = pd.DataFrame(X_deg, columns=deg_genes, index=adata.obs_names)

#         # Hierarchical clustering to reorder genes
#         Z = scipy.cluster.hierarchy.linkage(deg_expr_df.T, method="average", optimal_ordering=True)
#         gene_ordering = scipy.cluster.hierarchy.leaves_list(Z)
#         deg_expr_df = deg_expr_df.iloc[:, gene_ordering]

#         # Store in .obsm
#         adata.obsm["X_deg"] = deg_expr_df.values

#         # Optional: scale genes
#         sc.pp.scale(adata)

#         updated_datasets.append(adata)

#     return updated_datasets

def perform_hvg_analysis_on_list(datasets, top_n=300):
    """
    Performs HVG (Highly Variable Gene) analysis on a list of AnnData objects and stores the reordered top-N HVG expression matrix in .obsm['X_hvg'].

    Parameters:
    - datasets: list of AnnData objects
    - top_n: number of top HVGs to include (default: 300)

    Returns:
    - updated_datasets: list of AnnData objects with .obsm['X_hvg'] added
    """
    updated_datasets = []

    for adata in datasets:
        # Identify highly variable genes
        sc.pp.highly_variable_genes(adata, n_top_genes=top_n)
        top_genes = adata.var['highly_variable'].index[adata.var['highly_variable']]

        # Get the highly variable gene matrix as a plain NumPy array
        X_hvg_arr = adata[:, adata.var['highly_variable']].X.toarray()
        X_hvg_index = adata[:, adata.var['highly_variable']].var.copy().index

        # Perform average linkage hierarchical clustering on the genes axis
        Z = scipy.cluster.hierarchy.linkage(X_hvg_arr.T, method="average", optimal_ordering=True)

        # Get the hierarchy-based ordering of genes
        highly_var_index_ordering = scipy.cluster.hierarchy.leaves_list(Z)
        highly_var_genes = X_hvg_index.values[highly_var_index_ordering].tolist()

        # Reorder the genes in the AnnData object
        all_genes = adata.var.index.values.tolist()
        not_var_genes = adata.var.loc[~adata.var['highly_variable']].index.values.tolist()

        def get_orig_index(gene_id):
            return all_genes.index(gene_id)

        var_index_ordering = list(map(get_orig_index, highly_var_genes)) + list(map(get_orig_index, not_var_genes))
        reordered_adata = adata[:, var_index_ordering].copy()

        # Store the reordered HVG matrix in .obsm
        reordered_adata.obsm['X_hvg'] = reordered_adata[:, reordered_adata.var['highly_variable']].X.copy()

        updated_datasets.append(reordered_adata)

    return updated_datasets

def export_anndata_to_zarr(adatas, names, output_dir="public/data"):
    """
    Convert spatial coords to uint16 and export AnnData objects to .zarr format.

    Parameters
    ----------
    adatas : list of AnnData
        List of AnnData objects with .obsm['X_deg'] and .obsm['spatial'].
    names : list of str
        List of names for each dataset (used in filenames).
    output_dir : str
        Directory to save .zarr files.
    """
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for adata, name in zip(adatas, names):
        # Ensure spatial coordinates are uint16
        if "spatial" in adata.obsm:
            adata.obsm["spatial"] = adata.obsm["spatial"].astype("uint16")

        # Define save path
        zarr_path = os.path.join(output_dir, f"{name}.zarr")

        # Save
        adata.write_zarr(zarr_path)
        print(f"✅ Saved {name} to {zarr_path}")


