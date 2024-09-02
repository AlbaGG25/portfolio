import React from "react";
import Link from "next/link";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Mail from "./icons/Mail"

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 mx-auto flex flex-col justify-center items-center gap-5 md:flex-row md:justify-around"
      id="footer"
    >
      <div className="text-white md:text-2xl">© 2024 Alba Ginés</div>
      <section className="flex gap-5 md:text-3xl">
        <Link
          href="https://github.com/AlbaGG25"
          target="_blank"
          rel=" noreferrer"
          title="GitHub"
           className="relative z-10"
        >
         <Github />
        </Link>
        <a
          href="https://www.linkedin.com/in/alba-gg/"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
          className="relative z-10"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:developerdrm@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Mail"
          className=" relative z-10"
        >
          <Mail />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
