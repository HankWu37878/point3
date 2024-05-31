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
      (currentImageIndex) =>
        (currentImageIndex - 1 + images.length) % images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      (currentImageIndex) => (currentImageIndex + 1) % images.length
    );
  };

  return (
    <div className="relative flex justify-center items-center w-3/5 h-2/5 lg:h-80 overflow-hidden rounded-lg shadow-lg">
      <button
        onClick={handlePreviousImage}
        className="absolute left-2 lg:left-4 bg-gray-900 text-white p-2 flex justify-center items-center rounded-full w-8 h-8 lg:w-10 lg:h-10 bg-opacity-70 hover:bg-opacity-100 transition duration-300 ease-in-out z-10"
      >
        <ArrowBackIosRoundedIcon />
      </button>
      <Image
        src={images[currentImageIndex]}
        alt="big pic"
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 ease-in-out transform hover:scale-105"
      />
      <button
        onClick={handleNextImage}
        className="absolute right-2 lg:right-4 bg-gray-900 text-white p-2 flex justify-center items-center rounded-full w-8 h-8 lg:w-10 lg:h-10 bg-opacity-70 hover:bg-opacity-100 transition duration-300 ease-in-out z-10"
      >
        <ArrowForwardIosRoundedIcon />
      </button>
    </div>
  );
}
