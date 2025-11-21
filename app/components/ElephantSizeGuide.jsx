"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ElephantSizeGuide() {
  const [active, setActive] = useState(5); 
  const [isMounted, setIsMounted] = useState(false); 
  const containerRef = useRef(null);
  const labelsRef = useRef(null);
  const positions = useRef([]);
  const labelPositions = useRef([]);

  const sizes = [
  { label: "Mini (2”)", w: 60, num: 20 },
    { label: "Small (4”)", w: 80, num: 40 },
    { label: "Medium (8”)", w: 110, num: 80 },
    { label: "Large (12”)", w: 150, num: 140 },
    { label: "XL (18”)", w: 180, num: 260 },
    { label: "XXL (24”+ Custom)", w: 230, num: 360 },
  ];

  useEffect(() => {
    const updatePositions = () => {
      if (!containerRef.current || !labelsRef.current) return;

      const container = containerRef.current;
      const labelsContainer = labelsRef.current;
      const parentRect = container.getBoundingClientRect();
      const children = Array.from(container.children);
      const labelChildren = Array.from(labelsContainer.children);

      const computedStyle = window.getComputedStyle(container);
      const matrix = computedStyle.transform;

      let scaleX = 1;
      if (matrix !== "none") {
        const values = matrix.match(/matrix\((.+)\)/)[1].split(", ");
        scaleX = parseFloat(values[0]); 
      }

     
      positions.current = children.map((col) => {
        const rect = col.getBoundingClientRect();
        const center = (rect.left - parentRect.left + rect.width / 2);
        return center / scaleX;
      });

      labelPositions.current = labelChildren.map((label) => {
        const rect = label.getBoundingClientRect();
        const center = (rect.left - parentRect.left + rect.width / 2);
        return center / scaleX;
      });
      
      setIsMounted(true);
    };

    updatePositions();

    window.addEventListener("resize", updatePositions);
    
    const timeoutId1 = setTimeout(updatePositions, 100);
    const timeoutId2 = setTimeout(updatePositions, 500);

    return () => {
      window.removeEventListener("resize", updatePositions);
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
    };
  }, []);

  const handleLabelClick = (index) => {
    setActive(index);
  };

  return (
    <div className="w-full flex flex-col items-center sm:mt-10 md:px-20">
    
      <div
        ref={containerRef}
        className="
          w-[180%] sm:w-full flex px-0 sm:px-28 gap-3 xs:gap-5 sm:gap-7 items-end
          scale-[0.55] sm:scale-[0.8] md:scale-100
          transform my-2 sm:origin-top
        "
      >
        {sizes.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setActive(idx)}
          >
            <Image
              src="/images/elephant -1.svg"
              alt={item.label}
              width={item.w}
              height={item.w}
              className={`
                transition-all duration-300
                ${active === idx ? "opacity-100 scale-110 drop-shadow-xl" : "opacity-50"}
              `}
            />
          </div>
        ))}
      </div>

      <div className="w-full sm:mt-12 border-t border-gray-300 my-0 mb-3 sm:my-3"></div>

      <div 
        ref={labelsRef}
        className="flex w-full text-[10px] lg:ml-6 gap-2 sm:gap-0 md:text-sm text-gray-600 relative"
      >
        <div 
          className={`text-center flex-1 -ml-1 md:pl-13 lg:pl-18 cursor-pointer transition-all duration-300 ${
            active === 0 
              ? "font-bold text-black scale-105" 
              : "text-gray-600 hover:text-gray-800"
          }`}
          onClick={() => handleLabelClick(0)}
        >
          Mini (2”)
        </div>
        <div 
          className={`text-start flex-1 -ml-2 sm:ml-1 sm:w-2xl cursor-pointer transition-all duration-300 ${
            active === 1 
              ? "font-bold text-black scale-105" 
              : "text-gray-600 hover:text-gray-800"
          }`}
          onClick={() => handleLabelClick(1)}
        >
          Small (4”)
        </div>
        <div 
          className={`text-start flex-1 w-8 -ml-2 lg:-ml-3 cursor-pointer transition-all duration-300 ${
            active === 2 
              ? "font-bold text-black scale-105" 
              : "text-gray-600 hover:text-gray-800"
          }`}
          onClick={() => handleLabelClick(2)}
        >
          Medium (8”)
        </div>
        <div 
          className={`text-start sm:text-center flex-1 pl-3 lg:ml-2 cursor-pointer transition-all duration-300 ${
            active === 3 
              ? "font-bold text-black scale-105" 
              : "text-gray-600 hover:text-gray-800"
          }`}
          onClick={() => handleLabelClick(3)}
        >
          Large (12")
        </div>
        <div 
          className={`text-end flex-1  ml-1 pl-2 lg:pl-3 cursor-pointer transition-all duration-300 ${
            active === 4 
              ? "font-bold text-black scale-105" 
              : "text-gray-600 hover:text-gray-800"
          }`}
          onClick={() => handleLabelClick(4)}
        >
          XL (18")
        </div>
        <div
          className={`text-center flex-3 lg:pr-12 cursor-pointer transition-all duration-300 ${
            active === 5 
              ? "font-bold text-black scale-105" 
              : "text-gray-600 hover:text-gray-800"  
          }`}
          onClick={() => handleLabelClick(5)}
        >
          XXL (24”+ Custom)
        </div>
      </div>

     
      <div className="w-full flex justify-center -mt-13 sm:-mt-10.5 relative">
        {isMounted && positions.current.length > 0 && (
          <>
            <div
              className="absolute text-[10px] my-2 sm:text-sm font-semibold text-gray-700 transition-all duration-300"
              style={{
                left: `${positions.current[active]}px`,
                transform: "translateX(-50%)",
                top: "-28px",
              }}
            >
              {sizes[active].num}
            </div>

            <img
              src="/images/Polygon 1.svg"
              className="absolute mt-2 w-5 h-5 opacity-90 transition-all duration-300"
              style={{
                left: `${positions.current[active]}px`,
                transform: "translateX(-50%)",
                top: "-10px",
              }}
              alt="pointer"
            />
          </>
        )}
      </div>

      <div className="w-full flex flex-col items-center text-center">
        <p className="mt-24 my-7">
          <img src="/images/Group-down.svg" className="w-xl" alt="scroll down" />
        </p>
      </div>
    </div>
  );
}