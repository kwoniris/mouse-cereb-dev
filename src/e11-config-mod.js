export const e11Config = {
    "version": "1.0.15",
    "name": "E11 Coronal",
    "description": "",
    "datasets": [
      {
        "uid": "A",
        "name": "E11 Full",
        "files": [
          {
            "fileType": "anndata.zarr",
            "url": "https://kwoniris.github.io/mouse-cereb-dev/data/e11_full.zarr",  // full dataset
            "options": {
              "obsLocations": { "path": "obsm/spatial" },
              "obsSets": [
                { "name": "Cell Type", "path": "obs/cell_types" },
                { "name": "Broad Cell Types", "path": "obs/broad_cell_types" },
                { "name": "Coronal Slice (Anterior to Posterior)", "path": "obs/library_id" }
              ],
              "obsFeatureMatrix": { "path": "X" }
            }
          }
        ]
      },
      {
        "uid": "B",
        "name": "E11 Top DEGs",
        "files": [
          {
            "fileType": "anndata.zarr",
            "url": "https://kwoniris.github.io/mouse-cereb-dev/data/e11_top10_deg.zarr",  // DEG subset
            "options": {
              "obsFeatureMatrix": { "path": "X" }
            }
          }
        ]
      }
    ],
    "coordinationSpace": {
      "dataset": {
        "full": "A",
        "degs": "B"
      },
      "spatialZoom": { "A": -3 },
      "spatialTargetX": { "A": 4874.0 },
      "spatialTargetY": { "A": 266.0 },
      "spatialSegmentationLayer": {
        "A": {
          "shape": "circle",
          "opacity": 1,
          "radius": 5,
          "visible": true,
          "stroked": false
        }
      },
      "heatmapZoomX": { "B": 2 },
      "heatmapZoomY": { "B": 5 }
    },
    "layout": [
      {
        "component": "description",
        "coordinationScopes": { "dataset": "full" },
        "x": 0, "y": 0.0, "w": 12, "h": 2.0,
        "props": { "description": "Developing Mouse Cerebellum (E11) Coronal Slice" }
      },
      {
        "component": "spatial",
        "coordinationScopes": {
          "dataset": "full",
          "spatialZoom": "A",
          "spatialTargetX": "A",
          "spatialTargetY": "A",
          "spatialSegmentationLayer": "A"
        },
        "x": 0, "y": 2.0, "w": 12, "h": 5.0
      },
      {
        "component": "featureList",
        "coordinationScopes": { "dataset": "full" },
        "x": 2.0, "y": 7.0, "w": 3.0, "h": 5.0
      },
      {
        "component": "obsSets",
        "coordinationScopes": { "dataset": "full" },
        "x": 0.0, "y": 7.0, "w": 2.0, "h": 5.0
      },
      {
        "component": "heatmap",
        "coordinationScopes": {
          "dataset": "degs",
          "heatmapZoomX": "B",
          "heatmapZoomY": "B"
        },
        "x": 5.0, "y": 7.0, "w": 7.0, "h": 5.0
      }
    ],
    "initStrategy": "auto"
  };
  