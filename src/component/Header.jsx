"use client";

import React from "react";
import Mobilemenu from "./Mobilemenu";
import { useDispatch } from "react-redux";
import { openModal } from "../reduxToolkit/features/modalSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="w-full ">
      {/* nav */}
      <nav className="flex items-center justify-between py-2 pl-8 pr-6 shadow-lg ">
        <a href="/">
          {" "}
          <img src="logo.png" alt="" />
        </a>
        <ul className="items-center justify-between hidden text-gray-600 md:flex">
          <li className="mr-6">
            <a href="/">HTML</a>
          </li>
          <li className="mr-6">
            <a href="/">CSS</a>
          </li>
          <li className="mr-6">
            <a href="/">JavaScript</a>
          </li>
          <li className="mr-6">
            <a href="/">React</a>
          </li>
          <li className="mr-6">
            <a href="/">Teams</a>
          </li>
        </ul>
        <button
          onClick={() => dispatch(openModal())}
          className=" hidden md:block px-4 py-2 font-bold text-white bg-[#57007B] rounded hover:bg-blue-700"
        >
          Get Started
        </button>

        {/* mobile nav */}
        <Mobilemenu />
      </nav>
    </header>
  );
};

export default Header;
