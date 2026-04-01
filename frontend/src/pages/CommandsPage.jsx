import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

// Datasets
import { Commands } from "../datasets/Commands";

// Icons
import { IoIosArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";

const CommandsPage = ({ theme }) => {
  const [tech, setTech] = useState(null);
  const [filter, setFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  const location = useLocation();
  const currentLocation = location.pathname.split("commands/")[1];

  useEffect(() => {
    const filtered = Commands.find(
      (item) => item.techRoute.split("commands/")[1] === currentLocation,
    );

    setTech(filtered || null);
  }, [currentLocation]);

  const handleCopy = async (cmdToCopy) => {
    try {
      await navigator.clipboard.writeText(cmdToCopy);
      toast.success("Copied Successfully");
    } catch (error) {
      toast.error("Error !!! can't copy");
    }
  };

  return (
    <>
      <div className="space-y-10">
        <Link to={"/"}>
          <p
            className={`text-md md:text-lg lg:text-xl text-gray-600 font-semibold flex items-center gap-2 ${theme === "dark" ? "hover:text-gray-100" : theme === "green" ? "hover:text-gray-100" : "hover:text-black"}`}
          >
            <IoIosArrowBack /> Back to categories
          </p>
        </Link>

        {tech ? (
          <>
            {/* Tech Details */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 md:gap-8">
                <div
                  className={`p-4 rounded-xl font-bold ${theme === "dark" ? "bg-[#58a6ff] text-white" : theme === "green" ? "bg-[#161b22]" : "bg-card-gradient-light text-white"}`}
                >
                  <tech.techIcon className="text-[80px]" />
                </div>
                <div
                  className={`flex flex-col items-start gap-1 md:gap-2 ${theme === "dark" || theme === "green" ? "text-white" : "text-black"}`}
                >
                  <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
                    {tech.techName}
                  </h1>
                  <p
                    className={`text-sm md:text-md lg:text-lg ${theme === "dark" || theme === "green" ? "text-white" : "text-black"}`}
                  >
                    {tech.techDescription}
                  </p>
                </div>
              </div>

              {tech.commands.length > 0 ? (
                <p className="text-sm md:text-md lg:text-lg text-gray-600 font-semibold">
                  {tech.commands.length || "Loading..."} commands available
                </p>
              ) : (
                "No commands available"
              )}
            </div>

            {/* Search Bar */}
            <div className="w-full flex items-center justify-center gap-2">
              <CiSearch
                className={`text-4xl ${theme === "dark" || theme === "green" ? "text-white" : "text-black"}`}
              />
              <input
                type="text"
                className="w-[75%] p-2 text-black border-[1px] border-black rounded"
                placeholder="Search commands..."
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
            </div>

            {/* Categories/Filter */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
              <p
                onClick={() => {
                  setFilter("All");
                }}
                className={`z-20 p-4 rounded-xl border-[1px] cursor-pointer hover:scale-105 transition-all duration-300
                  ${
                    theme === "dark"
                      ? `bg-[#161b22] ${filter === "All" ? "bg-[#58a6ff] text-white" : "border-gray-300/25 hover:border-[#58a6ff]"}`
                      : theme === "green"
                        ? `bg-[#161b22] ${filter === "All" ? "border-[#00ff41] text-[#00ff41]" : "text-white hover:text-[#00ff41] hover:border-[#00ff41]"}`
                        : `shadow-md ${filter === "All" ? "bg-[#165dfc] text-white" : "bg-[#ffffff]  hover:bg-gray-100 text-black border-gray-300/25 hover:border-[#165dfc]"}`
                  } `}
              >
                All ({tech.commands.length || "0"})
              </p>
              {[...new Set(tech.commands.map((item) => item.cmdCategory))].map(
                (category, index) => {
                  return (
                    <>
                      {category !== "" && (
                        <p
                          onClick={() => {
                            setFilter(category);
                          }}
                          key={index}
                          className={`z-20 p-4 rounded-xl border-[1px] cursor-pointer hover:scale-105 transition-all duration-300
                          ${
                            theme === "dark"
                              ? `bg-[#161b22] ${filter === category ? "bg-[#58a6ff] text-white" : "border-gray-300/25 hover:border-[#58a6ff]"}`
                              : theme === "green"
                                ? `bg-[#161b22] ${filter === category ? "border-[#00ff41] text-[#00ff41]" : "text-white hover:text-[#00ff41] hover:border-[#00ff41]"}`
                                : `shadow-md ${filter === category ? "bg-[#165dfc] text-white" : "bg-[#ffffff] hover:bg-gray-100 hover:text-black border-gray-300/25 hover:border-[#165dfc]"}`
                          } `}
                        >
                          {category} (
                          {tech.commands.filter(
                            (item) => item.cmdCategory === category,
                          ).length || "0"}
                          )
                        </p>
                      )}
                    </>
                  );
                },
              )}
            </div>

            {/* Commands */}
            <div className="flex flex-col items-center justify-center gap-4">
              {/* Without Search */}
              {searchText === "" ? (
                <>
                  {/* All Commands */}
                  {filter === "All"
                    ? tech.commands.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className={`z-20 w-full lg:max-w-[75%] p-4 rounded-xl border-[1px] border-gray-300/25 flex flex-col gap-4 ${theme === "dark" ? "bg-[#161b22]" : theme === "green" ? "" : "bg-[#ffffff] shadow-md"}`}
                          >
                            <div className="w-full flex items-center justify-between flex-wrap gap-2">
                              <h1 className="font-bold text-md md:text-lg lg:text-xl">
                                {item.cmdTitle}
                              </h1>

                              <p
                                className={`p-2 rounded text-white ${
                                  theme === "dark"
                                    ? "bg-[#58a6ff]"
                                    : theme === "green"
                                      ? "border-[1px] border-[#00ff41]"
                                      : "bg-[#165dfc]"
                                }`}
                              >
                                {item.cmdCategory}
                              </p>
                            </div>
                            <p
                              className={`text-sm md:text-md lg:text-lg ${theme === "dark" || theme === "green" ? "text-white" : "text-black"}`}
                            >
                              {item.cmdDescription}
                            </p>
                            <pre className="text-md md:text-lg lg:text-xl w-full bg-[#0d1117] text-white rounded p-4 overflow-x-auto flex items-center justify-between">
                              {item.cmd}{" "}
                              <IoCopyOutline
                                onClick={() => {
                                  handleCopy(item.cmd);
                                }}
                                className="text-2xl hover:scale-110 transition-all duration-300 cursor-pointer"
                              />
                            </pre>
                          </div>
                        );
                      })
                    : // Filtered Commands
                      tech.commands
                        .filter((item) => item.cmdCategory === filter)
                        .map((item, index) => {
                          return (
                            <div
                              key={index}
                              className={`z-20 w-full lg:max-w-[75%] p-4 rounded-xl border-[1px] border-gray-300/25 flex flex-col gap-4 ${theme === "dark" ? "bg-[#161b22]" : theme === "green" ? "" : "bg-[#ffffff] shadow-md"}`}
                            >
                              <div className="w-full flex items-center justify-between flex-wrap gap-2">
                                <h1 className="font-bold text-md md:text-lg lg:text-xl">
                                  {item.cmdTitle}
                                </h1>

                                <p
                                  className={`p-2 rounded text-white ${
                                    theme === "dark"
                                      ? "bg-[#58a6ff]"
                                      : theme === "green"
                                        ? "border-[1px] border-[#00ff41]"
                                        : "bg-[#165dfc]"
                                  }`}
                                >
                                  {item.cmdCategory}
                                </p>
                              </div>
                              <p
                                className={`text-sm md:text-md lg:text-lg ${theme === "dark" || theme === "green" ? "text-white" : "text-black"}`}
                              >
                                {item.cmdDescription}
                              </p>
                              <pre className="text-md md:text-lg lg:text-xl w-full bg-[#0d1117] text-white rounded p-4 overflow-x-auto flex items-center justify-between">
                                {item.cmd}{" "}
                                <IoCopyOutline
                                  onClick={() => {
                                    handleCopy(item.cmd);
                                  }}
                                  className="text-2xl hover:scale-110 transition-all duration-300 cursor-pointer"
                                />
                              </pre>
                            </div>
                          );
                        })}
                </>
              ) : (
                <>
                  {/* Searching something in All commands */}
                  {filter === "All"
                    ? tech.commands
                        .filter(
                          (item) =>
                            item.cmdTitle.includes(searchText) ||
                            item.cmd.includes(searchText),
                        )
                        .map((item, index) => {
                          return (
                            <div
                              key={index}
                              className={`z-20 w-full lg:max-w-[75%] p-4 rounded-xl border-[1px] border-gray-300/25 flex flex-col gap-4 ${theme === "dark" ? "bg-[#161b22]" : theme === "green" ? "" : "bg-[#ffffff] shadow-md"}`}
                            >
                              <div className="w-full flex items-center justify-between flex-wrap gap-2">
                                <h1 className="font-bold text-md md:text-lg lg:text-xl">
                                  {item.cmdTitle}
                                </h1>

                                <p
                                  className={`p-2 rounded text-white ${
                                    theme === "dark"
                                      ? "bg-[#58a6ff]"
                                      : theme === "green"
                                        ? "border-[1px] border-[#00ff41]"
                                        : "bg-[#165dfc]"
                                  }`}
                                >
                                  {item.cmdCategory}
                                </p>
                              </div>
                              <p
                                className={`text-sm md:text-md lg:text-lg ${theme === "dark" || theme === "green" ? "text-white" : "text-black"}`}
                              >
                                {item.cmdDescription}
                              </p>
                              <pre className="text-md md:text-lg lg:text-xl w-full bg-[#0d1117] text-white rounded p-4 overflow-x-auto flex items-center justify-between">
                                {item.cmd}{" "}
                                <IoCopyOutline
                                  onClick={() => {
                                    handleCopy(item.cmd);
                                  }}
                                  className="text-2xl hover:scale-110 transition-all duration-300 cursor-pointer"
                                />
                              </pre>
                            </div>
                          );
                        })
                    : // Searching something in filtered commands
                      tech.commands
                        .filter(
                          (item) =>
                            item.cmdCategory === filter &&
                            item.cmdTitle.includes(searchText),
                        )
                        .map((item, index) => {
                          return (
                            <div
                              key={index}
                              className={`z-20 w-full lg:max-w-[75%] p-4 rounded-xl border-[1px] border-gray-300/25 flex flex-col gap-4 ${theme === "dark" ? "bg-[#161b22]" : theme === "green" ? "" : "bg-[#ffffff] shadow-md"}`}
                            >
                              <div className="w-full flex items-center justify-between flex-wrap gap-2">
                                <h1 className="font-bold text-md md:text-lg lg:text-xl">
                                  {item.cmdTitle}
                                </h1>

                                <p
                                  className={`p-2 rounded text-white ${
                                    theme === "dark"
                                      ? "bg-[#58a6ff]"
                                      : theme === "green"
                                        ? "border-[1px] border-[#00ff41]"
                                        : "bg-[#165dfc]"
                                  }`}
                                >
                                  {item.cmdCategory}
                                </p>
                              </div>
                              <p
                                className={`text-sm md:text-md lg:text-lg ${theme === "dark" || theme === "green" ? "text-white" : "text-black"}`}
                              >
                                {item.cmdDescription}
                              </p>
                              <pre className="text-md md:text-lg lg:text-xl w-full bg-[#0d1117] text-white rounded p-4 overflow-x-auto flex items-center justify-between">
                                {item.cmd}{" "}
                                <IoCopyOutline
                                  onClick={() => {
                                    handleCopy(item.cmd);
                                  }}
                                  className="text-2xl hover:scale-110 transition-all duration-300 cursor-pointer"
                                />
                              </pre>
                            </div>
                          );
                        })}
                </>
              )}
            </div>
          </>
        ) : (
          "Loading..."
        )}
      </div>
    </>
  );
};

export default CommandsPage;
