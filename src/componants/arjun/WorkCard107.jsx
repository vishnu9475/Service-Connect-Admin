import React from "react";
import { FaStar, FaCheck } from "react-icons/fa";



const WorkCard107 = ({ item }) => {
  return (
    <div className="relative flex bg-white rounded-xl shadow-sm">
      {/* Image */}
      <div className="w-24 sm:w-28 bg-black rounded-l-xl overflow-hidden">
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-3 space-y-1">
        <p className="text-xs font-medium text-orange-500">
          {item.category}
        </p>

        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
          {item.title}
        </h3>

        <div className="flex items-center gap-3 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            {item.rating}
          </span>
          <span>{item.duration}</span>
        </div>
      </div>

      {/* Completed Badge */}
      {item.completed && (
        <div className="absolute -top-3 right-4 z-10">
          <div className="w-7 h-7 rounded-full bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
            <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
              <FaCheck className="text-green-600 text-[9px]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkCard107;
