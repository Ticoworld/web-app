import React from "react";
import { useState } from "react";
import HandleInput from "./HandleInput";
import HandleCustomize from "./HandleCustomize";
import ClearLoadFile from "./ClearLoadFile";

const HandleEditPage = ({ active, setActiveLayout, activeLayout, activeFont, setActiveFont }) => {

  return (
    <div className=" w-[21rem] relative">
      <div>
        <ClearLoadFile />
        {active === "content" && <HandleInput />}
        {active === "customize" && (
          <HandleCustomize
            setActiveLayout={setActiveLayout}
            activeLayout={activeLayout}
            activeFont = {activeFont}
            setActiveFont={setActiveFont}
          />
        )}
      </div>
    </div>
  );
};

export default HandleEditPage;
