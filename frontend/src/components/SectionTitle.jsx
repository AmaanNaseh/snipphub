import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-neon-blue-gradient">
          {title}
        </h1>
        <div className="w-[50px] lg:w-[75px] h-[4px] bg-neon-blue-gradient"></div>
      </div>

      <p className="text-sm lg:text-md max-w-[95%] lg:max-w-[75%] text-gray-500 font-semibold">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
