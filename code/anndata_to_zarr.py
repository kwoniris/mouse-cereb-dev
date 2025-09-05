#########################################################################
# Script to process, normalize, and export spatial data for Vitessce
# Iris Kwon (skwon38@jh.edu)
#
# Input: Path to pre-processed spatial datasets (.h5ad)
# Output: Processed spatial data (.zarr)
# 
# Assumptions for datasets: 
# Input data has multiple slices (A-P), 
# has .obs annotations for cell type named as "broad_cell_tyoes" and "cell_types".
#
# Running the script:
# General Command: python anndata_to_zarr.py 
# Example Command: python /Users/iriskwon/Desktop/mouse-cereb-dev/mouse-cereb-dev/code/anndata_to_zarr.py
#########################################################################

# Load all import statements required for the script
from import_utils import *
from functions import *

# Define input and output paths as strings
input_path = "/Users/iriskwon/Desktop/mouse-cereb-dev/data_for_vitessce" # dir containing input .h5ad files 
output_path = "/Users/iriskwon/Desktop/mouse-cereb-dev/res_for_vitessce" # dir for output .Zarr files 

print(f"Loading data from: {input_path}")
# Count the number of .h5ad files in the input directory
h5ad_files = [f for f in os.listdir(input_path) if f.endswith('.h5ad')]
# Order the files by earliest to latest timepoint 
h5ad_files.sort(key=lambda x: int(x.split('_')[0][1:]))
print(f"Number of spatial datasets to process: {len(h5ad_files)}")

print(h5ad_files) # delete later 

original_datasets = [] # list of original spatial datasets to scale 
original_dataset_names = []

for f in h5ad_files:
    print(f"Loading {f}...")
    file_path = os.path.join(input_path, f)  # Join the directory and file name
    data = ad.read_h5ad(file_path)  # Use the full file path
    print(data.shape) # delete later 
    original_datasets.append(data) 

    # Extract the dataset name 
    dataset_name = f.split('.')[0]  # Use the part of the file name up to the first . as the dataset name
    original_dataset_names.append(dataset_name)

if len(h5ad_files) == len(original_datasets):
    print("All datasets loaded successfully. Proceeding with the script...")
else:
    raise ValueError(f"Mismatch in datasets: Found {len(h5ad_files)} files \
                     but only loaded {len(original_datasets)} spatial datasets.")

## NORMALIZATION, SCALING OF DATA 
scaled_datasets = scale_multiple_spatial_datasets(original_datasets)
print("All datasets successfully scaled for Vitessce.")

# # Update the spatial coordinates
updated_datasets, updated_names = update_scaled_spatial_data(original_datasets, scaled_datasets, original_dataset_names)

# # Unpack the updated datasets
print(updated_names)
print(len(updated_datasets)) # delete later 

## EXTRACT COORDINATES FROM DATA 
# Extract spatial maxima (x, y) for each dataset for Vitessce outline later 
spatial_maxima = [
    {
        "dataset": name,
        "max_x": int(dataset.obsm["spatial"][:, 0].max()),
        "max_y": int(dataset.obsm["spatial"][:, 1].max())
    }
    for dataset, name in zip(updated_datasets, updated_names)
    if "spatial" in dataset.obsm
]

# Create DataFrame
df = pd.DataFrame(spatial_maxima)

# Export to CSV in the specified output directory
output_file = os.path.join(output_path, "spatial_max_coords.csv")
df.to_csv(output_file, index=False)

print(f"Spatial maxima exported to {output_file}.")

# ## GET SIGNIFICANT DEGs OF EACH DATASET 
# updated_datasets_with_deg = perform_deg_analysis_on_list(updated_datasets, 
#                                                          top_n=50, groupby_column="broad_cell_types")
# print("All DEGs computed!")

## GET TOP 100 HIGHLY VARIABLE GENES OF EACH DATASET + optimal gene ordering
updated_datasets_with_hvg = perform_hvg_analysis_on_list(updated_datasets, 
                                                         top_n = 50)

print("All HVGs computed!")

### have to ask Manju what sort of param I should use for this part 
#### broader cell types or cell types; 

### SANTIY CHECK W HEATMAP

# Select the dataset (e.g., first one)
adata = updated_datasets_with_hvg[0]

# Check if HVG matrix exists
if "X_hvg" in adata.obsm:
    X_hvg = adata.obsm["X_hvg"]

    # Retrieve gene names and group labels
    hvg_genes = adata.var_names[:X_hvg.shape[1]]  # Adjust if gene names are stored separately
    group_labels = adata.obs["broad_cell_types"].astype(str).values

    # Create a DataFrame for labeling
    hvg_expr_df = pd.DataFrame(X_hvg, columns=hvg_genes, index=group_labels)

    # Plot and save heatmap
    plt.figure(figsize=(12, 8))
    sns.heatmap(hvg_expr_df, cmap="viridis", xticklabels=False, yticklabels=False)
    plt.title("HVG Heatmap with Gene and Group Labels")
    plt.xlabel("HVG Genes")
    plt.ylabel("Cell Groups")
    plt.tight_layout()
    plt.savefig(os.path.join(output_path, "hvg_heatmap.png"))
    plt.close()

    print("Heatmap exported to hvg_heatmap.png")
else:
    print("No HVG matrix found in .obsm['X_hvg']")


## Generate .zarr files for each
export_anndata_to_zarr(updated_datasets_with_hvg, updated_names, output_dir = output_path)

print("Ready for Vitessce Config!")