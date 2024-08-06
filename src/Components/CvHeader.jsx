import React, { useContext } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AppContext } from "../App";

const CvHeader = ({ activeLayout }) => {
  const { fullName, email, phone, address, selectedColor } = useContext(AppContext);

  return (
    <div className={`bg-${selectedColor} w-full flex gap-4 flex-col items-center ${activeLayout === 'top' ? 'justify-center h-40' : 'h-full items-start flex flex-grow-0 w-2/8 p-8'}`}>
      <h2 className={`font-extrabold text-gray-50 text-4xl`}>{fullName}</h2>
      <div className={`flex gap-5 ${activeLayout === 'top' ? 'justify-between' : 'flex-col items-start'}`}>
        {email && (
          <div className="flex items-center justify-between gap-1 text-white">
            <MdEmail className="text-xl" />
            <p>{email}</p>
          </div>
        )}
        {phone && (
          <div className="flex items-center justify-between gap-1 text-white">
            <FaPhoneAlt className="text-xl" />
            <p>{phone}</p>
          </div>
        )}
        {address && (
          <div className="flex items-center justify-between gap-1 text-white">
            <FaLocationDot className="text-xl" />
            <p>{address}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CvHeader;
