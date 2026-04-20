import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Datasets
import { Commands } from "../datasets/Commands";

// Icons
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Navbar = ({ theme, setTheme }) => {
  const [isSideNav, setIsSideNav] = useState(false);
  const [isTechnologies, setIsTechnologies] = useState(false);

  const location = useLocation();

  return (
    <nav
      className={`z-50 sticky top-0 left-0 w-full flex items-center justify-between p-4 px-8 border-b-[1px] border-b-gray-300/25 ${theme === "dark" ? "bg-[#0d1117]" : "bg-white"}`}
    >
      <Link to={"/"}>
        <h1
          className={`font-bold text-lg lg:text-2xl hover:scale-105 transition-all duration-300 ${theme === "dark" ? "text-[#58a6ff]" : "text-[#165dfc]"}`}
        >
          {"<"}SnippHub {"/>"}
        </h1>
      </Link>
      {/* Large screens */}
      <ul className="hidden lg:inline-flex items-center justify-center gap-12">
        <Link to={"/"}>
          <li
            className={`hover:scale-105 hover:underline transition-all duration-300 ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            Home
          </li>
        </Link>

        <li
          className={`hover:scale-105 hover:underline transition-all duration-300 cursor-pointer flex items-center gap-2 ${theme === "dark" ? "text-white" : "text-black"}`}
          onClick={() => {
            setIsTechnologies(!isTechnologies);
          }}
        >
          Technologies
          <span
            className={`p-1 text-sm rounded-full border-[1px] ${theme === "dark" ? "border-white" : "border-black"}`}
          >
            {isTechnologies ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </li>

        <Link to={"/api"}>
          <li
            className={`hover:scale-105 hover:underline transition-all duration-300 ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            API
          </li>
        </Link>
      </ul>

      {/* Large Screens Technologies */}
      {isTechnologies && (
        <div
          className={`hidden z-50 overflow-auto lg:flex fixed top-[80px] left-0 w-full h-fit p-20 items-center justify-start gap-40 flex-wrap border-y-[1px] border-y-gray-300/25 
            ${theme === "dark" ? "bg-[#0d1117]" : "bg-white"}`}
        >
          {Commands.map((item, index) => {
            return (
              <Link
                to={`/commands${item.techRoute}`}
                key={index}
                className="flex items-center gap-8 font-bold group hover:scale-105 transition-all duration-100"
                onClick={() => {
                  setIsTechnologies(false);
                }}
              >
                <div
                  className={`p-2 rounded-xl  ${
                    theme === "dark"
                      ? `text-[#000] group-hover:bg-[#58a6ff] group-hover:text-white ${item.techRoute === location.pathname.split("commands")[1] ? "bg-[#58a6ff] text-white" : "bg-[#f5f5ff]"}`
                      : `text-[#165dfc] group-hover:bg-[#165dfc] group-hover:text-white ${item.techRoute === location.pathname.split("commands")[1] ? "bg-[#165dfc] text-white" : "bg-[#f5f5ff]"}`
                  }`}
                >
                  <item.techIcon className="text-[80px]" />
                </div>
                <h1
                  className={`group-hover:underline ${theme === "dark" ? "text-white" : "text-black"}`}
                >
                  {item.techName}
                </h1>
              </Link>
            );
          })}
        </div>
      )}

      {/* Theme Toggle */}
      {theme === "dark" ? (
        <div
          className="p-2 rounded-xl text-3xl  bg-[#f5f5ff] text-black border-[1px] border-gray-600 cursor-pointer hover:scale-105 transition-all duration-100"
          onClick={() => {
            setTheme("light");
            localStorage.setItem("theme", "light");
          }}
        >
          <CiLight />
        </div>
      ) : (
        <div
          className="p-2 rounded-xl text-3xl bg-[#0d1117] text-white border-[1px] border-gray-600 cursor-pointer hover:scale-105 transition-all duration-100"
          onClick={() => {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
          }}
        >
          <MdDarkMode />
        </div>
      )}

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
          className={`lg:hidden z-50 overflow-auto fixed top-[80px] left-0 w-full h-fit flex flex-col gap-4 p-8 border-y-[1px] border-y-gray-300/25 ${
            theme === "dark" ? "bg-[#0d1117]" : "bg-white"
          }`}
        >
          {Commands.map((item, index) => {
            return (
              <Link
                to={`/commands${item.techRoute}`}
                key={index}
                className="group hover:scale-105 transition-all duration-100 flex items-center gap-2"
                onClick={() => {
                  setIsSideNav(false);
                }}
              >
                <div
                  className={`p-2 rounded-xl ${
                    theme === "dark"
                      ? `text-[#000] group-hover:bg-[#58a6ff] group-hover:text-white ${item.techRoute === location.pathname.split("commands")[1] ? "bg-[#58a6ff] text-white" : "bg-[#f5f5ff]"}`
                      : `text-[#165dfc] group-hover:bg-[#165dfc] group-hover:text-white ${item.techRoute === location.pathname.split("commands")[1] ? "bg-[#165dfc] text-white" : "bg-[#f5f5ff]"}`
                  }`}
                >
                  <item.techIcon className="text-lg" />
                </div>
                <h1
                  className={`group-hover:underline ${theme === "dark" ? "text-white" : "text-black"}`}
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
