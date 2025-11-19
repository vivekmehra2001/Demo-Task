"use client";
import { useState, useRef, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";

export default function Header() {
  const [currency, setCurrency] = useState({
    code: "INR ₹",
    flag: "/images/flags/INR.png",
  });

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currencies = [
    { code: "INR ₹", flag: "/images/flags/INR.png" },
    { code: "USD $", flag: "/images/flags/USD.jfif" },
    { code: "EUR €", flag: "/images/flags/EUR.png" },
  ];

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="w-full py-5 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">


        <div className="flex items-center gap-4">

          <div className="lg:hidden">
            <img
              src="/images/Group 2.svg"
              alt="Logo"
              className="h-[40px] object-contain"
            />
          </div>


          <span className="hidden lg:block text-[13px] text-[#C08237] font-bold">
            DOWNLOAD PRODUCT CATALOG ↓
          </span>

          <div
            className="relative hidden lg:block"
            ref={dropdownRef}
          >
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 w-[110px] px-2 py-1 rounded bg-white "
            >
              <img src={currency.flag} className="w-5 h-5" alt="Currency flag" />
              <span className="text-[13px]">{currency.code}</span>
              <GoChevronDown className="text-[15px]" />
            </button>

            {open && (
              <div className="absolute left-0 mt-2 w-[140px] bg-white rounded shadow-lg z-50 max-h-40 overflow-y-auto">
                {currencies.map((item) => (
                  <div
                    key={item.code}
                    onClick={() => {
                      setCurrency(item);
                      setOpen(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <img src={item.flag} className="w-5 h-5" alt={`${item.code} flag`} />
                    <span className="text-[13px]">{item.code}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex justify-center flex-grow">
          <img
            src="/images/Group 2.svg"
            alt="Logo"
            className="h-[50px] object-contain"
          />
        </div>


        <div className="flex items-center gap-4">

          <div className="hidden md:flex items-center gap-2 border-b border-transparent focus-within:border-black pb-1">
            <img src="/images/icons/search-normal.svg" alt="Search" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="outline-none text-sm w-[200px] placeholder-gray-500 bg-transparent"
            />
          </div>

          <img
            src="/images/icons/profile.svg"
            className="w-6 h-6 sm:w-7 sm:h-7"
            alt="Profile"
          />

          <img
            src="/images/icons/shopping-bag.svg"
            className="w-6 h-6 sm:w-7 sm:h-7"
            alt="Cart"
          />


          <img
            src="/images/icons/search-normal.svg"
            className="w-6 h-6 md:hidden"
            alt="Search"
          />
        </div>
      </div>
    </header>
  );
}