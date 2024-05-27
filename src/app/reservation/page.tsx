import Image from "next/image";
import Selectors from "./_components/Selectors";
import Timetable from "./_components/Timetable";

export default async function ReservationPage() {
  return (
    <>
      <div className="bg-black min-h-screen w-screen text-xl py-32">
        <div className="bg-reservationpage h-1/3 w-screen text-xl flex-col items-center px-16 py-8 text-white space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="lg:text-7xl text-4xl text-yellow-500 font-medium animate-pulse-short delay-300">練團室預約</h1>
            <Image
            className="animate-pulse-short delay-300 lg:w-32 w-16"
            src = "/Logo.png"
            alt = "logo_pic"
            width = {100}
            height = {30}
            ></Image>
          </div>
          <p className="lg:text-lg text-xs font-semibold">練團室預約規則:</p>
          <p className="lg:text-lg text-xs">1.請根據練團人數選擇適當練團室 ( 參見練團室介紹 )</p>
          <p className="lg:text-lg text-xs">2.請選擇欲使用練團室之日期</p>
          <p className="lg:text-lg text-xs">3.點選<span className="text-amber-100">送出查詢</span>按鈕</p>
          <p className="lg:text-lg text-xs">4.請在下方選擇可預約的時段後點擊<span className="text-orange-500">確認預約</span>按鈕填寫預約資料</p>
          <p className="lg:text-lg text-xs">5.完整輸入姓名，電話及電子郵件</p>
          <p className="lg:text-lg text-xs">6.練團室內禁止飲食</p>
        </div>
        <Selectors/>
        <div className="py-10 px-16 w-full">
          <p className="text-amber-100 bg-column1 text-center px-2 py-1 lg:text-lg text-xs">請點擊下方時間表選擇預約時段</p>

        </div>
        <div className="lg:w-3/4 w-full flex gap-4 px-8 lg:px-32 py-2 mx-auto h-20">
                <div className="w-1/6 flex justify-center rounded-md text-yellow-500 text-center font-semibold lg:text-2xl sm:text-base items-center">練團室 108</div>
                <div className="flex justify-center rounded-md bg-column2 w-1/6 text-white text-center items-center lg:text-lg text-sm break-all">2024/5/22</div>
                <div className="flex justify-center rounded-md  bg-column1 w-1/6 text-white text-center items-center lg:text-lg text-sm break-all">2024/5/23</div>
                <div className="flex justify-center rounded-md bg-column1  w-1/6 text-white text-center items-center lg:text-lg text-sm break-all">2024/5/24</div>
                <div className="flex justify-center rounded-md bg-column1  w-1/6 text-white text-center items-center lg:text-lg text-sm break-all">2024/5/25</div>
                <div className="flex justify-center rounded-md bg-column1  w-1/6 text-white text-center items-center lg:text-lg text-sm break-all">2024/5/26</div>
        </div>     
        <Timetable/>    
      </div>
    </>
  )
}
