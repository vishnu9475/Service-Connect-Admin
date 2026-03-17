import React from 'react'
import { Star,BookmarkMinus } from "lucide-react";
import { FaStar } from "react-icons/fa";
import {Link } from "react-router-dom"

const RequestItem20 = () => {
 
   return (
   <div className='flex items-center justify-center mt-2 px-1'>
  <Link to="/U18_Request_Service" className=' w-full flex justify-center '>
    <button className=" w-full bg-white rounded-2xl shadow-lg overflow-hidden flex">
      
      {/* Left black image section */}
      <div className="w-[35%] bg-black" />

      {/* Right content */}
      <div className="w-[65%] p-4 py-3 flex flex-col justify-between">
        
        {/* Top row */}
        <div className="flex  items-start justify-between">
          <span className="text-orange-500 font-medium text-sm">
            3 km away
          </span>

          <div className="flex flex-col items-center  gap-0">
            <div className="w-7 h-7 items-center justify-center text-whi font-bold">
              <BookmarkMinus size={40} className=' text-white fill-[#167F71] ' />
            </div>
            <span className="text-sm text-gray-700">Booked Ones</span>
          </div>
        </div>
   <div className='flex-col '>
        {/* Name */}
        <div className='flex '>
        <h2 className="text-xl font-semibold text-gray-900 mt-2 ">
          Thomas
        </h2>
        </div>

        {/* Price */}
       <div className='flex'>
        <p className="text-2xl font-bold text-gray-900 mt-1">
          ₹280 - 300
        </p>
        </div>
       </div>

        {/* Rating */}
        <div className="flex items-center gap-3 mt-3 text-gray-700">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="font-medium">4.2</span>
          </div>

          <span className="text-gray-400">|</span>

          <span className="font-medium">78 reviews</span>
        </div>
      </div>
    </button>
    </Link>
    </div>
  );
};

export default RequestItem20
