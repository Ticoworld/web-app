import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaPenRuler } from "react-icons/fa6";

const HandleFormat = ({ active, setActive }) => {
  const handleActive = (item) => {
    setActive(item);
  };
  return (
      <div className="bg-white py-3 px-2 w-[6.6rem] rounded-md flex flex-col gap-2 sticky top-0">
        <div
          className={`p-3 flex justify-center items-center flex-col gap-1 rounded-md font-semibold text-gray-900 cursor-pointer ${
            active === "content" ? "bg-gray-200" : ""
          }
         `}
          onClick={() => {
            handleActive("content");
          }}>
          <FaRegFileAlt className="text-gray-900" />
          <p>Content</p>
        </div>
        <div
          className={`p-3 flex justify-center items-center flex-col gap-1 rounded-md font-semibold text-gray-900 cursor-pointer ${
            active === "customize" ? "bg-gray-200" : ""
          }
         `}
          onClick={() => {
            handleActive("customize");
          }}>
          <FaPenRuler />
          <p>Customize</p>
        </div>
      </div>
  );
};

export default HandleFormat;
