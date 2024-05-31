"use client";

import Image from "next/image";

export default function BottomBar() {
  return (
    <div className="bg-black w-full h-8 fixed bottom-0 flex justify-end py-2 px-8">
      <Image src="/Logo.png" alt="logo_pic" width={30} height={200}></Image>
    </div>
  );
}
