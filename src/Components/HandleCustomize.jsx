import React, { useContext } from "react";
import { AppContext } from "../App";
import Layout from "./Layout";
import Fonts from "./Fonts";

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

  const colorClasses = {
    "slate-800": "bg-slate-800",
    "teal-500": "bg-teal-500",
    "indigo-600": "bg-indigo-600",
    "green-600": "bg-green-600",
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
                className={`${colorClasses[color.value]} rounded-full h-10 w-10 shadow-2xl shadow-black cursor-pointer ${
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
