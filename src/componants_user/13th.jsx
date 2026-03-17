import { MdArrowForwardIos } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const categories = ["All", "Plumbing", "Electrical", "Heal"];

export default function Comp13() {
  return (
    <div className="max-w-md mx-auto p-4 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Popular Services</h2>
        <button className="text-sm text-gray-500 flex items-center gap-1">
          See All <MdArrowForwardIos size={14} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`px-3 py-1 text-sm rounded-full border 
              ${
                cat === "Plumbing"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex gap-3">
        {/* Main Card */}
        <div className="w-2/3 border rounded-xl overflow-hidden">
          <div className="h-28 bg-black"></div>

          <div className="p-3">
            <p className="text-xs text-gray-400">Plumbing</p>
            <h3 className="text-sm font-semibold">
              Complete Residential Plumbing
            </h3>

            <div className="flex items-center text-xs text-gray-500 mt-1 gap-1">
              <FaStar className="text-yellow-400" />
              <span>4.2</span>
              <span>•</span>
              <span>7280 Reviews</span>
            </div>

            <p className="text-sm font-semibold mt-1">₹300–700</p>
          </div>
        </div>

        <div className="w-2/3 border rounded-xl overflow-hidden">
          <div className="h-28 bg-black"></div>

          <div className="p-3">
            <p className="text-xs text-gray-400">Plumbing</p>
            <h3 className="text-sm font-semibold">
              Complete Residential Plumbing
            </h3>

            <div className="flex items-center text-xs text-gray-500 mt-1 gap-1">
              <FaStar className="text-yellow-400" />
              <span>4.2</span>
              <span>•</span>
              <span>7280 Reviews</span>
            </div>

            <p className="text-sm font-semibold mt-1">₹300–700</p>
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
