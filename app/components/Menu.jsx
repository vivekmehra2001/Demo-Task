"use client";

export default function Menu() {
    const menuItems = [
        "CRAFTS",
        "THEMES",
        "ROYAL & HERITAGE FIGURINES",
        "DECOR & LIFESTYLE",
        "HOME & DESK",
        "PREMIUM GIFTS",
        "CORPORATE GIFTING",
        "COLLECTIONS",
        "CUSTOM ORDERS",
    ];

    return (
        <nav className="w-full bg-white sm:px-10">
            <div className="max-w-[1400px] mx-auto px-4">

     
                <ul
                    className="flex items-center gap-4 lg:gap-8 py-3 text-[12px] sm:text-[13px] md:text-[13px] font-medium whitespace-nowrap overflow-x-auto scrollbar-hide" >
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            className="font-funnel cursor-pointer text-[13px] font-light hover:text-[#C08237] transition  flex-shrink-0"
                        >
                            {item}
                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    );
}
