import React, { useState } from "react";
import { Link } from "react-router-dom";

// Datasets
import { Commands } from "../datasets/Commands";

// Icons
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { IoTerminal } from "react-icons/io5";

const Navbar = ({ theme, setTheme }) => {
  const [isSideNav, setIsSideNav] = useState(false);
  const [isFeatures, setIsFeatures] = useState(false);

  return (
    <nav
      className={`z-50 sticky top-0 left-0 w-full flex items-center justify-between p-4 px-8 border-b-[1px] border-b-gray-300/25 ${theme === "dark" ? "bg-[#0d1117]" : theme === "green" ? "bg-[#000100]" : "bg-white"}`}
    >
      <Link to={"/"}>
        <h1
          className={`font-bold text-lg lg:text-2xl hover:scale-105 transition-all duration-300 ${theme === "dark" ? "text-[#58a6ff]" : theme === "green" ? "text-[#00ff41]" : "text-[#165dfc]"}`}
        >
          {"<"}Snipline {"/>"}
        </h1>
      </Link>

      {/* Large screens */}

      <ul className="hidden lg:inline-flex items-center justify-center gap-12">
        <Link to={"/"}>
          <li
            className={`hover:scale-105 hover:underline transition-all duration-300 ${theme === "dark" || theme === "green" ? "text-white" : "text-black"}`}
          >
            Home
          </li>
        </Link>

        <li
          className={`hover:scale-105 hover:underline transition-all duration-300 cursor-pointer flex items-center gap-2 ${theme === "dark" || theme === "green" ? "text-white" : "text-black"}`}
          onClick={() => {
            setIsFeatures(!isFeatures);
          }}
        >
          Features
          <span
            className={`p-1 text-sm rounded-full border-[1px] ${theme === "dark" || theme === "green" ? "border-white" : "border-black"}`}
          >
            {isFeatures ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </li>
      </ul>

      {/* Large Screens Features */}
      {isFeatures && (
        <div
          className={`hidden z-50 lg:flex fixed top-[80px] left-0 w-full h-fit p-20 items-center justify-start gap-40 flex-wrap border-y-[1px] border-y-gray-300/25 
            ${
              theme === "dark"
                ? "bg-[#0d1117]"
                : theme === "green"
                  ? "bg-[#000100]"
                  : "bg-white"
            }`}
        >
          {Commands.map((item, index) => {
            return (
              <Link
                to={item.techRoute}
                key={index}
                className="flex items-center gap-8 font-bold group hover:scale-105 transition-all duration-100"
                onClick={() => {
                  setIsFeatures(false);
                }}
              >
                <div
                  className={`p-2 rounded-xl bg-[#f5f5ff] ${
                    theme === "dark"
                      ? "text-[#58a6ff] group-hover:bg-[#58a6ff] group-hover:text-black"
                      : theme === "green"
                        ? "text-black group-hover:bg-[#00ff41] group-hover:text-black"
                        : "text-[#165dfc] group-hover:bg-card-gradient-light group-hover:text-white"
                  }`}
                >
                  <item.techIcon className="text-[80px]" />
                </div>
                <h1
                  className={`group-hover:underline ${theme === "dark" || theme === "green" ? "text-white" : "text-black"}`}
                >
                  {item.techName}
                </h1>
              </Link>
            );
          })}
        </div>
      )}

      {/* Theme Toggle */}
      <div className="flex flex-wrap items-center gap-2 p-2 text-3xl border-[1px] border-gray-600">
        <CiLight
          onClick={() => {
            setTheme("light");
          }}
          className={`cursor-pointer hover:scale-105 transition-all duration-300 ${theme === "light" ? "text-[#165dfc]" : "hover:text-[#165dfc]"} ${theme === "green" ? "text-white" : ""}`}
        />
        <MdDarkMode
          onClick={() => {
            setTheme("dark");
          }}
          className={`cursor-pointer hover:scale-105 transition-all duration-300 ${theme === "dark" ? "text-[#58a6ff]" : "hover:text-[#58a6ff]"} ${theme === "green" ? "text-white" : ""}`}
        />
        <IoTerminal
          onClick={() => {
            setTheme("green");
          }}
          className={`cursor-pointer hover:scale-105 transition-all duration-300 ${theme === "green" ? "text-[#00ff41]" : "hover:text-[#00ff41]"}`}
        />
      </div>

      {/* Small screens */}
      {isSideNav ? (
        <RxCross1
          className="lg:hidden text-4xl cursor-pointer hover:scale-105 transition-all duration-300"
          onClick={() => {
            setIsSideNav(false);
          }}
        />
      ) : (
        <RiMenu3Line
          className="lg:hidden text-4xl cursor-pointer hover:scale-105 transition-all duration-300"
          onClick={() => {
            setIsSideNav(true);
          }}
        />
      )}

      {isSideNav ? (
        <div
          className={`lg:hidden z-50 fixed top-[80px] left-0 w-full h-fit flex flex-col gap-4 p-8 border-y-[1px] border-y-gray-300/25 ${
            theme === "dark"
              ? "bg-[#0d1117]"
              : theme === "green"
                ? "bg-[#000100]"
                : "bg-white"
          }`}
        >
          {Commands.map((item, index) => {
            return (
              <Link
                to={item.techRoute}
                key={index}
                className="group hover:scale-105 transition-all duration-100 flex items-center gap-2"
                onClick={() => {
                  setIsSideNav(false);
                }}
              >
                <div
                  className={`p-2 rounded-xl bg-[#f5f5ff] ${
                    theme === "dark"
                      ? "text-[#58a6ff] group-hover:bg-[#58a6ff] group-hover:text-black"
                      : theme === "green"
                        ? "text-black group-hover:bg-[#00ff41] group-hover:text-black"
                        : "text-[#165dfc] group-hover:bg-card-gradient-light group-hover:text-white"
                  }`}
                >
                  <item.techIcon className="text-lg" />
                </div>
                <h1
                  className={`group-hover:underline ${theme === "dark" || theme === "green" ? "text-white" : "text-black"}`}
                >
                  {item.techName}
                </h1>
              </Link>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
