export const e17Config = {
  "version": "1.0.15",
  "name": "E17 Coronal",
  "description": "",
  "datasets": [
    {
      "uid": "A",
      "name": "E17",
      "files": [
        {
          "fileType": "anndata.zarr",
          "url": "configs_for_vitessce/A/0/b77ac909-294b-498f-b9a5-679dbdc20152.adata.zarr",
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
      "A": -4.5
    },
    "spatialTargetX": {
      "A": 3893
    },
    "spatialTargetY": {
      "A": 2383
    },
    "spatialSegmentationLayer": {
      "A": {
        "shape": "circle",
        "opacity": 1,
        "radius": 10,
        "visible": true,
        "stroked": false
      }
    },
    "heatmapZoomX": {
      "A": 2
    },
    "heatmapZoomY": {
      "A": 5
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
      "w": 6.0,
      "h": 6.0,
      "props": {
        "description": "Developing Mouse Cerebellum (E13) Coronal Slice"
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
      "x": 6.0,
      "y": 0.0,
      "w": 6.0,
      "h": 6.0
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