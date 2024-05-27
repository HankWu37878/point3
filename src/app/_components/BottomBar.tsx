"use client";

import Image from "next/image";

export default function BottomBar() {
  return (
    <div className="bg-amber-100 w-full h-1/5 fixed bottom-0 flex justify-end py-10 px-14">
      <Image src="/Logo.png" alt="logo_pic" width={100} height={30}></Image>
    </div>
  );
}
