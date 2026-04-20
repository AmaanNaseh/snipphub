import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { toast } from "react-toastify";

// Datasets
import { Commands } from "../datasets/Commands";
import { frontendAPI } from "../config/config";

// Icons
import { IoIosArrowBack, IoIosSend } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const CommandsPage = ({ theme }) => {
  const [tech, setTech] = useState(null);

  const [commandsData, setCommandsData] = useState([]);

  const [filter, setFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  const [isShareModalOpened, setIsShareModalOpened] = useState(false);
  const [urlToShare, setUrlToShare] = useState("");

  // To use url for fetching current tech info
  const location = useLocation();
  const currentLocation = location.pathname.split("commands/")[1];

  useEffect(() => {
    const filtered = Commands.find(
      (item) => item.techRoute.split("commands/")[1] === currentLocation,
    );

    setTech(filtered || null);
  }, [currentLocation]);

  // Search Query Handling
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchedCmdId = searchParams.get("cmdId");

  const clearSearchQuery = () => {
    if (searchedCmdId !== null) {
      navigate(`/commands/${currentLocation}`);
    }
  };

  // Dataset preparation
  const preparaeDataset = () => {
    if (!tech) return;

    // Handling shared command
    if (searchedCmdId !== null) {
      setCommandsData(
        tech.commands.filter((item) => item.cmdId === parseInt(searchedCmdId)),
      );
    } else {
      // Searching specific command
      if (searchText === "") {
        // No Filters, full data
        if (filter === "All") {
          setCommandsData(tech.commands);
        } else {
          setCommandsData(
            tech.commands.filter((item) => item.cmdCategory === filter),
          );
        }
      }
      // When Searched
      else {
        // find searched item in all commands
        if (filter === "All") {
          setCommandsData(
            tech.commands.filter(
              (item) =>
                item.cmdTitle
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                item.cmd.toLowerCase().includes(searchText.toLowerCase()),
            ),
          );
        }
        // find searched item in categorically filtered commands
        else {
          setCommandsData(
            tech.commands.filter(
              (item) =>
                item.cmdCategory === filter &&
                (item.cmdTitle
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                  item.cmd.toLowerCase().includes(searchText.toLowerCase())),
            ),
          );
        }
      }
    }
  };

  useEffect(() => {
    if (tech) preparaeDataset();
  }, [tech, filter, searchText]);

  // Copy command function
  const handleCopy = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success("Copied Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Error !!! can't copy");
    }
  };

  // To handle tech change from same page so filter resets
  useEffect(() => {
    setFilter("All");
  }, [location.pathname]);

  return (
    <>
      <div className="space-y-10">
        <Link to={"/"}>
          <p
            className={`text-md md:text-lg lg:text-xl text-gray-500 font-semibold flex items-center gap-2 ${theme === "dark" ? "hover:text-gray-100" : "hover:text-black"}`}
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
                  className={`p-4 rounded-xl font-bold ${theme === "dark" ? "bg-[#58a6ff] text-white" : "bg-[#165dfc] text-white"}`}
                >
                  <tech.techIcon className="text-[80px]" />
                </div>
                <div
                  className={`flex flex-col items-start gap-1 md:gap-2 ${theme === "dark" ? "text-white" : "text-black"}`}
                >
                  <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
                    {tech.techName}
                  </h1>
                  <p
                    className={`text-sm md:text-md lg:text-lg ${theme === "dark" ? "text-white" : "text-black"}`}
                  >
                    {tech.techDescription}
                  </p>
                </div>
              </div>

              {tech.commands.length > 0 ? (
                <p className="text-sm md:text-md lg:text-lg text-gray-500 font-semibold">
                  {tech.commands.length || "Loading..."} commands available
                </p>
              ) : (
                "No commands available"
              )}
            </div>

            {/* Search Bar */}
            <div className="w-full flex items-center justify-center gap-2">
              <CiSearch
                className={`text-4xl ${theme === "dark" ? "text-white" : "text-black"}`}
              />
              <input
                type="text"
                className="w-[75%] p-2 text-black border-[1px] border-black rounded"
                placeholder="Search commands..."
                onChange={(e) => {
                  clearSearchQuery();
                  setSearchText(e.target.value);
                }}
              />
            </div>

            {/* Categories/Filter */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
              <p
                onClick={() => {
                  clearSearchQuery();
                  setFilter("All");
                }}
                className={`z-20 p-4 rounded-xl border-[1px] cursor-pointer hover:scale-105 transition-all duration-300
                  ${
                    theme === "dark"
                      ? `bg-[#161b22] ${filter === "All" ? "bg-[#58a6ff] text-white" : "border-gray-300/25 hover:border-[#58a6ff]"}`
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
                            clearSearchQuery();
                            setFilter(category);
                          }}
                          key={index}
                          className={`z-20 p-4 rounded-xl border-[1px] cursor-pointer hover:scale-105 transition-all duration-300
                          ${
                            theme === "dark"
                              ? `bg-[#161b22] ${filter === category ? "bg-[#58a6ff] text-white" : "border-gray-300/25 hover:border-[#58a6ff]"}`
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
              {commandsData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`z-20 w-full lg:max-w-[75%] p-4 rounded-xl border-[1px] border-gray-300/25 flex flex-col gap-4 ${theme === "dark" ? "bg-[#161b22]" : "bg-[#ffffff] shadow-md"}`}
                  >
                    <div className="w-full flex items-center justify-between flex-wrap gap-2">
                      <h1 className="font-bold text-md md:text-lg lg:text-xl">
                        {item.cmdTitle}
                      </h1>

                      <p
                        className={`p-2 rounded text-white ${
                          theme === "dark" ? "bg-[#58a6ff]" : "bg-[#165dfc]"
                        }`}
                      >
                        {item.cmdCategory}
                      </p>
                    </div>
                    <p
                      className={`text-sm md:text-md lg:text-lg ${theme === "dark" ? "text-white" : "text-black"}`}
                    >
                      {item.cmdDescription}
                    </p>
                    <div className="relative">
                      <pre className="text-md md:text-lg lg:text-xl w-full bg-[#0d1117] text-white rounded p-4 overflow-x-auto">
                        {item.cmd}
                      </pre>
                      <IoCopyOutline
                        onClick={() => {
                          handleCopy(item.cmd);
                        }}
                        className="text-2xl hover:scale-110 transition-all duration-300 cursor-pointer absolute right-1 top-1"
                      />
                    </div>
                    <button
                      onClick={() => {
                        setIsShareModalOpened(true);
                        setUrlToShare(
                          `${frontendAPI}${tech.techRoute}?cmdId=${item.cmdId}`,
                        );
                      }}
                      className="w-fit p-2 rounded text-white bg-blue-600 hover:bg-blue-500 flex items-center justify-center gap-2"
                    >
                      Share <IoIosSend />
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          "Loading..."
        )}
      </div>

      {/* Share Modal */}
      {isShareModalOpened && (
        <div
          className={`fixed min-w-[300px] md:min-w-[400px] lg:min-w-[500px] max-w-[350px] md:max-w-[450px] lg:max-w-[550px] min-h-[150px] lg:min-h-[250px] bg-white text-black border-[2px] rounded p-4 pt-8 z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-4 ${theme === "dark" ? "border-[#58a6ff]" : "border-[#165dfc]"}`}
        >
          <button
            onClick={() => {
              setIsShareModalOpened(false);
            }}
            className="absolute top-2 right-2 font-bold bg-red-600 text-white p-1 rounded hover:scale-105 transition-all duration-300"
          >
            <RxCross1 className="font-bold text-xl" />
          </button>
          <h1>Share the command using following URL:</h1>
          <pre className="text-md md:text-lg lg:text-xl w-full bg-[#0d1117] text-white rounded p-4 overflow-x-auto">
            {urlToShare}
          </pre>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <button
              onClick={() => {
                handleCopy(urlToShare);
              }}
              className="w-fit p-2 rounded text-white bg-blue-600 hover:bg-blue-500 flex items-center justify-center gap-2"
            >
              Copy Link <IoCopyOutline />
            </button>

            <a
              href={urlToShare}
              target="_blank"
              rel="noreferrer"
              className="w-fit p-2 rounded text-white bg-blue-600 hover:bg-blue-500 flex items-center justify-center gap-2"
            >
              Check now
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandsPage;
