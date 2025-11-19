"use client";
import { useState } from "react";
import ElephantSizeGuide from "./ElephantSizeGuide";

export default function RoyalCollection() {
  const [filters, setFilters] = useState({
    style: "",
    finish: "",
    material: "",
  });

  const styles = [
    "Hand Painted",
    "Hand Carved",
    "Antique Finish",
    "Heritage Rajasthani",
    "Modern Minimal",
    "Royal Studio Collection",
  ];

  const finishes = [
    { name: "Single Color Polish", color: "#D8A76B" },
    { name: "Multi Color", color: "#8F561E" },
    { name: "Gold Foil Embossed", color: "#E6BC23" },
    { name: "Meenakari Work", color: "#857057" },
    { name: "Diamond/Stone Work", color: "#D7D7CD" },
    { name: "Wood Finish", color: "#CAAE7B" },
  ];


  const materials = [

    { name: "Wooden", color: "#C8AC40" },
    { name: "Brass", color: "#A5952D" },
    { name: "Marble", color: "#C7C7C7" },
    { name: "Resin", color: "#696969" },
    { name: "Meenakari", color: "#637E54" },
    { name: "Tribal Art", color: "#799FAD" },
    { name: "Metal Inlay", color: "#626262" },
    { name: "Premium Stone", color: "#CBCBCB" },
  ];

  const handleSelect = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? "" : value,
    }));
  };

  return (
    <div className="w-full  mx-auto p-4">


      <h2 className="mb-7 text-center flex justify-center">
        <img src="/images/The Elephant Guy.svg" className="w-[280px]" />
      </h2>

      <h2 className="mb-5 text-center flex justify-center">
        <img
          src="/images/Royal Elephant Collection – Craft Your Majesty.svg"
          className="w-[350px]"
        />
      </h2>

      <p className="font-funnel mb-6 text-xs text-center">
        From Palm-Size to Palace-Size – Your Elephant, Your Way
      </p>

      <div className="space-y-3 mx-0 sm:mx-16">


        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0">
          <p className="font-bold text-[15px] w-full md:w-[200px] md:text-left text-center md:py-3 py-2">
            Style / Craft
          </p>

          <div className="flex scrollbar-hide flex-nowrap overflow-x-auto whitespace-nowrap space-x-2 pb-2 w-full">
            {styles.map((item) => (
              <button
                key={item}
                onClick={() => handleSelect("style", item)}
                className={`px-3 py-2 sm:px-5 sm:py-3 text-sm rounded-[50px] border transition flex-shrink-0
                  ${filters.style === item ? "bg-[#FFE9CF] text-[#121212] border-[#C08237]" : "bg-white text-black border-[#A49C93]"}
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0">
          <p className="font-bold text-[15px] w-full md:w-[200px] md:text-left text-center md:py-3 py-2">
            Finish & Detailing
          </p>

          <div className="flex scrollbar-hide flex-nowrap overflow-x-auto whitespace-nowrap space-x-2 pb-2 w-full">
            {finishes.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSelect("finish", item.name)}
                className={`px-3 py-2 sm:px-5 sm:py-3 text-sm rounded-[50px] border flex items-center gap-2 transition flex-shrink-0
                       ${filters.finish === item.name ? "bg-[#FFE9CF] text-[#121212] border-[#C08237]" : "bg-white text-black border-[#A49C93]"}
                `}
              >
                <span
                  className="w-4 h-4 sm:w-8 sm:h-8 rounded-full "
                  style={{ background: item.color }}
                ></span>
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0">
          <p className="font-bold text-[15px] w-full md:w-[200px] md:text-left text-center md:py-3 py-2">
            Material
          </p>

          <div className="flex scrollbar-hide flex-nowrap overflow-x-auto whitespace-nowrap space-x-2 pb-2 w-full">
            {materials.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSelect("material", item.name)}
                className={`px-3 py-2 sm:px-5 sm:py-3 text-sm rounded-[50px] border flex items-center gap-2 transition flex-shrink-0
                       ${filters.material === item.name ? "bg-[#FFE9CF] text-[#121212] border-[#C08237]" : "bg-white text-black border-[#A49C93]"}
                `}
              >
                <span
                  className="w-4 h-4 sm:w-8 sm:h-8 rounded-full"
                  style={{ background: item.color }}
                ></span>
                {item.name}
              </button>
            ))}
          </div>
        </div>

      </div>

      <div>
        <ElephantSizeGuide />
      </div>
    </div>
  );
}