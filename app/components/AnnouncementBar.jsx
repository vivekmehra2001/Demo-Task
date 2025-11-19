"use client";
import { useState, useEffect } from "react";
import { GoChevronRight,GoChevronLeft } from "react-icons/go";

export default function AnnouncementBar() {
  const offers = [
    "Free ground shipping on all orders ₹999+",
    "🎁 New Users Get ₹500 Instant Bonus!",
    "⚡ Flash Sale – Limited Time Only!",
    "💥 Buy 1 Get 1 Free Offer!",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + offers.length) % offers.length);
  };

  return (
    <div className="w-full h-[50px] bg-[#FFE9CF] flex items-center 
                    px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 2xl:px-56">

    
      <div className=" flex justify-center">
        <button onClick={prevSlide} className="text-black text-[24px]">
          <GoChevronLeft />
        </button>
      </div>

    
      <div className="flex-1 overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {offers.map((offer, index) => (
            <div
              key={index}
              className="font-funnel min-w-full text-center text-black
                         text-[13px] "
            >
              {offer}
            </div>
          ))}
        </div>
      </div>

     
      <div className=" flex justify-center">
        <button onClick={nextSlide} className="text-black text-[24px]">
          <GoChevronRight />
        </button>
      </div>
    </div>
  );
}
