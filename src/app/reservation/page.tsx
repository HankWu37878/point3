import Selectors from "./_components/Selectors";
import Timetable from "./_components/Timetable";

export default async function ReservationPage() {
  return (
    <div className="bg-black min-h-screen w-screen text-xl py-32">
      <div className="bg-reservationpage h-1/3 w-screen flex items-center justify-center px-16 py-8 text-white space-y-4">
        <div className="text-xs lg:text-lg font-medium bg-black bg-opacity-50 flex-col px-8 w-[45%] rounded-lg py-4">
          <p>練團室預約規則：</p>
          <p>1. 請根據練團人數選擇適當練團室 ( 參見練團室介紹 )</p>
          <p>2. 請選擇欲使用練團室之日期</p>
          <p>
            3. 點選
            <span className="text-[#FFE900]">送出查詢</span>
            按鈕
          </p>
          <p>
            4. 請在下方選擇可預約的時段後點擊
            <span className="text-[#FFE900]">確認預約</span>
            按鈕填寫預約資料
          </p>
          <p>5. 完整輸入姓名，電話及電子郵件</p>
          <p>6. 練團室內禁止飲食</p>
        </div>
      </div>
      <Selectors />
      <div className="py-10 px-16 w-full flex items-center justify-center">
        <p className="text-xs lg:text-lg w-2/3 bg-white rounded-full text-white bg-opacity-20 text-center px-2 py-1">
          ⬇️ 請點擊下方時間表選擇預約時段 ⬇️
        </p>
      </div>
      <div className="lg:w-3/4 w-full flex gap-4 px-8 lg:px-32 py-2 mx-auto h-20">
        <div className="w-1/6 flex items-center justify-center rounded-md text-[#FFE900] font-semibold text-center lg:text-2xl sm:text-base">
          練團室 108
        </div>
        <div className="flex justify-center items-center w-1/6 rounded-md bg-black text-white text-center lg:text-lg text-sm break-all">
          2024/5/22
        </div>
        <div className="flex justify-center items-center w-1/6 rounded-md bg-black text-white text-center lg:text-lg text-sm break-all">
          2024/5/23
        </div>
        <div className="flex justify-center items-center w-1/6 rounded-md bg-black text-white text-center lg:text-lg text-sm break-all">
          2024/5/24
        </div>
        <div className="flex justify-center items-center w-1/6 rounded-md bg-black text-white text-center lg:text-lg text-sm break-all">
          2024/5/25
        </div>
        <div className="flex justify-center items-center w-1/6 rounded-md bg-black text-white text-center lg:text-lg text-sm break-all">
          2024/5/26
        </div>
      </div>
      <Timetable />
    </div>
  );
}
