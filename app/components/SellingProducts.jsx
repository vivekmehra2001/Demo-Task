"use client";
import Image from "next/image";

export default function SellingProducts() {
  const products = [
    {
      id: 1,
      name: "Wooden Jewellery Box with ceramic tile",
      qty: "Minimum Order Quantity: 100 Piece",
      price: "₹ 245/Piece",
      img: "/images/products/image 50.svg",
    },
    {
      id: 2,
      name: "Wooden Horse Statue",
      qty: "Minimum Order Quantity: 100 Piece",
      price: "₹ 200/Piece",
      img: "/images/products/image 49.svg",
    },
    {
      id: 3,
      name: "Wooden Laxmi Statue Carved Fine 12",
      qty: "Minimum Order Quantity: 100 Piece",
      price: "₹ 9,997/Piece",
      img: "/images/products/image 48.svg",
    },
    {
      id: 4,
      name: "Wooden Leaf Buddha Statue",
      qty: "Minimum Order Quantity: 100 Piece",
      price: "₹ 1,000/Piece",
      img: "/images/products/image 43.svg",
    },
    {
      id: 5,
      name: "Blue White Owl Showpiece",
      qty: "Minimum Order Quantity: 100 Piece",
      price: "₹ 500/Piece",
      img: "/images/products/image 41.svg",
    },
    {
      id: 6,
      name: "Multicolor Wooden Elephant Statue",
      qty: "Minimum Order Quantity: 100 Piece",
      price: "₹ 3,500/Piece",
      img: "/images/products/image 42.svg",
    },
    {
      id: 7,
      name: "Brown Wooden Elephant Statue",
      qty: "Minimum Order Quantity: 100 Piece",
      price: "₹ 300/Piece",
      img: "/images/products/image 36.svg",
    },
    {
      id: 8,
      name: "Lord Ganesha Sitting Statue",
      qty: "Minimum Order Quantity: 100 Piece",
      price: "5,000/piece",
      img: "/images/products/image 40.svg",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-10 mt-9">

     
      <p className="flex justify-center mb-6">
        <img
          src="/images/Best Selling Products.svg"
          className="w-xs sm:w-sm"
        />
      </p>

       <p className="flex justify-center mb-6">
        <img
          src="/images/Loved by Our Customers.svg"
          className="w-[15rem]"
        />
      </p>

   
      <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 sm:px-24"
      >
        {products.map((item) => (
          <div key={item.id} className="cursor-pointer w-full max-w-[260px]">
          
            <div className="relative w-full h-[260px] sm:h-[300px] bg-gray-100 overflow-hidden rounded">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* CARD CONTENT */}
            <div className="mt-3">
              <h3 className="font-funnel font-semibold text-sm text-black">
                {item.name}
              </h3>

              <p className="font-funnel text-gray-600 font-light text-xs mt-1">
                {item.qty}
              </p>

              <p className="font-funnel text-gray-600 text-sm mt-1">
                {item.price}
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="text-center mt-10">
        <button className="bg-[#C08237] cursor-pointer hover:scale-103 rounded-sm px-6 py-3 text-white text-xs sm:text-sm">
          VIEW ALL
        </button>
      </div>

      <div className="w-full text-center items-center my-16  not-even:"> 
        <img src="/images/fff.svg"/>
      </div>
    </div>
  );
}
