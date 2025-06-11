import React from "react";
import PicWrapper from "./PicWrapper";
import PicWrapperPC from "./PicWrapperPC";
import { techTags } from "./data/TechTags";

const Section = () => {
  return (
    <section className="flex md:flex-col xl:flex-row justify-center md:justify-between md:ml-20 md:mt-8 xl:mt-32 items-start font-jura">
      <div className="w-72 md:w-[380px] xl:w-[400px] text-center md:text-left">
        <div className="text-[#1a1a1a] md:text-[70px] xl:text-[80px] hidden md:block xl:mt-15">
          PORTFOLIO
        </div>
        <div className="text-[#1a1a1a] text-[16px] md:text-[30px] xl:text-[30px] mt-10 md:-mt-5">
          kritsadagorn punnapanich
        </div>
        <div className="text-[#1a1a1a] text-[10px] md:text-[12px] xl:text-[17px] mt-3 md:mt-1">
          Hi I’m Jai! I’m 22 and a Computer Engineering student at RMUTL.I’m
          really into learning new stuff — especially anything tech-related.
          Always up for discovering something new!
        </div>
        <div className="mt-5 -mb-7 md:-mb-3">
          <span className="px-2 py-1 md:px-3 lg:px-5 text-white bg-[#4a4a4a] hover:bg-[#1a1a1a] transition duration-300 cursor-pointer text-[12px] md:text-[17px] xl:text-[20px] rounded-tr-full rounded-tl-full rounded-bl-full">
            VIEW MORE PROJECT
          </span>
        </div>
        {/* HERE */}
        <div className="md:hidden mt-15">
          <PicWrapper />
          <div className="md:hidden -mt-5">
            <div>
              main project - <span>positionExplorer</span>
            </div>
            <div className="flex flex-wrap justify-around mt-2 items-center">
              Tag :{" "}
              {techTags.map((tag, i) => (
                <div
                  key={i}
                  className={`px-2 py-[4px] rounded-xl text-white text-[8px] rounded-tr-full rounded-br-full ${tag.class}`}
                >
                  {tag.label}
                </div>
              ))}
              <span className="mt-2 md:hidden text-[13px]">
                A site for exploring tools used in computer engineering roles,
                based on job posting data.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:mt-8 xl:-mt-15">
        <PicWrapperPC />
      </div>
    </section>
  );
};

export default Section;
