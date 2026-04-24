import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Commands } from "../datasets/Commands";
import { Contributors } from "../datasets/Contributors";

// Assets
import api_interface from "../assets/api_interface.png";

// Components
import HeroAnimation from "../components/HomePage/HeroAnimation";
import Hero from "../components/HomePage/Hero";
import TechCards from "../components/HomePage/TechCards";
import ContributorsCard from "../components/HomePage/ContributorsCard";

import CodeLaptop from "../components/HomePage/CodeLaptop";
import CodeMobile from "../components/HomePage/CodeMobile";

import SectionTitle from "../components/SectionTitle";

const HomePage = ({ theme }) => {
  const uniqueCategories = [
    ...new Set(Commands.map((item) => item.techCategory)),
  ].sort((a, b) => b.localeCompare(a)); // reverse sorted

  return (
    <div className="flex flex-col items-center justify-center gap-28">
      {/* Hero Section */}
      <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-center lg:items-start lg:justify-between gap-5 lg:gap-10">
        <HeroAnimation theme={theme} />
        <Hero theme={theme} />
      </div>

      <div className="space-y-16 w-full">
        <SectionTitle
          title={"Why SnippHub ?"}
          description={
            "Unlike AI, it helps you to memorize commands by copying and updating as per your usecase"
          }
        />

        <div className="flex flex-col-reverse items-center justify-center md:flex-row flex-wrap gap-10 md:gap-20 lg:gap-40">
          <p className="md:w-[30%] text-justify">
            Instead of relying on AI every time, SnippHub helps you build muscle
            memory by encouraging you to copy, tweak, and reuse commands
            tailored to your workflow. With a growing library of carefully
            curated snippets across multiple technologies, you can instantly
            find exactly what you need and get back to building without
            interruptions.
          </p>

          <CodeLaptop />
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row flex-wrap gap-10 md:gap-20 lg:gap-40">
          <div className="scale-75">
            <CodeMobile />
          </div>

          <p className="md:w-[30%] text-justify">
            Built for developers who value speed and accuracy, SnippHub delivers
            a seamless experience with instant copy functionality, zero
            dependency on server delays, and consistently reliable syntax.
            Whether you're working with CLI commands, scripting, or reusable
            templates, SnippHub keeps everything organized and accessible in one
            place. Explore, learn, and collaborate as you expand your toolkit
            and streamline your development process.
          </p>
        </div>
      </div>

      {/* API Section */}
      <div className="space-y-16 w-full">
        <SectionTitle
          title={"Free SnippHub API"}
          description={
            "SnippHub provides free API through which you can fetch commands and integrate it with your system"
          }
        />

        <div className="flex flex-col items-center justify-center gap-8">
          <Link to={"/api"}>
            <button className="bg-neon-blue-gradient px-8 py-4 text-lg md:text-xl text-white font-bold rounded hover:scale-105 transition-all duration-300">
              Generate your Free API Now
            </button>
          </Link>

          <img
            src={api_interface}
            alt="API Interface"
            className="w-full h-full min-h-[200px]"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-16 w-full">
        <SectionTitle
          title={"Technologies"}
          description={
            "Dive into the world of snippets !!! Explore the vast ocean of technologies and see how they work"
          }
        />

        {uniqueCategories.map((category) => (
          <div
            key={category}
            className="flex flex-col items-center justify-center gap-4"
          >
            <h1 className="font-bold bg-clip-text text-transparent bg-neon-blue-gradient">
              {category}
            </h1>
            <TechCards theme={theme} techCategory={category} />
          </div>
        ))}
      </div>

      {/* Open-Source Contributors */}
      <div className="space-y-16 w-full">
        <SectionTitle
          title={"Open-Source Contributors"}
          description={
            "Contributions eliminate the gap from skills to real-life validation "
          }
        />

        <a
          className="flex items-center justify-center"
          href="https://github.com/AmaanNaseh/snipphub"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-neon-blue-gradient px-4 py-2 text-lg md:text-xl text-white font-bold rounded hover:scale-105 transition-all duration-300">
            Feel Free to Contribute
          </button>
        </a>

        <ContributorsCard theme={theme} />
      </div>
    </div>
  );
};

export default HomePage;
