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
    <div className="w-full flex flex-col items-center gap-4">
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h1 className={`text-[50px] md:text-[80px] font-bold`}>
          {"<"}SNIPLINE {"/>"}
        </h1>

        <p
          className={`text-sm md:text-md lg:text-lg ${
            theme === "dark" ? "" : "text-gray-600"
          }`}
        >
          Quick access to commonly used commands across different systems and
          platforms.
        </p>

        <p
          className={`text-sm md:text-md lg:text-lg ${
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
  );
};

export default Hero;
