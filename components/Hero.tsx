import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <section id='hero' className="pb-20 pt-36 justify-center items-center">
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
      
      </div>
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-white uppercase text-2xl">Alba Ginés</h1>
      <h2 className="text-white uppercase mb-6 text-center">
        From psychology to tech. <br></br>Transforming user needs into engaging digital
        products
      </h2>
      <button className="p-[3px] relative">
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
