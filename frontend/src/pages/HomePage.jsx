import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HeaderAnimation from "../components/HeaderAnimation";

// Datasets
import { Commands } from "../datasets/Commands";

// Icons
import { GoArrowRight } from "react-icons/go";

const HomePage = ({ theme }) => {
  const [totalCommands, setTotalCommands] = useState(0);

  useEffect(() => {
    const total = Commands.reduce((sum, item) => sum + item.commands.length, 0);
    setTotalCommands(total);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-16">
      {/* Header Animation */}
      <HeaderAnimation theme={theme} />
      {/* Hero  */}
      <div className="space-y-8">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h1
            className={`text-[50px] md:text-[80px] lg:text-[120px] font-bold`}
          >
            {"<"}SNIPLINE {"/>"}
          </h1>

          <p
            className={`text-sm md:text-md lg:text-xl ${
              theme === "dark" ? "" : "text-gray-600"
            }`}
          >
            Quick access to commonly used commands across different systems and
            platforms.
          </p>

          <p
            className={`text-sm md:text-md lg:text-xl ${
              theme === "dark" ? "" : "text-gray-600"
            }`}
          >
            Click on any category to explore.
          </p>
        </div>

        <div
          className={`flex flex-wrap items-center justify-center gap-4 font-semibold ${
            theme === "dark" ? "" : "text-gray-600"
          }`}
        >
          {/* Categories */}
          <p>{Commands ? Commands.length : "Loading"} categories</p>
          <span>|</span>
          {/* Commands */}
          <p>{totalCommands} commands</p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap items-center justify-center gap-10">
        {Commands.map((item, index) => {
          return (
            <Link key={index} to={item.techRoute}>
              <div
                className={`z-20 group p-4 min-w-[200px] max-w-[300px] lg:max-w-[350px] min-h-[150px] rounded-xl flex flex-col gap-4 hover:scale-105 transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-[#161b22] border-[1px] border-gray-300/25 hover:border-[#58a6ff]"
                    : "bg-[#ffffff] shadow-md border-[1px] border-gray-300/25 hover:border-[#165dfc]"
                }`}
              >
                <div className="flex items-center gap-4 font-bold">
                  <div
                    className={`p-2 rounded-xl group-hover:scale-105 transition-all duration-100 ${
                      theme === "dark"
                        ? "bg-[#0d1117] text-[#58a6ff] group-hover:bg-[#58a6ff] group-hover:text-black"
                        : "bg-[#f5f5ff] text-[#165dfc] group-hover:bg-card-gradient-light group-hover:text-white"
                    }`}
                  >
                    <item.techIcon className="text-4xl" />
                  </div>
                  <h1>{item.techName}</h1>
                </div>
                <p className="text-xs md:text-sm font-semibold">
                  {item.commands.length} commands available
                </p>

                <p className="text-xs md:text-sm">{item.techDescription}</p>
                <div
                  className={`text-xs md:text-sm flex items-center justify-start gap-2 group-hover:gap-4 transition-all duration-100 font-semibold ${theme === "dark" ? "text-[#58a6ff]" : "text-[#165dfc]"}`}
                >
                  <span className="hover:scale-105">View Snippets</span>{" "}
                  <GoArrowRight className="text-2xl" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
