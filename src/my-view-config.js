export const myViewConfig = {
  "version": "1.0.15",
  "name": "E11 Coronal",
  "description": "",
  "datasets": [
    {
      "uid": "A",
      "name": "E11",
      "files": [
        {
          "fileType": "anndata.zarr",
          "url": "https://kwoniris.github.io/mouse-cereb-dev/data/E11_Normalized.zarr",
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
                "name": "Finer Cell Types",
                "path": "obs/finer_cell_types"
              },
              {
                "name": "Coronal Slice (Anterior to Posterior)",
                "path": "obs/library_id"
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
      "A": 0
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
    },
    "heatmapZoomX": {
      "A": 0
    },
    "heatmapZoomY": {
      "A": 0
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
      "h": 2.0,
      "props": {
        "description": "Developing Mouse Cerebellum (E11) Coronal Slice"
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
      "w": 4.0,
      "h": 12
    },
    {
      "component": "scatterplot",
      "coordinationScopes": {
        "embeddingType": "A"
      },
      "x": 7.0,
      "y": 7.0,
      "w": 4.0,
      "h": 5.0
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
      "y": 2.0,
      "w": 3.0,
      "h": 4.0
    },
    {
      "component": "heatmap",
      "coordinationScopes": {
        "dataset": "A",
        "heatmapZoomX": "A",
        "heatmapZoomY": "A"
      },
      "x": 7.0,
      "y": 0.0,
      "w": 4.0,
      "h": 7.0
    }
  ],
  "initStrategy": "auto"
};