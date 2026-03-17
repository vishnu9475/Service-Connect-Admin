import React from "react";

const CourseItem = ({
  category = "Graphic Design",
  title = "Setup your Graphic Design Workspace",
}) => {
  return (
    /* CONTENT CONTAINER */
    <div className="max-w-full mx-auto px-4 sm:px-6 md:px-20 lg:px-32 space-y-4 mt-5">
      
      {/* 1. Header */}
      <p className="text-gray-900 font-bold text-sm sm:text-base md:text-xl mb-2">
        Selected Course
      </p>

      {/* 2. Card */}
      <div className="w-full bg-white rounded-[20px] p-3 sm:p-4 shadow-md shadow-gray-400 border border-gray-100 flex items-center gap-3 sm:gap-4 font-sans  transition-all cursor-pointer active:scale-[0.98] group">
        
        {/* Image Placeholder */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-900 rounded-[14px] flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          
          {/* Category */}
          <span className="text-orange-600 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest mb-0.5">
            {category}
          </span>

          {/* Title */}
          <h3 className="text-gray-900 font-bold text-sm sm:text-base md:text-lg leading-tight line-clamp-2 group-hover:text-black transition-colors">
            {title}
          </h3>

        </div>
      </div>
    </div>
  );
};

export default CourseItem;
