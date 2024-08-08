import React, { useContext } from "react";
import { AppContext } from "../App";

const CvEducation = () => {
  const { educationEntries, activeLayout } = useContext(AppContext);

  return (
    <div className="pt-7 pb-12">
      {educationEntries.map((entry, index) => (
        <div key={index} className="pb-4 text-sm">
          <div className="flex items-center gap-8">
          <div className={`w-4/12 ${activeLayout !== 'top' ? 'text-xs font-semibold' : 'text-md'}`}>
              <span>{entry.startDate}</span> - <span>{entry.endDate}</span>
            </div>
            <p className="font-bold w-9/12">{entry.school}</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="w-4/12">
              <span>{entry.location}</span>
            </div>
            <p className="text-sm font-semibold w-9/12">{entry.degree}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CvEducation;
