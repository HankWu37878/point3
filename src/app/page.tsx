import BottomBar from "./_components/BottomBar";

export default async function Home() {
  return (
  <div className="overflow-scroll">
    <div className="bg-homepage min-h-screen w-screen text-xl flex justify-center items-center">
      <div className="bg-black bg-opacity-20 flex-col text-center px-16 py-8 animate-pulse-short delay-300">
        <h1 className="text-yellow-500 lg:text-7xl text-4xl font-bold font-serif">0.3 MUSIC CENTER</h1>
        <p className="text-white lg:text-4xl text-lg font-serif mt-16">100台北市中正區忠孝西路一段7號1樓</p>
        <p className="text-white lg:text-4xl text-lg font-serif">(02)2383 1780</p>
      </div>
    </div>
    <BottomBar/>
  </div>
  )
}
