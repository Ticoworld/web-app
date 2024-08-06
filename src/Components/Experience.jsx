import React, { useState, useContext } from "react";
import { FaBriefcase } from "react-icons/fa6";
import { RxCaretDown } from "react-icons/rx";
import { RiAddLine } from "react-icons/ri";
import { MdDelete, MdEditNote } from "react-icons/md";
import HandleExperienceInput from "./HandleExperienceInput";
import { AppContext } from "../App";

const Experience = () => {
  const { setEditIndex, experienceEntries, setExperienceEntries, editIndex } = useContext(AppContext);

  const [isVisible, setIsVisible] = useState(false);
  const [showExperienceInput, setShowExperienceInput] = useState(false);
  const [currentEntry, setCurrentEntry] = useState({
    company: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  const handleAddExperience = () => {
    setCurrentEntry({
      company: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
    setEditIndex(null);
    setShowExperienceInput(true);
  };

  const saveExperienceEntry = (company, positionTitle, startDate, endDate, location, description, index) => {
    if (index !== null) {
      const updatedEntries = [...experienceEntries];
      updatedEntries[index] = { company, positionTitle, startDate, endDate, location, description };
      setExperienceEntries(updatedEntries);
    } else {
      const newEntry = { company, positionTitle, startDate, endDate, location, description };
      setExperienceEntries([...experienceEntries, newEntry]);
    }
    setShowExperienceInput(false);
    setEditIndex(null);
  };

  const handleEditEntry = (index) => {
    const entry = experienceEntries[index];
    setCurrentEntry({ ...entry });
    setEditIndex(index);
    setShowExperienceInput(true);
  };

  const handleDeleteEntry = (index) => {
    const updatedEntries = experienceEntries.filter((_, i) => i !== index);
    setExperienceEntries(updatedEntries);
  };

  const handleCancel = () => {
    setShowExperienceInput(false);
    setEditIndex(null);
  };

  return (
    <div>
      <div className="bg-white py-5 px-3 rounded-xl shadow-lg mt-8 w-full flex flex-col justify-between gap-8 mb-10">
        <div
          className="font-extrabold text-bg-900 cursor-pointer flex justify-between items-center"
          onClick={toggle}
        >
          <div className="flex items-center justify-between gap-3 h-16">
            <FaBriefcase className="text-3xl" />
            <p className="text-xl">Experience</p>
          </div>
          <RxCaretDown className="text-2xl" />
        </div>
        <div className={isVisible ? "" : "hidden"}>
          {!showExperienceInput &&
            experienceEntries.map((entry, index) => (
              <div key={index} className="p-3 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <p>{entry.company}</p>
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
          {showExperienceInput && (
            <HandleExperienceInput
              saveExperienceEntry={saveExperienceEntry}
              experienceEntries={experienceEntries}
              handleCancel={handleCancel}
              currentEntry={currentEntry}
              editIndex={editIndex}
            />
          )}
          {!showExperienceInput && (
            <div
              className="flex justify-center items-center rounded-full w-32 m-auto h-10 font-extrabold gap-1 text-sm text-gray-700 border-4 cursor-pointer"
              onClick={handleAddExperience}
            >
              <RiAddLine className="text-xl" />
              <p>Experience</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
// 