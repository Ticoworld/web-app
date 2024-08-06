import React, { useState, useContext } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { RxCaretDown } from "react-icons/rx";
import { RiAddLine } from "react-icons/ri";
import { MdDelete, MdEditNote } from "react-icons/md";
import HandleEducationInput from "./HandleEducationInput";
import { AppContext } from "../App";

const Education = () => {
  const { setEditIndex, educationEntries, setEducationEntries, editIndex } = useContext(AppContext);

  const [isVisible, setIsVisible] = useState(false);
  const [showEducationInput, setShowEducationInput] = useState(false);
  const [currentEntry, setCurrentEntry] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  const handleAddEducation = () => {
    setCurrentEntry({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
    setEditIndex(null);
    setShowEducationInput(true);
  };

  const saveEducationEntry = (school, degree, startDate, endDate, location, index) => {
    if (index !== null) {
      const updatedEntries = [...educationEntries];
      updatedEntries[index] = { school, degree, startDate, endDate, location };
      setEducationEntries(updatedEntries);
    } else {
      const newEntry = { school, degree, startDate, endDate, location };
      setEducationEntries([...educationEntries, newEntry]);
    }
    setShowEducationInput(false);
    setEditIndex(null); // Reset edit index after saving
  };

  const handleEditEntry = (index) => {
    const entry = educationEntries[index];
    setCurrentEntry({ ...entry });
    setEditIndex(index);
    setShowEducationInput(true);
  };

  const handleDeleteEntry = (index) => {
    const updatedEntries = educationEntries.filter((_, i) => i !== index);
    setEducationEntries(updatedEntries);
  };

  const handleCancel = () => {
    setShowEducationInput(false);
    setEditIndex(null); // Reset edit index
  };

  return (
    <div>
      <div className="bg-white py-5 px-3 rounded-xl shadow-lg mt-8 w-full flex flex-col justify-between gap-8">
        <div
          className="font-extrabold text-bg-900 cursor-pointer flex justify-between items-center"
          onClick={toggle}
        >
          <div className="flex items-center justify-between gap-3 h-16">
            <FaGraduationCap className="text-3xl" />
            <p className="text-xl">Education</p>
          </div>
          <RxCaretDown className="text-2xl" />
        </div>
        <div className={isVisible ? "" : "hidden"}>
          {!showEducationInput &&
            educationEntries.map((entry, index) => (
              <div key={index} className="p-3 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <p>{entry.school}</p>
                  <div className="flex justify-between gap-2">
                    <div
                      className="flex border-red-400 items-center justify-center gap-1 border p-2 text-sm rounded-md text-red-500 w-20 cursor-pointer"
                      onClick={() => handleDeleteEntry(index)}
                    >
                      <MdDelete className="text-lg" />
                      <p>Delete</p>
                    </div>
                    <div
                      className="flex border-blue-400 items-center justify-center gap-1 border p-2 text-sm rounded-md text-blue-500 w-20 cursor-pointer"
                      onClick={() => handleEditEntry(index)}
                    >
                      <MdEditNote className="text-lg" />
                      <p>Edit</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {showEducationInput && (
            <HandleEducationInput
              saveEducationEntry={saveEducationEntry}
              educationEntries={educationEntries}
              handleCancel={handleCancel}
              currentEntry={currentEntry} // Pass the current entry data
              editIndex={editIndex}
            />
          )}
          {!showEducationInput && (
            <div
              className="flex justify-center items-center rounded-full w-32 m-auto h-10 font-extrabold gap-1 text-sm text-gray-700 border-4 cursor-pointer"
              onClick={handleAddEducation}
            >
              <RiAddLine className="text-xl" />
              <p>Education</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
