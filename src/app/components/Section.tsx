import React from "react";
import PicWrapper from "./PicWrapper";
import PicWrapperPC from "./PicWrapperPC";

const Section = () => {
  return (
    <section className="flex md:flex-col lg:flex-row justify-center md:justify-between md:ml-20 md:mt-20 lg:mt-32 items-start font-jura">
      <div className="w-64 md:w-[380px] xl:w-[400px] text-center md:text-left">
        <div className="text-[#1a1a1a] md:text-[70px] lg:text-[80px] hidden md:block lg:mt-15">
          PORTFOLIO
        </div>
        <div className="text-[#1a1a1a] text-[16px] md:text-[30px] xl:text-[30px] mt-10 md:-mt-5">
          kritsadagorn punnapanich
        </div>
        <div className="text-[#1a1a1a] text-[10px] md:text-[12px] xl:text-[15px] mt-3 md:mt-1">
          Hi I’m Jai! I’m 22 and a Computer Engineering student at RMUTL.I’m
          really into learning new stuff — especially anything tech-related.
          Always up for discovering something new!
        </div>
        <div className="md:hidden mt-15">
          <PicWrapper />
        </div>
      </div>
      <div className="hidden md:block md:mt-8 lg:-mt-17">
        <PicWrapperPC />
      </div>
    </section>
  );
};

export default Section;
