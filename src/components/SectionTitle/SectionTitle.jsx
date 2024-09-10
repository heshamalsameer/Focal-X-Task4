import React from "react";
import "./SectionTitle.css";
const SectionTitle = ({ title, text }) => {
  return (
    <div className="container d-flex flex-column align-items-center gap-2 text-center mt-5">
      <h3>{title}</h3>
      <span className="underline bg-maincolor rounded-pill"></span>
      <p>{text}</p>
    </div>
  );
};

export default SectionTitle;
