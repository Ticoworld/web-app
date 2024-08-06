import React, { useContext } from "react";
import Layout from "./Layout";
import Fonts from "./Fonts";
import { AppContext } from "../App";

const HandleCustomize = ({
  activeLayout,
  setActiveLayout,
  activeFont,
  setActiveFont,
}) => {
  const { selectedColor, setSelectedColor } = useContext(AppContext);

  const colors = [
    { name: "Slate", value: "slate-800" },
    { name: "Teal", value: "teal-500" },
    { name: "Indigo", value: "indigo-600" },
    { name: "Green", value: "green-600" },
  ];

  const handleColorSelect = (colorValue) => {
    setSelectedColor(colorValue);
  };

  return (
    <div className="">
      {/* layout */}
      <Layout activeLayout={activeLayout} setActiveLayout={setActiveLayout} />

      {/* color */}
      <div className="bg-white shadow-lg rounded-xl px-6 py-4 my-7">
        <h1 className="text-2xl font-extrabold text-gray-900 py-3">Color</h1>
        <div className="flex items-center justify-start gap-3">
          <div className="flex items-center justify-start gap-2">
            {colors.map((color) => (
              <div
                key={color.value}
                className={`bg-${color.value} rounded-full h-10 w-10 shadow-2xl shadow-black cursor-pointer ${
                  selectedColor === color.value ? "ring-4 ring-gray-500" : ""
                }`}
                onClick={() => handleColorSelect(color.value)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* fonts */}
      <Fonts activeFont={activeFont} setActiveFont={setActiveFont} />
    </div>
  );
};

export default HandleCustomize;
