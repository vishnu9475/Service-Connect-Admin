import React from 'react';

const ProviderItem = ({ name = "Sonja", image }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* The Squircle Shape */}
      <div className="w-[82px] h-[82px] bg-black rounded-[28px] overflow-hidden flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          /* Fallback empty black box matches your design */
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