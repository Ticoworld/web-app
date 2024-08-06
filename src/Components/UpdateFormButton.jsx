import React from "react";

const UpdateFormButton = ({saveEducationEntry, handleCancel}) => {
  return (
    <div className="pt-4">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <div className="border-gray-400 text-gray-500 gap-1 border p-2 text-sm rounded-md w-[4rem] text-center cursor-pointer"
          onClick={handleCancel}
          >
            <p>Cancel</p>
          </div>
          <div className="bg-blue-500 text-white p-[.6rem] text-sm rounded-md w-[4rem] text-center cursor-pointer"
          onClick={saveEducationEntry}
          >
            <p>Save</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateFormButton;
