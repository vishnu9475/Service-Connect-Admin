import { MdArrowForwardIos } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const categories = ["All", "Plumbing", "Electrical", "Heal"];

export default function  Comp13() {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <div className="w-full md:w-[93%] mx-auto p-4 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Popular Services</h2>
        <button className="text-sm text-gray-500 flex items-center gap-1">
           <Link to="/SirvicesPage">SEE ALL</Link> <MdArrowForwardIos size={14} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-4 w-full">
  {categories.map((cat, index) => (
    <button
      key={index}
      onClick={() => setActiveCategory(cat)}
      className={`text-center  py-1 w-[25%] md:text-sm text-xs rounded-full border shadow-md shadow-gray-900 transition-all
        ${
          activeCategory === cat
            ? "bg-black text-white"
            : "bg-gray-200 text-gray-600"
        }`}
    >
      {cat}
    </button>
  ))}
</div>


      {/* Cards */}
      <div className="flex gap-3 ">
        {/* Main Card */}
        <div className="w-2/3  h-2/3 border rounded-xl overflow-hidden  shadow-md shadow-gray-900">
          <div className="md:h-28 h-20 bg-black"></div>

          <div className="p-3">
            <p className="md:text-sm text-xs text-gray-800 font-semibold">Plumbing</p>
            <h3 className="md:text-sm text-[10px] font-semibold">
              Complete Residential Plumbing
            </h3>

            <div className="flex items-center text-xs text-gray-500 mt-1 gap-1">
              <FaStar className="text-yellow-400" />
              <span className="md:text-sm text-[10px]" >4.2</span>
              <span  className="md:text-sm text-[10px]" >•</span>
              <span  className="md:text-sm text-[10px]" >7280 Reviews</span>
            </div>

            <p className="md:text-sm text-[10px] font-semibold mt-1">₹300–700</p>
          </div>
        </div>

        <div className="w-2/3 h-2/3 border rounded-xl overflow-hidden shadow-md shadow-gray-900 ">
          <div className="md:h-28 h-20 bg-black"></div>

          <div className="p-3">
            <p className="md:text-sm text-xs text-gray-800 font-semibold">Plumbing</p>
            <h3 className="md:text-sm text-[10px] font-semibold">
              Complete Residential Plumbing
            </h3>

            <div className="flex items-center text-xs text-gray-500 mt-1 gap-1">
              <FaStar className="text-yellow-400" />
              <span className="md:text-sm text-[10px]">4.2</span>
              <span className="md:text-sm text-[10px]">•</span>
              <span className="md:text-sm text-[10px]" > 7280 Reviews</span>
            </div>

            <p className="md:text-sm text-[10px] font-semibold mt-1">₹300–700</p>
          </div>
        </div>
         {/* <div className="w-1/3 border rounded-xl overflow-hidden">
          <div className="h-28 bg-black"></div>

          <div className="p-3">
            <p className="text-xs text-gray-400">Plumbing</p>
            <h3 className="text-sm font-semibold leading-tight">
              Plumbing Adviser
            </h3>
            <p className="text-sm font-semibold mt-1">₹300–700</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}