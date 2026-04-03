import React, { useEffect, useState } from "react";

// Datasets
import { Commands } from "../../datasets/Commands";

const Hero = ({ theme }) => {
  const [totalCommands, setTotalCommands] = useState(0);

  useEffect(() => {
    const total = Commands.reduce((sum, item) => sum + item.commands.length, 0);
    setTotalCommands(total);
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="text-center">
        <h1 className={`text-[50px] md:text-[80px] font-bold`}>
          {"<"}SNIPLINE {"/>"}
        </h1>

        <p className="text-sm md:text-md lg:text-lg">
          Quick access to commonly used commands across different systems and
          platforms. <br /> Click on any category to explore.
        </p>
      </div>

      {/* Categories */}
      <div className="text-center space-y-4">
        <p className="text-lg lg:text-xl font-semibold">
          {Commands ? Commands.length : "Loading"} categories:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {Commands.map((item) => {
            return (
              <div
                className={`p-2 rounded text-xl md:text-2xl lg:text-3xl ${theme === "dark" ? "bg-[#58a6ff] text-black" : "bg-[#165dfc] text-white"}`}
              >
                <item.techIcon />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
