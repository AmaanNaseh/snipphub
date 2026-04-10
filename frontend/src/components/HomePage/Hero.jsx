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
        <h1 className="text-[50px] md:text-[80px] font-bold">
          SNIP
          <span className="bg-clip-text text-transparent bg-neon-blue-gradient">
            HUB
          </span>
        </h1>

        <p className="text-sm md:text-md lg:text-lg">
          A curated hub of powerful code snippets and CLI commands to speed up
          your workflow. Copy instantly, paste effortlessly, use seamlessly and
          collaborate with ease.
        </p>
      </div>

      <div className="space-y-12">
        {/* Features */}

        <div className="flex flex-wrap items-center justify-center gap-8 text-sm md:text-md lg:text-lg font-semibold text-white">
          <p className="bg-neon-blue-gradient px-2 py-1 rounded">
            {totalCommands} commands
          </p>

          <p className="bg-neon-blue-gradient px-2 py-1 rounded">
            {Commands ? Commands.length : "Loading"} technologies
          </p>

          <p className="bg-neon-blue-gradient px-2 py-1 rounded">
            Ready-Made Snippets
          </p>

          <p className="bg-neon-blue-gradient px-2 py-1 rounded">
            Command Line
          </p>

          <p className="bg-neon-blue-gradient px-2 py-1 rounded">
            Bash Scripting
          </p>

          <p className="bg-neon-blue-gradient px-2 py-1 rounded">
            Collaboration
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {Commands.map((item, index) => {
            return (
              <div
                key={index}
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
