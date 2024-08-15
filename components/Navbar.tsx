"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="text-white fixed w-full z-50 md:p-8">
      <div className="flex cursor-pointer ">
        <div
          className={`fixed md:relative inset-0 bg-opacity-90 flex flex-col md:flex-row justify-center md:justify-end items-center transition-transform duration-300 md:p-5 ${
            menuOpen ? "block" : "hidden"
          } md:flex  md:w-full`}
        >
          <ul className="text-lg uppercase space-y-8 md:space-y-0 md:flex md:space-x-6">
            <li>
              <Link href="/">
                <p className="block py-2 md:py-0 text-center">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="block py-2 md:py-0 text-center">About</p>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <p className="block py-2 md:py-0 text-center">Projects</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="block py-2 md:py-0 text-center">Contact</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden ml-52" onClick={handleClick}>
          <div className="space-y-2">
            <span
              className={`block w-8 h-1 rounded bg-white transform transition duration-300 ${
                menuOpen ? "rotate-45 translate-y-3" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 rounded bg-white transition duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 rounded bg-white transform transition duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
