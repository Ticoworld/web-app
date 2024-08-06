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
    <div className={`px-4 py-4 sm:px-10 sm:py-7 bg-white h-full flex-grow ${activeLayout !== 'top' ? 'w-full sm:w-8/8' : ''}`}>
      {/* Education */}
      <div  className={`bg-gray-200 text-center font-bold ${colorClasses[selectedColor]} rounded-sm text-lg pb-4 mt-6`}>
        <h1>Education</h1>
      </div>
      
      <div className="mb-6">
        <CvEducation />
      </div>

      {/* Experience */}
      <div  className={`bg-gray-200 text-center font-bold ${colorClasses[selectedColor]} rounded-sm text-lg pb-4`}>
        <h1>Professional Experience</h1>
      </div>
      
      <div className="mb-6">
        <CvExperience />
      </div>
    </div>
  );
};

export default CvBody;
