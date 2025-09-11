// src/LandingPage.js
import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#apps">Apps</a>
        <a href="#github">GitHub</a>
      </nav>

      {/* Header */}
      <header className="page-header">
        <h1>Embryonic Cerebellum Explorer</h1>
        <h2>Interactive visualization of STARmap datasets</h2>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About</h2>
        <p>
          This site provides interactive exploration of STARmap transcriptomics
          datasets across embryonic development stages.
        </p>
      </section>

      {/* Apps Section */}
      <section id="apps" className="apps">
        <h2>Explore Datasets</h2>
        <div className="grid">
          <a
            href="/e11"
            className="app-card"
          >
            <img
              src={`${process.env.PUBLIC_URL}/thumbnail/e11.png`}
              alt="E11 dataset"
            />
            <span>E11 Dataset</span>
          </a>
          <a
            href="/e13"
            className="app-card"
          >
            <img
              src={`${process.env.PUBLIC_URL}/thumbnail/e13.png`}
              alt="E13 dataset"
            />
            <span>E13 Dataset</span>
          </a>
          <a
            href="/e15"
            className="app-card"
          >
            <img
              src={`${process.env.PUBLIC_URL}/thumbnail/e15.png`}
              alt="E15 dataset"
            />
            <span>E15 Dataset</span>
          </a>
          <a
            href="/e17"
            className="app-card"
          >
            <img
              src={`${process.env.PUBLIC_URL}/thumbnail/e17.png`}
              alt="E17 dataset"
            />
            <span>E17 Dataset</span>
          </a>
        </div>
      </section>

      {/* GitHub Section */}
      <section id="github" className="github">
        <h2>GitHub</h2>
        <p>
          View the source code and contribute to development on GitHub.
        </p>
        <a
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </section>

      {/* Footer */}
      <footer className="page-footer">
        <p>
          Built with ❤️ using React and Vitessce
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
