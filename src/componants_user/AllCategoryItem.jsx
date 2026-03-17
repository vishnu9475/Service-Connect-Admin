import React from 'react';

// Component for the "ALL" category card from image_1.png
const AllCategoryItem = () => {
  return (
    <div className="bg-white rounded-[16px] p-3 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col items-center w-[70px]">
      {/* Grid icon container */}
      <div className="grid grid-cols-2 gap-1.5 mb-2">
        {/* Top left light blue square */}
        <div className="w-[21px] h-[21px] bg-[#AEEEEE] border-[3px] border-black rounded-[5px]"></div>
        {/* Top right light blue square */}
        <div className="w-[21px] h-[21px] bg-[#AEEEEE] border-[3px] border-black rounded-[5px]"></div>
        {/* Bottom left light blue square */}
        <div className="w-[21px] h-[21px] bg-[#AEEEEE] border-[3px] border-black rounded-[5px]"></div>
        {/* Bottom right pink circle */}
        <div className="w-[21px] h-[21px] bg-[#FFB6C1] border-[3px] border-black rounded-full"></div>
      </div>
      {/* Text label */}
      <span className="text-[#1A233A] font-bold text-[8px]">ALL</span>
    </div>
  );
};

export default AllCategoryItem;