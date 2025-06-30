export const myViewConfig = {
  "version": "1.0.15",
  "name": "Cerebellar Nuclei Development in Mice",
  "description": "Spatial transcriptomics map of the developing mouse cerebellum. Coronal section from SPART-seq data, E11-E17 timepoints, four anterior to posterior slices taken per timepoint.",
  "datasets": [{
      "uid": "A",
      "name": "E11",
      "files": [
        {
          "fileType": "anndata.zarr",
          "url":"https://kwoniris.github.io/mouse-cereb-dev/data/E11_Normalized.zarr",
          "coordinationValues": {
            "obsType":"cell",
            "featureType":"gene"
          },
          "options": {
            "obsLocations": {
              "path": "obsm/spatial"
            },
            "obsEmbedding": [
              {
                "path": "obsm/X_umap",
                "dims": [0,1],
                "embeddingType": "UMAP (E11)" // can modify this title for UMAP plot
              }
            ],
            "obsSets": [
              {
                "name": "Cell Types",
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
              // {
              //   "name": "Leiden Clusters",
              //   "path": "obs/leiden"
              // }
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
          "coordinationValues": {
            "obsType":"cell"
          },
          "options": {
            "obsLocations": {
              "path": "obsm/spatial"
            },
            "obsEmbedding": [
              {
                "path": "obsm/X_umap",
                "dims": [0, 1],
                "embeddingType": "UMAP (E13)"
              }
            ],
            "obsSets": [
              {
                "name": "Cell Types",
                "path": "obs/broad_cell_types"
              },
              {
                "name": "Finer Cell Types",
                "path": "obs/cell_types"
              },
              {
                "name": "Coronal Slice (Anterior to Posterior)",
                "path": "obs/library_id"
              }
              // {
              //   "name": "Leiden Clusters",
              //   "path": "obs/leiden"
              // }
            ],
            "obsFeatureMatrix": {
              "path": "X"
            }
          }
        }
      ]
    }
  ],
  "initStrategy":"auto",
  "coordinationSpace": {
    "dataset": {
      "A": "A",
      "B":"B"
    },
    "embeddingType": {
      "A": "UMAP (E11)",
      "B": "UMAP (E13)"
    },
    "obsType":{
      "A": "cell",
      "B": "cell"
    },
    "featureType": {
      "A": "gene",
      "B": "gene"
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
    "spatialImageLayer": {
      "A": [
        {
          "type": "raster",
          "index": 0,
          "colormap": null,
          "transparentColor": null,
          "opacity": 1,
          "domainType": "Min/Max",
          "channels": [
            {
              "selection": { "c": 0 },
              "color": [
                255,
                0,
                0
              ],
              "visible": true,
              "slider": [
                0,
                255
              ]
            },
            {
              "selection": { "c": 1 },
              "color": [
                0,
                255,
                0
              ],
              "visible": true,
              "slider": [
                0,
                255
              ]
            },
            {
              "selection": { "c": 2 },
              "color": [
                0,
                0,
                255
              ],
              "visible": true,
              "slider": [
                0,
                255
              ]
            }
          ]
        }
      ],
      "B":[
        {
          "type": "raster",
          "index": 0,
          "colormap": null,
          "transparentColor": null,
          "opacity": 1,
          "domainType": "Min/Max",
          "channels": [
            {
              "selection": { "c": 0 },
              "color": [
                255,
                0,
                0
              ],
              "visible": true,
              "slider": [
                0,
                255
              ]
            },
            {
              "selection": { "c": 1 },
              "color": [
                0,
                255,
                0
              ],
              "visible": true,
              "slider": [
                0,
                255
              ]
            },
            {
              "selection": { "c": 2 },
              "color": [
                0,
                0,
                255
              ],
              "visible": true,
              "slider": [
                0,
                255
              ]
            }
          ]
        }
      ]
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
    // // Shared views 
    // {
    //   "component": "description",
    //   "coordinationScopes": {
    //     "dataset": "shared"
    //   },
    //   "x": 0.0,
    //   "y": 0.0,
    //   "w": 3.0,
    //   "h": 3.0,
    //   "props": {
    //     "description": "My STARmap data."
    //   }
    // },
    // {
    //   "component": ""

    // },
    // {
    //   "component": "spatial",
    //   "coordinationScopes": {
    //     "dataset": "shared"
    //   },
    //   "coordinationScopesBy": {
    //     "spatialZoom": {
    //       "A": "A", 
    //       "B": "B"
    //     },
    //     "spatialTargetX": {
    //       "A": "A",
    //       "B":"B"
    //     },
    //     "spatialTargetY": {
    //       "A": "A",
    //       "B":"B"
    //     },
    //     "spatialSegmentationLayer": {
    //       "A": "A",
    //       "B":"B"
    //     }
    //   },
    //   "x": 3.0,
    //   "y": 0,
    //   "w": 3.0,
    //   "h": 12
    // },
    // {
    //   "component": "scatterplot",
    //   "coordinationScopes": {
    //     "dataset": "shared"
    //   },
    //   "coordinationScopesBy": {
    //     "embeddingType": {
    //       "A": "A",
    //       "B": "B"
    //     }
    //   },
    //   "x": 6.0,
    //   "y": 0,
    //   "w": 3.0,
    //   "h": 12
    // },
    // {
    //   "component": "featureList",
    //   "coordinationScopes": {
    //     "dataset": "shared"
    //   },
    //   "x": 0.0,
    //   "y": 6.0,
    //   "w": 3.0,
    //   "h": 6.0
    // },
    // {
    //   "component": "obsSets",
    //   "coordinationScopes": {
    //     "dataset": "shared"
    //   },
    //   "x": 0.0,
    //   "y": 3.0,
    //   "w": 3.0,
    //   "h": 3.0
    // },
    // {
    //   "component": "heatmap",
    //   "coordinationScopes": {
    //     "dataset": "shared"
    //   },
    //   "x": 9.0,
    //   "y": 0,
    //   "w": 3.0,
    //   "h": 12
    // },

    // Shared views 
    {
      "component": "description", 
      "x": 0.0,
      "y": 0.0,
      "w": 3.0,
      "h": 3.0,
      "props": {
        "description": "Spatial transcriptomics map of the developing mouse cerebellum. Coronal section from SPART-seq data, E11-E17 timepoints, four anterior to posterior slices taken per timepoint."
      }
    },
    // E11 Views 
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
      "h": 12
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
  ]
};