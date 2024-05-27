"use client";
import { publicEnv } from "@/lib/env/public";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HeaderBar() {
  const route = useRouter();
  const [clicked, setClicked] = useState(1);
  const handleClickHomePage = () => {
    setClicked(1);
    route.push(`${publicEnv.NEXT_PUBLIC_BASE_URL}`);
  };
  const handleClickIntroductionPage = () => {
    setClicked(2);
    route.push(`/introduction`);
  };

  const handleClickReservationPage = () => {
    setClicked(3);
    route.push(`/reservation`);
  };

  const handleClickContactPage = () => {
    setClicked(4);
    route.push(`/contact`);
  };

    return (
        <div className="bg-amber-100 w-screen flex justify-center fixed top-8 z-50">
            <div className="w-2/3 justify-between flex">
                <button className={cn("hover:shadow-md hover:bg-amber-200 py-4 w-1/6", clicked === 1 && "bg-yellow-500 text-white")} onClick={handleClickHomePage}>
                    <h1 className="lg:text-xl text-sm">
                        首頁
                    </h1>
                </button>
                <button className={cn("hover:shadow-md hover:bg-amber-200 py-4 w-1/6", clicked === 2 && "bg-yellow-500 text-white")} onClick={handleClickIntroductionPage}>
                    <h1 className="lg:text-xl text-sm">
                        練團室介紹
                    </h1>
                </button>
                <button className={cn("hover:shadow-md hover:bg-amber-200 py-4 w-1/6", clicked === 3 && "bg-yellow-500 text-white")} onClick={handleClickReservationPage}>
                    <h1 className="lg:text-xl text-sm">
                        練團室預約
                    </h1>
                </button>
                <button className={cn("hover:shadow-md hover:bg-amber-200 py-4 w-1/6", clicked === 4 && "bg-yellow-500 text-white")} onClick={handleClickContactPage}>
                    <h1 className="lg:text-xl text-sm">
                        聯絡我們
                    </h1>
                </button>
            </div>
        </div>
    );
}
