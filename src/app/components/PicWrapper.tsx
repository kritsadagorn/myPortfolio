"use client";
import React, { useState, useEffect } from "react";
import "../../assets/mainSection/PicWrapper.css";
import Image from "next/image";

// กำหนด interface สำหรับภาพ
interface Image {
  id: number;
  src: string;
  alt: string;
}

const PicWrapper: React.FC = () => {
  const [rotationCount, setRotationCount] = useState<number>(0);
  const cellCount: number = 3;

  const images: Image[] = [
    { id: 0, src: "/mainSection/RecentProgram.png", alt: "Image 1" },
    { id: 1, src: "/mainSection/RecentProgram2.png", alt: "Image 2" },
    { id: 2, src: "/mainSection/RecentProgram3.png", alt: "Image 3" },
  ];

  const rotateCarousel = (targetIndex: number): void => {
    const diff = targetIndex - currentIndex;
    // คำนวณทิศทางที่สั้นที่สุด
    const shortestDirection =
      (diff + cellCount) % cellCount > cellCount / 2 ? diff - cellCount : diff;
    setRotationCount((prevCount: number) => prevCount + shortestDirection);
  };

  // คำนวณภาพปัจจุบัน
  const currentIndex = ((rotationCount % cellCount) + cellCount) % cellCount;

  useEffect(() => {
    const carousel = document.querySelector(".carousel") as HTMLElement;
    const angle = rotationCount * (-360 / cellCount);
    carousel.style.transform = `rotateY(${angle}deg)`;
  }, [rotationCount]);

  return (
    <div className="scene">
      <div className="carousel">
        {images.map((image: Image, index: number) => (
          <div
            key={image.id}
            className="carousel__cell"
            style={{
              transform: `rotateY(${
                (360 / cellCount) * index
              }deg) translateZ(150px)`,
              opacity: index === currentIndex ? 1 : 0.5,
              cursor: "pointer",
            }}
            onClick={() => rotateCarousel(index)} // เปลี่ยนจากทิศทางคงที่เป็นส่ง index เป้าหมาย
          >
            <Image src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PicWrapper;
