import PhotoButtonBig from "./_components/PhotoButtonBig";
import PhotoButtonShow from "./_components/PhotoButtonShow";
import PhotoButtonSmall from "./_components/PhotoButtonSmall";

export default async function IntroductionPage() {
  return (
    <div className="bg-black min-h-screen w-screen text-xl flex justify-center items-center px-4 lg:px-20 py-10">
      <div className="w-full max-w-7xl h-full overflow-y-auto py-16 lg:py-32 space-y-12">
        <div className="w-full my-4 flex flex-col lg:flex-row items-center lg:space-x-4 bg-gray-800 bg-opacity-50 rounded-lg p-4 lg:p-8 shadow-lg">
          <div className="lg:w-3/5 w-full h-64 lg:h-auto flex justify-center items-center rounded-lg overflow-hidden shadow-md">
            <PhotoButtonSmall />
          </div>
          <div className="lg:w-2/5 w-full flex flex-col justify-center items-center lg:items-start space-y-4 p-4 lg:p-0">
            <div className="text-[#FFE900] text-xl lg:text-2xl font-semibold">
              練團室－小練
            </div>
            <div className="text-white text-base lg:text-lg font-normal text-center lg:text-left">
              收費標準：每小時250元，可容納2至5人。
            </div>
          </div>
        </div>
        <div className="w-full my-4 flex flex-col lg:flex-row items-center lg:space-x-4 bg-gray-800 bg-opacity-50 rounded-lg p-4 lg:p-8 shadow-lg">
          <div className="lg:w-3/5 w-full h-64 lg:h-auto flex justify-center items-center rounded-lg overflow-hidden shadow-md">
            <PhotoButtonBig />
          </div>
          <div className="lg:w-2/5 w-full flex flex-col justify-center items-center lg:items-start space-y-4 p-4 lg:p-0">
            <div className="text-[#FFE900] text-xl lg:text-2xl font-semibold">
              練團室－大練
            </div>
            <div className="text-white text-base lg:text-lg font-normal text-center lg:text-left">
              收費標準：每小時350元，可容納5至8人。
            </div>
          </div>
        </div>
        <div className="w-full my-4 flex flex-col lg:flex-row items-center lg:space-x-4 bg-gray-800 bg-opacity-50 rounded-lg p-4 lg:p-8 shadow-lg">
          <div className="lg:w-3/5 w-full h-64 lg:h-auto flex justify-center items-center rounded-lg overflow-hidden shadow-md">
            <PhotoButtonShow />
          </div>
          <div className="lg:w-2/5 w-full flex flex-col justify-center items-center lg:items-start space-y-4 p-4 lg:p-0">
            <div className="text-[#FFE900] text-xl lg:text-2xl font-semibold">
              0.3 Good Show表演廳
            </div>
            <div className="text-white text-base lg:text-lg font-normal text-center lg:text-left w-full">
              收費標準：每小時500元，可為工商團體卡拉ok聚餐歡唱包場、小型30-40人各類型表演廳。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
