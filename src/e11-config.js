export const e11Config = {
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
          "url": "https://kwoniris.github.io/mouse-cereb-dev/data/e11_top10_deg.zarr",
          "options": {
            "obsLocations": {
              "path": "obsm/spatial"
            },
            "obsSets": [
              {
                "name": "Cell Type",
                "path": "obs/cell_types"
              },
              {
                "name": "Broad Cell Types",
                "path": "obs/broad_cell_types"
              },
              {
                "name": "Coronal Slice (Anterior to Posterior",
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
    "spatialZoom": {
      "A": -3.2
    },
    "spatialTargetX": {
      "A": 4874.0
    },
    "spatialTargetY": {
      "A": 266.0
    },
    "spatialSegmentationLayer": {
      "A": {
        "shape": "circle",
        "opacity": 1,
        "radius": 5,
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
      "x": 0,
      "y": 6.0,
      "w": 2,
      "h": 6.0,
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
      "x": 0,
      "y": 0.0,
      "w": 12,
      "h": 6.0
    },
    {
      "component": "featureList",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 5,
      "y": 6.0,
      "w": 1.5,
      "h": 6.0
    },
    {
      "component": "obsSets",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 2.0,
      "y": 6.0,
      "w": 3.0,
      "h": 6.0
    },
    {
      "component": "heatmap",
      "coordinationScopes": {
        "dataset": "A",
        "heatmapZoomX": "A",
        "heatmapZoomY": "A"
      },
      "x": 6.5,
      "y": 6.0,
      "w": 5.5,
      "h": 6.0
    }
  ],
  "initStrategy": "auto"
};