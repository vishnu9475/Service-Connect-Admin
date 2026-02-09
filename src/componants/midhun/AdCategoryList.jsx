import React from "react";
import { useState } from "react";

function AdCategoryList() {
  const [active, setActive] = useState("Banner Ad");

  const categories = [
    "Banner Ad",
    "Card Ad",
    "Popup Ad",
    "Boost Profile",
  ];

  return (
    <div className=" bg-[#F5F6FA] w-full md:w-[320px] lg:w-[430px]   flex  items-start px-4 pt-6 ">
      
      {/* Card */}
      <div className="w-full   lg:h-screen bg-white rounded-2xl shadow-md p-5 pb-10">

        {/* Header */}
        <h2 className="text-[16px] font-semibold text-[#2D2F7A] mb-4">
          Ad Category
        </h2>

        {/* Category List */}
        <div className="flex flex-col gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`rounded-full py-2 text-sm transition
                bg-[#F3F4FF] text-[#2D2F7A]
                ${active === item ? "font-semibold" : "font-normal"}
              `}
            >
              {item}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AdCategoryList;
