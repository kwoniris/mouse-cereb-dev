import React from "react";
import "./LandingPage.css"; // Ensure this file contains the necessary styles
import githubLogo from "./assets/github-logo.png"; // Replace with the actual path to the GitHub logo
import siteLogo from "./assets/site-logo.png"; // Replace with the actual path to the website logo

const datasets = [
  { name: "E11 Dataset", config: "e11", thumbnail: "/thumbnail/e11.png" },
  { name: "E13 Dataset", config: "e13", thumbnail: "/thumbnail/e13.png" },
  { name: "E15 Dataset", config: "e15", thumbnail: "/thumbnail/e15.png" },
  { name: "E17 Dataset", config: "e17", thumbnail: "/thumbnail/e17.png" },
];

export default function LandingPage() {
  const baseURL = "https://kwoniris.github.io/mouse-cereb-dev/";

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#abstract">Abstract</a>
          <a href="#about">About</a>
          <a href="#apps">Visualizations</a>
          {/* <a href="#tutorial">Tutorial</a> */}
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
            <h2>Interactive spatial transcriptomics across embryonic stages</h2>
            </div>
        </div>
      </header>

        {/* Visualizations Section */}
        <section id="apps" className="apps">
        <h2>Visualizations</h2>
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

      {/* Abstract Section */}
      <section id="abstract" className="abstract-authors">
        <h2>Abstract</h2>
        <p>Explore cerebellar development using spatial transcriptomics datasets from E11 to E17.</p>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About</h2>
        <p>This project provides interactive visualizations of spatial transcriptomics data across embryonic stages.</p>
      </section>

      {/* Tutorial Section */}
      {/* <section id="tutorial" className="tutorial">
        <h2>Tutorial</h2>
        <p>Click on a dataset below to explore the spatial transcriptomics data in Vitessce.</p>
      </section> */}

      {/* Footer */}
      <footer className="page-footer">
        <p>© 2025 Iris Kwon. All rights reserved.</p>
      </footer>
    </div>
  );
}