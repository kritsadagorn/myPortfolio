"use client";
import React from "react";
import { FiAlignRight } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="font-jura flex justify-between md:justify-end">
      <div className="md:hidden ml-10 mt-9 text-xl text-[#1a1a1a]">
        PORTFOLIO
      </div>
      <div className="flex gap-3 xl:gap-10 mr-9 mt-10 text-xl xl:text-4xl text-[#575757]">
        <Link href={"/Project"} className="navButton">
          Project
        </Link>
        <Link href={"/About"} className="navButton">
          About
        </Link>
        <Link href={"/Contact"} className="navButton">
          Contact
        </Link>
        <Link href={"/"} className="md:hidden text-xl">
          <FiAlignRight />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
