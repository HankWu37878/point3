export default async function Home() {
  return (
    <div className="overflow-scroll">
      <div className="bg-homepage min-h-screen w-screen text-xl flex justify-center items-center">
        <div className="bg-black bg-opacity-50 flex-col text-center px-16 py-8 rounded-lg">
          <div className="text-[#FFE900] lg:text-7xl text-4xl font-bold m-10">
            0.3 MUSIC CENTER
          </div>
          <p className="text-white lg:text-2xl text-base mt-10 m-2">
            台北市中正區忠孝西路一段7號1樓
          </p>
          <p className="text-white lg:text-2xl text-base m-2">(02)2383 1780</p>
        </div>
      </div>
    </div>
  );
}
