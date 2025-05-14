export const myViewConfig = {
  "version": "1.0.15",
  "name": "E11 STARmap",
  "description": "",
  "datasets": [
    {
      "uid": "A",
      "name": "E11",
      "files": [
        {
          "fileType": "anndata.zarr",
          "url": "data/E11_Normalized.zarr",
          "options": {
            "obsLocations": {
              "path": "obsm/spatial"
            },
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
                "name": "Cell Type",
                "path": "obs/cell_types"
              },
              {
                "name": "Coronal Slice A-P",
                "path": "obs/library_id"
              },
              {
                "name": "Leiden Clusters",
                "path": "obs/leiden"
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
    },
    "spatialZoom": {
      "A": 1.5
    },
    "spatialTargetX": {
      "A": 259
    },
    "spatialTargetY": {
      "A": 500
    },
    "spatialSegmentationLayer": {
      "A": {
        "opacity": 1,
        "radius": 2,
        "visible": true,
        "stroked": false
      }
    }
  },
  "layout": [
    {
      "component": "description",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 0.0,
      "y": 0.0,
      "w": 3.0,
      "h": 3.0,
      "props": {
        "description": "Developing Mouse Cerebellum E11 Data"
      }
    },
    {
      "component": "spatial",
      "coordinationScopes": {
        "dataset": "A",
        "spatialZoom": "A",
        "spatialTargetX": "A",
        "spatialTargetY": "A",
        "spatialSegmentationLayer": "A"
      },
      "x": 3.0,
      "y": 0,
      "w": 3.0,
      "h": 12
    },
    {
      "component": "scatterplot",
      "coordinationScopes": {
        "embeddingType": "A"
      },
      "x": 6.0,
      "y": 0,
      "w": 3.0,
      "h": 12,
      "coordinationScopesBy": {}
    },
    {
      "component": "featureList",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 0.0,
      "y": 6.0,
      "w": 3.0,
      "h": 6.0
    },
    {
      "component": "obsSets",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 0.0,
      "y": 3.0,
      "w": 3.0,
      "h": 3.0
    },
    {
      "component": "heatmap",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 9.0,
      "y": 0,
      "w": 3.0,
      "h": 12
    }
  ],
  "initStrategy": "auto"
};