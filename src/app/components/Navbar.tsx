import React from "react";
import { FiAlignRight } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="font-jura flex justify-between md:justify-end">
      <div className="md:hidden ml-10 mt-9 text-xl text-[#1a1a1a]">
        PORTFOLIO
      </div>
      <div className="flex gap-3 xl:gap-10 mr-9 mt-10 text-xl text-[#575757]">
        <div className="navButton">Project</div>
        <div className="navButton">About</div>
        <div className="navButton">Contact</div>
        <div className="md:hidden text-xl">
          <FiAlignRight />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
