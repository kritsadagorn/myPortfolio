"use client";

import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import Image from "next/image";

const PicWrapperPC: React.FC = () => {
  const glideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!glideRef.current) return;

    const glide = new Glide(glideRef.current, {
      type: "carousel",
      perView: 1,
      hoverpause: true, // Pause on hover
      animationDuration: 800, // Smooth transition
      bound: true, // ป้องกันการวนซ้ำ (no infinite loop)
      breakpoints: {
        768: {
          perView: 1, // หน้าจอ < 768px แสดง 1 รูป
        },
        1024: {
          perView: 1, // หน้าจอ >= 1024px ยังคงแสดง 1 รูป
        },
      },
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <div
      ref={glideRef}
      className="glide md:max-w-[600px] lg:max-w-[900px] my-0 mx-auto relative shadow-xl"
    >
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <Image
              src="/mainSection/RecentProgram.png"
              alt="Slide 1"
              className="w-full h-auto rounded-lg"
            />
          </li>
          <li className="glide__slide">
            <Image
              src="/mainSection/RecentProgram2.png"
              alt="Slide 2"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </li>
          <li className="glide__slide">
            <Image
              src="/mainSection/RecentProgram3.png"
              alt="Slide 3"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </li>
        </ul>
      </div>
      <div
        className="glide__arrows absolute bottom-8 right-5 flex gap-2"
        data-glide-el="controls"
      >
        <button className="wrapperBtn" data-glide-dir="<">
          <IoMdArrowDropleft />
        </button>
        <button className="wrapperBtn" data-glide-dir=">">
          <IoMdArrowDropright />
        </button>
      </div>
    </div>
  );
};

export default PicWrapperPC;
