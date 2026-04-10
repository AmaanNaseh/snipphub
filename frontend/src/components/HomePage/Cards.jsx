import React from "react";
import { Link } from "react-router-dom";

// Datasets
import { Commands } from "../../datasets/Commands";

// Icons
import { GoArrowRight } from "react-icons/go";

const Cards = ({ theme }) => {
  return (
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
                      : "bg-[#f5f5ff] text-[#165dfc] group-hover:bg-neon-blue-gradient group-hover:text-white"
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
  );
};

export default Cards;
