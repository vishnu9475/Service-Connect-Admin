import React from 'react';

const StatCard = ({ label = "Franchisee", value = "932" }) => {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-xl w-fit">
      {/* Icon Wrapper */}
      <div className="flex items-center justify-center w-16 h-16 bg-[#5249B7] rounded-full shrink-0">
        <svg 
          className="w-8 h-8 text-white" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>

      {/* Text Wrapper */}
      <div className="flex flex-col">
        <span className="text-gray-400 text-lg font-normal leading-tight">
          {label}
        </span>
        <span className="text-[#2D3E75] text-4xl font-bold tracking-tight">
          {value}
        </span>
      </div>
    </div>
  );
};

export default StatCard;