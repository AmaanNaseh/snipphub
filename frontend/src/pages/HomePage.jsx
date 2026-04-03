import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import HeroAnimation from "../components/HomePage/HeroAnimation";
import Hero from "../components/HomePage/Hero";
import Cards from "../components/HomePage/Cards";
import CodeLaptop from "../components/HomePage/CodeLaptop";
import CodeMobile from "../components/HomePage/CodeMobile";

const HomePage = ({ theme }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-40">
      {/* Hero Section */}
      <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between gap-5 lg:gap-10">
        <HeroAnimation theme={theme} />
        <Hero theme={theme} />
      </div>

      {/* 
      <CodeLaptop />
      <CodeMobile />
      */}

      {/* Cards */}
      <Cards theme={theme} />
    </div>
  );
};

export default HomePage;
