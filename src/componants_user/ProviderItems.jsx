import React from 'react';

const ProviderItem = ({ name = "Sonja", image }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* The Squircle Shape - Matches image_62476c.png */}
      <div className="w-[82px] h-[82px] bg-black rounded-[28px] overflow-hidden flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          // Default empty black state if no image provided
          <div className="w-full h-full bg-black"></div>
        )}
      </div>

      {/* The Name Label */}
      <span className="text-[#1A233A] text-[15px] font-bold tracking-tight">
        {name}
      </span>
    </div>
  );
};

export default ProviderItem;