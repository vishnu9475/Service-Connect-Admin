import React from "react";

const ServicesCategoryList = () => {
  const categories = [
    { name: "Cleaning", color: "bg-red-100", icon: "🧹" },
    { name: "Electrical", color: "bg-blue-100", icon: "🔌" },
    { name: "Delivery", color: "bg-yellow-50", icon: "🛵" },
    { name: "Beauty", color: "bg-pink-100", icon: "💄" },
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <div 
        // ✅ CHANGED: Used 'px-6' here.
        // This adds space on the Left (moving the text) AND the Right (moving the button).
        // Try changing 'px-6' to 'px-8' or 'px-10' if you want them further inside.
        className="flex justify-between items-center mb-4 px-12"
      >
        <h3 className="font-bold text-gray-900">
          Servs Category
        </h3>
        
        <button className="text-[10px] font-bold text-gray-500 hover:text-black">
          SEE ALL
        </button>
      </div>

      {/* Categories List */}
      <div className="flex items-center justify-center gap-5">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div
              className={`w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center text-2xl shadow-sm ${cat.color}`}
            >
              {cat.icon}
            </div>
            <span className="text-[11px] font-semibold text-gray-700">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCategoryList;  