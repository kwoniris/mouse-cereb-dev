export const e13Config = {
  "version": "1.0.15",
  "name": "E13 Coronal",
  "description": "",
  "datasets": [
    {
      "uid": "A",
      "name": "E13",
      "files": [
        {
          "fileType": "anndata.zarr",
          "url": "https://kwoniris.github.io/mouse-cereb-dev/data/e13_top10_degs.zarr",
          "options": {
            "obsLocations": {
              "path": "obsm/spatial"
            },
            "obsSets": [
              {
                "name": "Cell Types",
                "path": "obs/cell_types"
              },
              {
                "name": "Excitatory",
                "path": "obs/excitatory"
              },
              {
                "name": "Inhibitory",
                "path": "obs/inhibitory"
              },
              {
                "name": "Slice (Anterior to Posterior)",
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
      "A": -2.8
    },
    "spatialTargetX": {
      "A": 4942.0
    },
    "spatialTargetY": {
      "A": 385.0
    },
    "spatialSegmentationLayer": {
      "A": {
        "shape": "circle",
        "opacity": 1,
        "radius": 9,
        "visible": true,
        "stroked": false
      }
    },
    "heatmapZoomX": {
      "A": 1.5
    },
    "heatmapZoomY": {
      "A": 1
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
      "h": 2.0,
      "props": {
        "description": "Developing Mouse Cerebellum Coronal Slice"
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
      "y": 2.0,
      "w": 12,
      "h": 4.0
    },
    {
      "component": "featureList",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 3.0,
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
      "x": 6.0,
      "y": 6.0,
      "w": 6.0,
      "h": 6.0
    }
  ],
  "initStrategy": "auto"
};