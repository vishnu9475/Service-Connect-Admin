import React from "react";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import ItemCard from "./ItemCard";

export default function SubCategoryList() {
  
  const [active, setActive] = useState("cleaning"); 

  return (
    <div className="min-h-screen bg-white flex lg:ml-9 px-4 py-6">
      <div className="w-full max-w-[1475px] bg-white rounded-2xl shadow-md px-4 sm:px-6 py-6">

       
        <div className="flex justify-between items-center gap-4 flex-wrap sm:flex-nowrap">
          <h2 className="text-[18px] font-semibold text-[#2D2F7A]">
            Cleaning
          </h2>

          <div className="flex gap-3 flex-shrink-0">

            {/* SORT BUTTON */}
            <button
              onClick={() => setActive("sort")}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs border transition
                ${
                  active === "sort"
                    ? "bg-[#6C63FF] text-white border-[#6C63FF]"
                    : "bg-white text-[#6C63FF] border-[#6C63FF]"
                }`}
            >
              Sort <FaCaretDown className="text-[10px]" />
            </button>

            
            <button
              onClick={() => setActive("main")}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs border transition
                ${
                  active === "main"
                    ? "bg-[#6C63FF] text-white border-[#6C63FF]"
                    : "bg-white text-[#6C63FF] border-[#6C63FF]"
                }`}
            >
              cleaning <FaCaretDown className="text-[10px]" />
            </button>
            <div>
              
            </div>
                 
          </div>
        </div>
           <div>
            <ItemCard className="mt-6"/>
           </div>
      </div>
      

    </div>
  );
}
