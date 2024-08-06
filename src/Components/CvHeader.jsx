import React, { useContext } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AppContext } from "../App";

const CvHeader = ({ activeLayout }) => {
  const { fullName, email, phone, address, selectedColor } =
    useContext(AppContext);

  const colorClasses = {
    "slate-800": "bg-slate-800",
    "teal-500": "bg-teal-500",
    "indigo-600": "bg-indigo-600",
    "green-600": "bg-green-600",
  };

  return (
    <div
      className={`${
        colorClasses[selectedColor]
      } w-full flex gap-4 flex-col items-center ${
        activeLayout === "top"
          ? "justify-center h-40"
          : "h-full items-start flex flex-grow-0 w-2/8 p-8"
      }`}>
      <h2 className={`font-extrabold text-gray-50 text-4xl`}>{fullName}</h2>
      <div
  className={`flex gap-5 ${
    activeLayout === "top" ? "justify-between" : "flex-col items-start"
  }`}
>
  {email && (
    <div className="flex items-center gap-2 text-white py-1 h-8">
      <MdEmail className="text-xl" />
      <p className="ml-1">{email}</p>
    </div>
  )}
  {phone && (
    <div className="flex items-center gap-2 text-white py-1 h-8">
      <FaPhoneAlt className="text-xl" />
      <p className="ml-1">{phone}</p>
    </div>
  )}
  {address && (
    <div className="flex items-center gap-2 text-white py-1 h-8">
      <FaLocationDot className="text-xl" />
      <p className="ml-1">{address}</p>
    </div>
  )}
</div>

    </div>
  );
};

export default CvHeader;
