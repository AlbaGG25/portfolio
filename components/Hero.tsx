import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pb-20 pt-36 md:pt-80 justify-center items-center h-screen mx-auto"
    >
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
      </div>

      <div className="flex flex-col justify-enter items-center md:justify-items-end md:items-end md:pr-24">
        <h1 className="text-white uppercase text-2xl mb-6">Alba Ginés</h1>
        <h2 className="text-white uppercase mb-6 text-center md:text-right">
          From psychology to tech. <br></br>Transforming user needs into
          engaging digital products
        </h2>
        <button type="button" className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold-900 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            My projects
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
