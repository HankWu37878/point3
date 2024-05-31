"use client";

import { useState } from "react";

export default function AvailableButton() {
  const [chosen, setChosen] = useState<boolean>(false);

  return (
    <>
      {chosen ? (
        <button
          className="lg:text-lg text-sm h-[10%] flex justify-center items-center rounded-md w-full text-black text-center bg-[#FFE900] border-[#FFE900] border-2 hover:before:content-['取消'] hover:after:content-[''] after:content-['已選擇'] hover:border-red-500 hover:bg-transparent hover:text-red-500"
          onClick={() => setChosen(false)}
        ></button>
      ) : (
        <button
          className="lg:text-lg text-sm h-[10%] flex justify-center items-center rounded-md w-full text-center text-[#FFE900] border-[#FFE900] border-2 hover:before:content-['可預約'] hover:after:content-[''] after:content-['可預約'] hover:bg-[#FFE900] hover:bg-opacity-20"
          onClick={() => setChosen(true)}
        ></button>
      )}
    </>
  );
}
