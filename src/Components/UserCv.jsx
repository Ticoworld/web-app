import React from "react";
import CvHeader from "./CvHeader";
import CvBody from "./CvBody";

const UserCv = ({ activeLayout, activeFont, educationEntries }) => {
  return (
    <div
      className={`shadow-lg flex w-[793px] h-[842px] ${
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
      }`}>
      <CvHeader activeLayout={activeLayout} />
      <CvBody activeLayout={activeLayout} educationEntries={educationEntries} />
    </div>
  );
};

export default UserCv;
