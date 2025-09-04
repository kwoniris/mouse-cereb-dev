import os
import sys
import warnings
import json
import logging
import requests
import anndata as ad 
import scanpy as sc
import numpy as np
import pandas as pd 
import matplotlib as mpl
from matplotlib import rcParams
import matplotlib.pyplot as plt 
import seaborn as sns 
import argparse 
import scipy 

# Configure Scanpy logging and settings
sc.logging.print_header() # Prints Scanpy version and system info to console 
sc.set_figure_params(facecolor="white", figsize=(8, 8), dpi=300) # Sets default figure parameters for Scanpy plots 
sc.settings.verbosity = 3

# Configure Vitessce settings 
from vitessce import (
    VitessceConfig,
    Component as cm,
    CoordinationType as ct,
    AnnDataWrapper,
)
from vitessce.data_utils import (
    optimize_adata,
    VAR_CHUNK_SIZE,
)

warnings.simplefilter(action="ignore", category=Warning)

sc.set_figure_params(facecolor="white", figsize=(8, 8))
sc.settings.verbosity = 3


print("All required packages loaded successfully!\n")



