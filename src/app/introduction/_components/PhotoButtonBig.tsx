"use client";

import Image from "next/image";
import { useState } from "react";

import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

export default function PhotoButtonBig() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/big1.png", "/big2.png"];

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex) => (currentImageIndex - 1 + 2) % 2
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % 2);
  };

  return (
    <>
      <div className="relative flex flex-row justify-center items-center ">
        <button
          onClick={handlePreviousImage}
          className="absolute -left-6 bg-gray-800 text-white px-2 py-1 flex justify-center items-center rounded-full w-12 h-12 bg-opacity-50"
        >
          <ArrowBackIosRoundedIcon />
        </button>
        <Image
          src={images[currentImageIndex]}
          alt="big pic"
          width={683}
          height={384}
        />
        <button
          onClick={handleNextImage}
          className="absolute -right-6 bg-gray-800 text-white px-2 py-1 flex justify-center items-center rounded-full w-12 h-12 bg-opacity-50"
        >
          <ArrowForwardIosRoundedIcon />
        </button>
      </div>
    </>
  );
}
