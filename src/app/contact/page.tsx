export default async function ContactPage() {
  return (
    <div className="bg-black h-screen w-screen text-xl flex flex-col justify-center items-center px-20">
      <div className="w-full h-full py-40 flex flex-col justify-center items-center">
        <div className="w-4/5 h-3/5 my-4 flex flex-row">
          <div className="w-3/5 h-full flex-col flex justify-center space-y-2">
            <div className="text-yellow-500 text-3xl font-semibold mx-12 mb-4">
              0.3 北車店
            </div>
            <div className="text-white text-lg font-normal mx-12">
              📞 電話 : 02-2383-1780
            </div>
            <div className="text-white text-lg font-normal mx-12">
              🌐 Facebook :{" "}
              <a
                href="https://www.facebook.com/0.3musicgoodshow/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600"
              >
                0.3熱門音樂發展中心
              </a>
            </div>
            <div className="text-white text-lg font-normal mx-12">
              💬 Line ID : 477nzoad
            </div>
            <div className="text-white text-lg font-normal mx-12">
              📍 地址 : 台北市中正區忠孝西路一段7號1F（台北⾞站M7出口）
            </div>
          </div>
          <div className="bg-yellow-800 w-2/5 h-full flex-col flex justify-center space-y-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.91559078113332!2d121.51904719907165!3d25.04596779988678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a972234c39f3%3A0x402337e236ffd578!2z5YyX6LuKMC4z6Z-z5qiC5pWZ5a6k!5e0!3m2!1szh-TW!2stw!4v1716560770849!5m2!1szh-TW!2stw"
              className="border-0 w-full h-full max-w-2xl max-h-xl"
            ></iframe>
          </div>
        </div>
        <div className="w-4/5 h-3/5 my-4 flex flex-row">
          <div className="w-3/5 h-full flex-col flex justify-center space-y-2">
            <div className="text-yellow-500 text-3xl font-semibold mx-12 my-4">
              國揚樂器維修
            </div>
            <div className="text-white text-lg font-normal mx-12">
              📞 電話 : 02-2383-1779
            </div>
            <div className="text-white text-lg font-normal mx-12">
              🌐 Facebook :{" "}
              <a
                href="https://www.facebook.com/guitarsupply/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600"
              >
                國揚樂器維修
              </a>
            </div>
            <div className="text-white text-lg font-normal mx-12">
              📍 地址 :台北市中正區中山北路一段26巷7號1F
            </div>
          </div>
          <div className="bg-yellow-800 w-2/5 h-full flex-col flex justify-center space-y-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.69991283956958!2d121.51904648437984!3d25.04596742552468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a971ffacd13f%3A0x1817526f19488414!2zMC4z6Z-z5qiC5pWZ5a6k77yI5ZyL5o-a5bel5L2c5a6k77yJ!5e0!3m2!1szh-TW!2stw!4v1716561051150!5m2!1szh-TW!2stw"
              className="border-0 w-full h-full max-w-2xl max-h-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
