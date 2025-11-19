"use client";

export default function TrustBuilding() {
  const features = [
    {
      icon: "/images/Vector.svg",
      text: "/images/Handcrafted Decor.svg",
    },
    {
      icon: "/images/Group 9.svg",
      text: "/images/Authentic Heritage.svg",
    },
    {
      icon: "/images/Group 6.svg",
      text: "/images/70-years-legacy.svg",
    },
    {
      icon: "/images/Salvaged Antiques.svg",
      text: "/images/Salvaged Antiques-text.svg",
    },
    {
      icon: "/images/Vector (1).svg",
      text: "/images/Global Presence.svg",
    },
  ];

  return (
    <section className="w-full py-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">

        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4"
          >
            <img src={item.icon} alt="" className="w-12 h-12 mb-3" />
            <h6 className="text-sm md:text-base font-medium text-gray-700">
             <img src={item.text} alt="" className="w-28 h-5 mb-3" />
            </h6>
          </div>
        ))}

      </div>
    </section>
  );
}
