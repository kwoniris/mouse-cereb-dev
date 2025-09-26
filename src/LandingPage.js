import React from "react";
import "./LandingPage.css"; // Ensure this file contains the necessary styles
import githubLogo from "./assets/github-logo.png"; // Replace with the actual path to the GitHub logo
import siteLogo from "./assets/site-logo.png"; // Replace with the actual path to the website logo

const datasets = [
  // All datasets for paper 
  { name: "E11", config: "e11", thumbnail: "/thumbnail/e11.png" },
  { name: "E12", config: "e12", thumbnail: "/thumbnail/e12.png" },
  { name: "E13", config: "e13", thumbnail: "/thumbnail/e13.png" },
  { name: "E14", config: "e14", thumbnail: "/thumbnail/e14.png" },
  { name: "E15", config: "e15", thumbnail: "/thumbnail/e15.png" },
  { name: "E17", config: "e17", thumbnail: "/thumbnail/e17.png" },
  { name: "P0",  config: "p0",  thumbnail: "/thumbnail/p0.png" },
  { name: "P4",  config: "p4",  thumbnail: "/thumbnail/p4.png" },
  { name: "P56", config: "p56", thumbnail: "/thumbnail/p56.png" },
];

export default function LandingPage() {
  const baseURL = "https://kwoniris.github.io/mouse-cereb-dev/";

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          {/* Top-left logo */}
          <a href="#abstract">
            <img src="/apple-touch-icon.png" alt="Brain Logo" className="navbar-logo" />
          </a>
          <a href="#abstract">Abstract</a>
          <a href="#spatial">Spatial</a> {/* spatial visualizations with Vitessce */}
          <a href="#singlecell">scRNAseq</a> {/* scRNAseq embeddings */}
          <a
            href="https://www.kebschull-lab.org/"
            target="_blank"
            rel="noreferrer"
          >
            Kebschull Lab 
          </a>
        </div>
        <div className="navbar-right">
          <a
            href="https://github.com/kwoniris/mouse-cereb-dev"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="GitHub" className="github-logo" />
          </a>
        </div>
      </nav>

      {/* Header Section */}
        <header className="page-header">
        <div className="header-content">
            <img src={siteLogo} alt="Website Logo" className="site-logo" />
            <div className="header-text">
            <h1>Mouse Cerebellum Development Explorer</h1>
            <h2>This app allows the exploration of cerebellar nuclei formation in the developing mouse cerebellum across E11 to P56 timepoints using spatial and single cell datasets. 
            </h2>
            </div>
        </div>
        </header>

        {/* Abstract Section */}
        <section id="abstract" className="abstract">
          <h2>Abstract</h2>
          <p>TODO: Abstract for paper goes here.</p>
          <p>
            <strong>Authors:</strong> Manjari Anant, Iris Kwon, Justus Kebschull, Author 4, ...
          </p>
          {/* Change link below with final link to manuscript. Currently using Justus's 2020 paper. */}
          <a href="https://www.science.org/doi/10.1126/science.abd5059" target="_blank" rel="noreferrer" className="button">Read Manuscript</a>
      </section>


        {/* Spatial Views Section */}
        <section id="spatial" className="spatial">
          <h2>Spatial Views</h2>
          <div className="grid">
            {datasets.map((ds) => (
              <a
                key={ds.config}
                className="app-card"
                href={`${baseURL}?config=${ds.config}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={ds.thumbnail} alt={ds.name} />
                <span>{ds.name}</span>
              </a>
            ))}
          </div>
        </section>

      {/* scRNAseq Embeddings Section */}
      <section id="singlecell" className="singlecell">
          <h2>scRNAseq Embeddings</h2>
          TODO: UMAP views go here. 
      </section>

      {/* GitHub Section */}
      <section id="github" className="github">
        <h3>GitHub Repository</h3>
        <p>View the source code, data, and tools used in this project.</p>
        <a href="https://github.com/kwoniris/mouse-cereb-dev" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </section>
      
      {/* Footer */}
      <footer className="page-footer">
        <p>&copy; Kebschull-Lab 2025</p>
        <p>
          Web development by <a href="https://www.linkedin.com/in/iriskwon/">Iris Kwon</a>, using <a href="https://vitessce.io/">Vitessce</a>
        </p>
        <p>
          All icons graphically designed by <a href="https://www.linkedin.com/in/iriskwon/">Iris Kwon</a>
        </p>
      </footer>
    </div>
  );
}