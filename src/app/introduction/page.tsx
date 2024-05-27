import PhotoButtonBig from "./_components/PhotoButtonBig";
import PhotoButtonShow from "./_components/PhotoButtonShow";
import PhotoButtonSmall from "./_components/PhotoButtonSmall";

export default async function IntroductionPage() {
  return (
    <div className="bg-black h-screen w-screen text-xl flex justify-center items-center px-20">
      <div className="w-full h-full overflow-y-scroll py-32">
        <div className="w-full h-4/5 my-4 flex flex-row">
          <div className="w-3/5 h-full flex justify-center items-center">
            <PhotoButtonSmall />
          </div>
          <div className="w-2/5 h-full flex-col flex justify-center items-center space-y-4">
            <div className="text-yellow-500 text-2xl font-semibold">
              練團室－小練
            </div>
            <div className="text-white text-base font-normal">
              收費標準：每小時250元，可容納2至5人。
            </div>
          </div>
        </div>
        <div className="w-full h-4/5 my-4 flex flex-row">
          <div className="w-3/5 h-full flex justify-center items-center">
            <PhotoButtonBig />
          </div>
          <div className="w-2/5 h-full flex-col flex justify-center items-center space-y-4">
            <div className="text-yellow-500 text-2xl font-semibold">
              練團室－大練
            </div>
            <div className="text-white text-base font-normal">
              收費標準：每小時350元，可容納5至8人。
            </div>
          </div>
        </div>
        <div className="w-full h-4/5 my-4 flex flex-row">
          <div className="w-3/5 h-full flex justify-center items-center">
            <PhotoButtonShow />
          </div>
          <div className="w-2/5 h-full flex-col flex justify-center items-center space-y-4">
            <div className="text-yellow-500 text-2xl font-semibold">
              0.3 Good Show表演廳
            </div>
            <div className="w-3/5 text-white text-base font-normal">
              收費標準：每小時500元，可為工商團體卡拉ok聚餐歡唱包場、小型30-40人各類型表演廳。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
