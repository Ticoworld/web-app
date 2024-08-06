import React, { useContext } from "react";
import { AppContext } from "../App";

const CvExperience = () => {
  const { experienceEntries } = useContext(AppContext);

  return (
    <div className="bg-white py-5 px-3 rounded-xl mt-3 w-full">
      <div className="font-extrabold text-bg-900"></div>
      <div>
        {experienceEntries.map((entry, index) => (
          <div key={index} className="pb-4">
            <div className="flex items-center gap-1">
              <div className="w-4/12 text-sm">
                <span>{entry.startDate}</span> - <span>{entry.endDate}</span>
              </div>
              <p className="font-bold w-9/12">{entry.company}</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4/12 text-sm">
                <span>{entry.location}</span>
              </div>
              <p className="text-sm font-semibold w-9/12">
                {entry.positionTitle}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4/12"></div>
              <p className="text-md w-9/12">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CvExperience;
