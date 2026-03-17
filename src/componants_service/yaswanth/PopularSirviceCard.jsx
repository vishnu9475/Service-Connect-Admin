import React from 'react'
import { FaStar } from "react-icons/fa";
const PopularSirviceCard = () => {
  return (
    <div className="w-[85%]  mt-5 border border-white rounded-xl overflow-hidden shadow-md shadow-gray-900 hover:animate-pulse">
          <div className="md:h-28 h-20 bg-black"></div>

          <div className="p-3 bg-white">
            <p className="md:text-sm text-xs text-gray-800 font-semibold">Plumbing</p>
            <h3 className="md:text-sm text-[10px] font-semibold">
              Complete Residential Plumbing
            </h3>

            <div className="flex items-center text-xs text-gray-500 mt-1 gap-1">
              <FaStar className="text-yellow-400" />
              <span className="md:text-sm text-[10px] text-black" >4.2</span>
              <span  className="md:text-sm text-[10px] text-black" >•</span>
              <span  className="md:text-sm text-[10px] text-black" >7280 Reviews</span>
            </div>

            <p className="md:text-sm text-[10px] font-semibold mt-1">₹300–700</p>
          </div>
        </div>
  )
}

export default PopularSirviceCard