"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/Banner 1.svg"
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
      </div>


      <div className="relative z-10 flex flex-col items-center justify-between h-full px-4 py-3 md:py-3">


        <div className="w-full flex justify-center">
          <img
            src="/images/Ratoomal's Handicrafts.png"
            className="w-[180px] sm:w-[250px] "
            alt="Ratoomal's Handicrafts"
          />
        </div>


        <div className="flex flex-col items-center justify-center flex-1 w-full max-w-6xl mx-auto space-y-2 md:space-y-4 ">

          <div className="w-full flex  justify-center">
            <img
              src="/images/CRAFTED BY HAND, TREASURED FOREVER.png"
              className="w-[90%] max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px]"
              alt="Crafted by hand, treasured forever"
            />
          </div>

          <div className="w-full  flex justify-center -mt-2 sm:-mt-5 px-5">
            <p className="font-funnel text-white text-[8px] sm:text-[8px] md:text-[10px] lg:text-[14px] font-extralight tracking-wide text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[70%]">
              PRESERVING INDIA'S RICH HERITAGE THROUGH AUTHENTIC, HANDMADE ARTISTRY SINCE 1955
            </p>
          </div>

          <div className="flex justify-center py-5 md:py-12">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
              <img
                src="/images/icons/play-circle.svg"
                alt="Play Icon"
                className="w-full h-full"
              />
            </div>
          </div>



        </div>


        <div className="w-full flex justify-center pb-4 sm:pb-6 md:pb-8 mt-18">
          <button className="font-funnel w-full max-w-[250px] sm:max-w-[260px] h-[44px] xs:h-[48px] sm:h-[52px] md:h-[56px] cursor-pointer px-4 py-2 bg-white text-black font-light rounded-[10px] shadow-lg hover:bg-gray-50 hover:shadow-xl active:scale-95 transition-all duration-300 ease-in-out text-xs xs:text-sm sm:text-[15px] md:text-[16px] tracking-wide flex items-center justify-center gap-2">
            EXPLORE COLLECTIONS
            <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-y-1">↓</span>
          </button>
        </div>

      </div>

    </section>
  );
}
