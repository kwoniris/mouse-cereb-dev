// SingleCellSection.jsx
import React, { useEffect, useRef } from "react";
import { Vitessce } from "vitessce"; // note: named import
import {config} from "../cb_dev-config"; // adjust path as needed

const SingleCellSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      Vitessce.create(containerRef.current, config);
    }
  }, []);

  return (
    <section id="singlecell" className="singlecell">
      <h2>scRNAseq Embeddings</h2>
      <div className="vitessce-container" ref={containerRef} />
    </section>
  );
};

export default SingleCellSection;
