import React from 'react';

const ServiceCard = () => {
  return (
    <div className="bg-white rounded-[24px] p-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex gap-4 w-full max-w-sm relative font-sans">
      
      {/* Left Image Placeholder (Black Box) */}
      <div className="w-[110px] h-[110px] bg-black rounded-[20px] flex-shrink-0 overflow-hidden">
        {/* You can add an <img src="..." /> here later */}
      </div>
      
      {/* Right Side Content */}
      <div className="flex-1 py-1.5 flex flex-col justify-center">
        
        {/* Distance Badge */}
        <p className="text-[#F2994A] text-[11px] font-bold mb-1 tracking-wide">
          3 km away
        </p>
        
        {/* Name */}
        <h3 className="text-[#1A233A] font-bold text-[18px] mb-1 leading-tight">
          Thomas
        </h3>
        
        {/* Price */}
        <p className="text-[#1A233A] font-extrabold text-[16px] mb-3">
          ₹280 - 300
        </p>
        
        {/* Rating & Reviews Row */}
        <div className="flex items-center gap-2 text-[12px] text-gray-400 font-bold">
          <span className="text-[#FFC107] text-[14px]">★</span>
          <span className="text-[#1A233A]">4.2</span>
          <span className="font-light text-gray-300 text-lg">|</span>
          <span>78 reviews</span>
        </div>
      </div>

      {/* Bookmark Icon (Top Right) */}
      <button className="absolute top-4 right-4 text-[#1D8B8B] hover:opacity-70 transition-opacity">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
      
    </div>
  );
};

export default ServiceCard;