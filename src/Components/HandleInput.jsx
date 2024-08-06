import React, { useState } from "react";
import ClearLoadFile from "./ClearLoadFile";
import Education from "./Education";
import Experience from "./Experience";
import { useContext } from "react";
import { AppContext } from "../App";

const HandleInput = () => {
  const {fullName, setFullName, email, setEmail, phone, setPhone, address, setAddress}=useContext(AppContext);
  return (
      <div className=" w-[21rem]">
        <div className="user-details">
          <form action="" className="bg-white rounded-lg py-3 px-5 shadow-md">
            <h1 className="text-gray-900 text-2xl py-1 font-extrabold">
              Personal Details
            </h1>
            <label className="text-gray-900 font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Enter first and last name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                console.log(fullName);
              }}
              className="block bg-gray-200 w-full py-2 text-gray-900 focus:outline outline-blue-500 my-2 px-4 rounded-lg"
            />
            <label className="text-gray-900 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(email);
              }}
              className="block bg-gray-200 w-full py-2 text-gray-900 focus:outline outline-blue-500 my-2 px-4 rounded-lg"
            />
            <label className="text-gray-900 font-semibold">Phone number</label>
            <input
              type="tel"
              placeholder="Enter Phone number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                console.log(phone);
              }}
              className="block bg-gray-200 w-full py-2 text-gray-900 focus:outline outline-blue-500 my-2 px-4 rounded-lg"
            />
            <label className="text-gray-900 font-semibold">Address</label>
            <input
              type="add"
              placeholder="Enter City, Country"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                console.log(address);
              }}
              className="block bg-gray-200 w-full py-2 text-gray-900 focus:outline outline-blue-500 my-2 px-4 rounded-lg"
            />
          </form>
              <Education />
              <Experience />
        </div>
      </div>
  );
};

export default HandleInput;
