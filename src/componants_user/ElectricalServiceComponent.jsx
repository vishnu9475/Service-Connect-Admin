import React from 'react';

const ElectricalServiceComponent = () => {
  // This is a placeholder for your actual image URL.
  // You would replace this with the path to your icon asset.
  const iconUrl = "https://via.placeholder.com/50/000000/FFFFFF/?text=Plug";

  return (
    <div className="flex flex-col items-center gap-2 p-4">
      {/* Circular Icon Container */}
      <div className="w-16 h-16 rounded-full border-2 border-gray-800 bg-blue-300 flex items-center justify-center shadow-lg overflow-hidden">
        {/* Icon Image */}
        {/* Replace the src with your actual image import or URL */}
        <img 
          src={iconUrl} 
          alt="Electrical Service" 
          className="w-10 h-10 object-contain" 
        />
      </div>
      {/* Text Label */}
      <span className="text-sm font-bold text-gray-800">Electrical</span>
    </div>
  );
};

export default ElectricalServiceComponent;