// SingleCellSection.jsx
import React, { useEffect, useRef } from "react";
import Vitessce from "vitessce";
import config from "../cb_dev-config"; // adjust path as needed

const SingleCellSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Create Vitessce widget in the div
      Vitessce.create(containerRef.current, config);
    }
  }, []);

  return (
    <section id="singlecell" className="singlecell">
      <h2>scRNAseq Embeddings</h2>
      <div className="vitessce-container">
        {/* Vitessce embed goes here */}
      </div>
    </section>
  );
};

export default SingleCellSection;
