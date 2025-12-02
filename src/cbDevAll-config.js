export const cbDevAllConfig = {
  "version": "1.0.15",
  "name": "Mouse Cerebellum Development",
  "description": "",
  "datasets": [
    {
      "uid": "A",
      "name": "CB Dev",
      "files": [
        {
          "fileType": "anndata.zarr",
          "url": "https://kwoniris.github.io/mouse-cereb-dev/data/cb_dev_annotated.zarr",
          "options": {
            "obsEmbedding": [
              {
                "path": "obsm/X_umap",
                "dims": [
                  0,
                  1
                ],
                "embeddingType": "UMAP"
              }
            ],
            "obsSets": [
              {
                "name": "TimePoint",
                "path": "obs/TimePoint"
              },
              {
                "name": "Sample",
                "path": "obs/Sample"
              },
              {
                "name": "Fine Cell Type",
                "path": "obs/fine_cell_type"
              },
              {
                "name": "Cell Type",
                "path": "obs/cell_type"
              },
              {
                "name": "Vague Cell Type",
                "path": "obs/cell_type_vague"
              },
              {
                "name": "Final Clusters",
                "path": "obs/final.clusters"
              },
              {
                "name": "Subareas",
                "path": "obs/subareas"
              }
            ],
            "obsFeatureMatrix": {
              "path": "X"
            }
          }
        }
      ]
    }
  ],
  "coordinationSpace": {
    "dataset": {
      "A": "A"
    },
    "embeddingType": {
      "A": "UMAP"
    }
  },
  "layout": [
    {
      "component": "description",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 0,
      "y": 0.0,
      "w": 12,
      "h": 4.0,
      "props": {
        "description": "Developing Mouse Cerebellum Coronal Slice\n Combined all timepoints. November 2025 data."
      }
    },
    {
      "component": "scatterplot",
      "coordinationScopes": {
        "dataset": "A",
        "embeddingType": "A"
      },
      "x": 5.0,
      "y": 4.0,
      "w": 7.0,
      "h": 8.0
    },
    {
      "component": "obsSets",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 0.0,
      "y": 4.0,
      "w": 5.0,
      "h": 3.0
    },
    {
      "component": "featureList",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 0.0,
      "y": 7.0,
      "w": 5.0,
      "h": 3.0
    }
  ],
  "initStrategy": "auto"
};