"use client";
import React from "react";
import { StarsBackground } from "./ui/StarsBackground";
import { TypewriterEffectSmooth } from "./ui/Typewriter";

const Hero = () => {
  interface Word {
    text: string;
    className?: string;
  }
  const words: Word[] = [
    {
      text: "Transforming",
    },
    {
      text: "user",
      className: "text-gold",
    },
    {
      text: "needs",
      className: "text-gold",
    },
    {
      text: "into",
    },
    {
      text: "digital",
    },
    {
      text: "products.",
    },
  ];
  return (
    <section
      id="hero"
      className="mb-20 pt-36 md:pt-80 md:mb-40 justify-center items-center h-screen mx-auto"
    >
      <div>
        <StarsBackground />
      </div>

      <div className="flex flex-col justify-enter items-center ">
        <h1 className="sm:pt-26 text-white mb-6 font-bold text-base sm:text-3xl md:text-4xl lg:text-6xl text-center">
          Alba Ginés
        </h1>
        <h2 className="text-white mb-6 text-base text-center sm:text-l md:text-xl lg:text-3xl">
          From psychology to tech.
        </h2>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col gap-2 md:gap-8 md:flex-row md:justify-evenly m-10 md:mt-8">
          <a
            href="#projects"
            className="p-[1px] md:p-[3px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold-900 rounded-lg" />
            <button type="button" className="px-4 lg:px-10 py-2 lg:py-4  bg-black rounded-[8px]  relative group transition duration-200 text-white lg:text-2xl hover:bg-transparent hover:shadow-lg hover:shadow-gold">
              My projects
            </button>
          </a>
          <a
            href="mailto:developerdrm@gmail.com"
            className="p-[1px] md:p-[3px] relative "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold-900 rounded-lg " />
            <button type="button" className="px-4 lg:px-10 py-2 lg:py-4 bg-black rounded-[8px]  relative group transition duration-200 hover:shadow-lg hover:shadow-gold text-white lg:text-2xl hover:bg-transparent" >
              Contact me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
