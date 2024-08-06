import React, { useState } from "react";

const Layout = ({setActiveLayout, activeLayout}) => {
  const handleLayout = (layout) => {
    setActiveLayout(layout);
  };

  return (
    <div>
      <div className="bg-white shadow-lg rounded-xl px-6 py-4">
        <h1 className="text-2xl font-extrabold text-gray-900 pb-7">Layout</h1>
        <div className="flex justify-start items-center gap-4">
          <div
            className="flex justify-center items-center flex-col cursor-pointer"
            onClick={() => {
              handleLayout("top");
            }}>
            <div className="flex w-12 h-12 border rounded-lg overflow-hidden flex-col border-gray-700">
              <div className="bg-slate-800 flex-1"></div>
              <div className="bg-white flex-1"></div>
            </div>
            <p className="text-gray-700">top</p>
          </div>
          <div
            className="flex justify-center items-center flex-col cursor-pointer"
            onClick={() => {
              handleLayout("left");
            }}>
            <div className="flex w-12 h-12 border rounded-lg overflow-hidden border-gray-700">
              <div className="bg-slate-800 flex-1"></div>
              <div className="bg-white flex-1"></div>
            </div>
            <p className="text-gray-700">left</p>
          </div>
          <div
            className="flex justify-center items-center flex-col cursor-pointer"
            onClick={() => {
              handleLayout("right");
            }}>
            <div className="flex w-12 h-12 border rounded-lg overflow-hidden flex-row-reverse border-gray-700">
              <div className="bg-slate-800 flex-1"></div>
              <div className="bg-white flex-1"></div>
            </div>
            <p className="text-gray-700">right</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
