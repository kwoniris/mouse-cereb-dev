#########################################################################
# Script to preprocess, normalize, and export spatial data for Vitessce
# Iris Kwon (skwon38@jh.edu)
#
# Input: Path to spatial datasets (.h5ad)
# Output: Processed spatial data (.zarr)
#
# Running the script:
# General Command: python anndata_to_zarr.py 
# Example Command: python /Users/iriskwon/Desktop/mouse-cereb-dev/mouse-cereb-dev/code/anndata_to_zarr.py
#########################################################################

# Load all import statements required for the script
from import_utils import *

# Define input and output paths as strings
input_path = "/data_for_vitessce" # dir containing input .h5ad files 
output_path = "/res_for_vitessce" # dir for output .Zarr files 

# Placeholder for processing logic
# Add your data preprocessing, normalization, and export logic here
print(f"Processing data from: {input_path}")
print(f"Exporting processed data to: {output_path}")

# Set up argument parser
parser = argparse.ArgumentParser(description="Preprocess, normalize, and export spatial data for Vitessce.")
parser.add_argument("input_path", type=str, help="Path to the input directory containing .h5ad files")
parser.add_argument("output_path", type=str, help="Path to the output directory for .zarr files")

# Parse the arguments
args = parser.parse_args()

# Change the directory to the input path
os.chdir(args.input_path)
print("New working directory:", os.getcwd())

# Placeholder for processing logic
# Add your data preprocessing, normalization, and export logic here
print(f"Processing data from: {args.input_path}")
print(f"Exporting processed data to: {args.output_path}")