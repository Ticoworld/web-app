import React, { useState, useContext } from "react";
import App, { AppContext } from "../App";

import { MdDelete } from "react-icons/md";

const ClearLoadFile = () => {
  const handleClear = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setPhone("");
    setAddress("");
    setEducationEntries([]);
    setExperienceEntries([]);
  };

  const handleReload = () => {
    window.location.reload();
  };

  const {
    setFullName,
    setEmail,
    setPhone,
    setAddress,
    setEducationEntries,
    setExperienceEntries,
  } = useContext(AppContext);
  return (
    <div className="sticky top-0">
      <div className="">
        <div className="bg-white flex items-center justify-between py-2 px-3 rounded-lg shadow-xl mb-8 gap-1 w-full">
          <div className="flex items-center justify-center text-red-700 font-bold py-[.45rem] cursor-pointer flex-1 rounded-lg">
            <MdDelete className="text-xl" />
            <p
              className="text-sm"
              onClick={() => {
                handleClear();
              }}>
              Clear Resume
            </p>
          </div>
          <div
            className="bg-gray-300 text-center rounded-lg py-[.45rem] font-bold text-bg-900 cursor-pointer flex-1 text-sm px-1"
            onClick={() => {
              handleReload()
            }}>
            <p>Load Example</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClearLoadFile;
