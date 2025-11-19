"use client";
import Image from "next/image";

export default function ElephantSizeGuide() {
  const sizes = [
    { label: "Mini (2”)", img: "/images/elephant -1.svg", opacity: "opacity-50", w: 60 },
    { label: "Small (4”)", img: "/images/elephant -1.svg", opacity: "opacity-50", w: 80 },
    { label: "Medium (8”)", img: "/images/elephant -1.svg", opacity: "opacity-50", w: 110 },
    { label: "Large (12”)", img: "/images/elephant -1.svg", opacity: "opacity-50", w: 150 },
    { label: "XL (18”)", img: "/images/elephant -1.svg", opacity: "opacity-50", w: 180 },
    { label: "XXL (24”+ Custom)", img: "/images/elephant -1.svg", opacity: "opacity-100", w: 230 },
  ];

  return (
    <div className="w-full flex flex-col items-center  mt-10  md:px-20">

    
      <div className="
        w-full flex justify-center px-0  sm:px-28 gap-2 xs:gap-5 sm:gap-7 items-center 
        scale-[0.65] sm:scale-[0.8] md:scale-100 
        transform origin-top
      ">
        {sizes.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image
              src={item.img}
              alt={item.label}
              width={item.w}
              height={item.w}
              className={`${item.opacity} ${
                idx === sizes.length - 1 ? "scale-110 drop-shadow-xl" : ""
              }`}
            />
          </div>
        ))}
      </div>

  
      <div className="w-full sm:mt-12 border-t border-gray-300 my-3"></div>

     <div className="flex w-full text-[10px] px-7 gap-2 sm:gap-0 md:text-sm text-gray-600">
         <div className="text-center flex-1 pl-3 sm:pl-15 ">Mini (2”)</div>
         <div className="text-start flex-1 -ml-2  sm:w-2xl ">Small (4”)</div>
         <div className="text-start flex-1 w-8 -ml-1 sm:-ml-2 ">Medium (8”)</div>
         <div className="text-center flex-1 pr-1 sm:pr-3">Large (12”)</div>
         <div className="text-center flex-1 sm:ml-5">XL (18”)</div>
         <div className="text-center flex-3  mr-3 font-semibold text-black">XXL (24”+ Custom)</div>
       </div>

   
      <div className="w-full flex   justify-end -mt-13 sm:-mt-10.5 pr-[22%] md:pr-[19%]">
        <img src="/images/Polygon 1.svg" className="w-5 h-5 opacity-90" />
      </div>
<div className="w-full  flex flex-col items-center text-center ">
      <p className=" mt-24 my-7">
      <img src="/images/Group-down.svg" className="w-xl" />
      </p>
      </div>
    </div>
  );
}
