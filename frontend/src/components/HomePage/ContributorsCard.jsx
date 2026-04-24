import React from "react";

// Datasets
import { Contributors } from "../../datasets/Contributors";

// Icons
import { FaGithubSquare } from "react-icons/fa";

const ContributorsCard = ({ theme }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {Contributors.map((contributor, index) => {
        return (
          <div
            className={`z-20 p-4 min-w-[200px] max-w-[300px] lg:max-w-[350px] min-h-[150px] rounded-xl flex flex-col gap-4 hover:scale-105 transition-all duration-300 ${
              theme === "dark"
                ? "bg-[#161b22] border-[1px] border-gray-300/25 hover:border-[#58a6ff]"
                : "bg-[#ffffff] shadow-md border-[1px] border-gray-300/25 hover:border-[#165dfc]"
            }`}
          >
            {contributor.imageUrl && (
              <img
                src={contributor.imageUrl}
                alt="contributor"
                className="w-full"
              />
            )}

            <div className="flex flex-wrap items-center justify-center gap-4 font-bold text-lg md:text-xl lg:text-2xl">
              <h1 className="bg-clip-text text-transparent bg-neon-blue-gradient">
                {contributor.name}
              </h1>

              <a
                href={contributor.github}
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-xl hover:scale-105 transition-all duration-100 ${
                  theme === "dark"
                    ? "bg-[#0d1117] text-[#58a6ff] hover:bg-[#58a6ff] hover:text-black"
                    : "bg-[#f5f5ff] text-[#165dfc] hover:bg-[#165dfc] hover:text-white"
                }`}
              >
                <FaGithubSquare />
              </a>
            </div>

            <p className="text-xs md:text-sm">{contributor.contributions}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContributorsCard;
