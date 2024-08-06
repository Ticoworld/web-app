import React from "react";
import CvHeader from "./CvHeader";
import CvBody from "./CvBody";

const UserCv = ({ activeLayout, activeFont }) => {
  return (
    <div
      className={`shadow-lg flex ${
        activeLayout === "top"
          ? "flex-col"
          : activeLayout === "right"
          ? "flex-row-reverse"
          : "flex-row"
      } ${
        activeFont === "serif"
          ? "font-serif"
          : activeFont === "mono"
          ? "font-mono"
          : ""
      }`}
      style={{ width: "100%", maxWidth: "800px", height: "auto", minHeight: "842px" }}
    >
      <CvHeader activeLayout={activeLayout} />
      <CvBody activeLayout={activeLayout} />
    </div>
  );
};

export default UserCv;
