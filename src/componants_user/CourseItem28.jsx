import React from "react";

const CourseItem28 = () => {
  return (
    <div className="flex items-center justify-center mt-9 px-4">
      {/* card frame */}
      <div className="w-full max-w-sm bg-white rounded-2xl overflow-hidden flex shadow-md shadow-gray-400">

        {/* black box */}
        <div className="w-[100px] h-[100px] bg-black m-4 rounded-2xl flex-shrink-0" />

        {/* right content */}
        <div className="flex flex-col justify-center pr-4">
          <h5 className="text-[#FF6B00] font-semibold text-xs">
            Graphic Design
          </h5>
          <h3 className="font-semibold text-black text-base leading-snug">
            Setup Your Graphic Design
          </h3>
        </div>

      </div>
    </div>
  );
};

export default CourseItem28;
