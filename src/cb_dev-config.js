export const cbDevConfig = {
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
          "url": "https://kwoniris.github.io/mouse-cereb-dev/data/cb_dev_annotated_v3.zarr",
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
                "name": "Cluster",
                "path": "obs/cluster"
              },
              {
                "name": "Donor ID",
                "path": "obs/donor_id"
              },
              {
                "name": "Sex",
                "path": "obs/sex"
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
      "w": 3.0,
      "h": 2.0,
      "props": {
        "description": "Developing Mouse Cerebellum Single Cell Data"
      }
    },
    {
      "component": "scatterplot",
      "coordinationScopes": {
        "dataset": "A",
        "embeddingType": "A"
      },
      "x": 3.0,
      "y": 0.0,
      "w": 9.0,
      "h": 12.0
    },
    {
      "component": "obsSets",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 0.0,
      "y": 2.0,
      "w": 3.0,
      "h": 6.0
    },
    {
      "component": "featureList",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 0.0,
      "y": 8.0,
      "w": 3.0,
      "h": 4.0
    }
  ],
  "initStrategy": "auto"
};