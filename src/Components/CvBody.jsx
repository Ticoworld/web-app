import React, { useContext } from "react";
import CvEducation from "./CvEducation";
import CvExperience from "./CvExperience";
import { AppContext } from "../App";

const CvBody = ({ activeLayout }) => {
  const { selectedColor } = useContext(AppContext);

  const colorClasses = {
    "slate-800": "text-slate-800",
    "teal-500": "text-teal-500",
    "indigo-600": "text-indigo-600",
    "green-600": "text-green-600",
  };

  return (
    <div className={`px-10 py-7 bg-white h-full flex-grow ${activeLayout !== 'top' ? 'w-6/8' : ''}`}>
      {/* Education */}
      <h1 className={`bg-gray-300 text-center font-bold ${colorClasses[selectedColor]} rounded-sm text-lg`}>
        Education
      </h1>
      <CvEducation />

      {/* Experience */}
      <h1 className={`bg-gray-300 text-center font-bold ${colorClasses[selectedColor]} rounded-sm text-lg`}>
        Professional Experience
      </h1>
      <CvExperience />
    </div>
  );
};

export default CvBody;
