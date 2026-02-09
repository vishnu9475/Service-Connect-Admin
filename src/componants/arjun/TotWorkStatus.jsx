import React from 'react';
import { TbDiamondFilled } from "react-icons/tb";

const TotWorkStatus = () => {
  // Data variables - you can change these to props later
  const progressPercent = 75; // The blue part of the ring
  const timeText = "5w: 2d";
  
  // SVG Math
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progressPercent / 100) * circumference;

  return (
    <div className='w-full p-6'>
      {/* Header Row */}
      <div className='flex flex-row justify-between items-center mb-10'>
        <p className='text-[#4B4B4B] font-[Inter] font-bold text-lg'>
          Total Work Done
        </p>

        <div className='px-3 h-[36px] bg-[#238899]/10 text-[#238899] rounded-[8px] flex flex-row gap-2 items-center justify-center text-sm font-medium cursor-pointer'>
          <span>This Week</span>
          <TbDiamondFilled className="text-xs" />
        </div>
      </div>

      {/* Progress Ring Container */}
      <div className='relative flex items-center justify-center'>
        <svg className="transform -rotate-90 w-48 h-48 lg:w-56 lg:h-56">
          {/* Background Circle (Gray) */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="#6B7280" // Gray color from your image
            strokeWidth="12"
            fill="transparent"
            className="opacity-20"
          />
          {/* Progress Circle (Blue) */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="#00A3FF" // Blue color from your image
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#2D3748] font-bold text-3xl lg:text-4xl font-[Inter]">
            {timeText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotWorkStatus;