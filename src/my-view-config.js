export const myViewConfig = {
  "version": "1.0.15",
  "name": "E11 & E13 STARmap",
  "description": "",
  "datasets": [
    {
      "uid": "A",
      "name": "E11",
      "files": [
        {
          "fileType": "anndata.zarr",
          // "url": "data//A/0/f6f5e20e-37c2-484d-8ce7-b68fad8a537b.adata.zarr",
          "url":"https://kwoniris.github.io/mouse-cereb-dev/data/E11_Normalized.zarr",
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
    },
    {
      "uid": "B", 
      "name": "E13",
      "files": [
        {
          "fileType": "anndata.zarr",
          "url":"https://kwoniris.github.io/mouse-cereb-dev/data/E13_Normalized.zarr",
          "options": {
            "obsLocations": {
              "path": "obsm/spatial"
            },
            "obsEmbedding": [
              {
                "path": "obsm/X_umap",
                "dims": [0, 1],
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
      "A": "A",
      "B":"B"
    },
    "embeddingType": {
      "A": "UMAP",
      "B": "UMAP"
    },
    "spatialZoom": {
      "A": 1.5,
      "B": 2.5
    },
    "spatialTargetX": {
      "A": 259,
      "B": 500
    },
    "spatialTargetY": {
      "A": 500,
      "B": 48
    },
    "spatialSegmentationLayer": {
      "A": {
        "opacity": 1,
        "radius": 2,
        "visible": true,
        "stroked": false
      },
      "B": {
        "opacity": 1,
        "radius": 2,
        "visible": true,
        "stroked": false
      }
    }
  },
  "layout": [
    // E11 Views 
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
        "description": "My E11 STARmap data."
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
    },
    // E13 Views
    {
      "component": "description",
      "coordinationScopes": {
        "dataset": "B"
      },
      "x": 0.0,
      "y": 12.0,
      "w": 3.0,
      "h": 3.0,
      "props": {
        "description": "My E13 STARmap data."
      }
    },
    {
      "component": "spatial",
      "coordinationScopes": {
        "dataset": "B",
        "spatialZoom": "B",
        "spatialTargetX": "B",
        "spatialTargetY": "B",
        "spatialSegmentationLayer": "B"
      },
      "x": 3.0,
      "y": 12.0,
      "w": 3.0,
      "h": 12
    },
    {
      "component": "scatterplot",
      "coordinationScopes": {
        "embeddingType": "B"
      },
      "x": 6.0,
      "y": 12.0,
      "w": 3.0,
      "h": 12,
      "coordinationScopesBy": {}
    },
    {
      "component": "featureList",
      "coordinationScopes": {
        "dataset": "B"
      },
      "x": 0.0,
      "y": 18.0,
      "w": 3.0,
      "h": 6.0
    },
    {
      "component": "obsSets",
      "coordinationScopes": {
        "dataset": "B"
      },
      "x": 0.0,
      "y": 15.0,
      "w": 3.0,
      "h": 3.0
    },
    {
      "component": "heatmap",
      "coordinationScopes": {
        "dataset": "B"
      },
      "x": 9.0,
      "y": 12.0,
      "w": 3.0,
      "h": 3.0
    }
  ],
  "initStrategy": "auto"
};