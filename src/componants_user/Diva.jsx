
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

function Diva() {
  const [active, setActive] = useState("nearby");

  return (
    <div className="w-4/5 rounded-xl mx-auto my-4 p-4 bg-gray-200 shadow">

      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-stone-400 rounded-xl px-3 py-2">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search for..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-700"
        />
        <button className="p-2 bg-white rounded-lg shadow">
          <SlidersHorizontal size={16} className="text-gray-500" />
        </button>
      </div>

      {/* Filters */}
      <div className="mt-4 grid grid-cols-3 rounded-full bg-gray-100 p-1">
        
        <button
          onClick={() => setActive("nearby")}
          className={`flex items-center justify-center rounded-full text-sm transition
            ${active === "nearby"
              ? "bg-black text-white"
              : "text-gray-500 hover:bg-gray-200"}
          `}
        >
          Near By
        </button>

        <button
          onClick={() => setActive("10km")}
          className={`flex items-center justify-center rounded-full text-sm transition
            ${active === "10km"
              ? "bg-black text-white"
              : "text-gray-500 hover:bg-gray-200"}
          `}
        >
          10 KM
        </button>

        <button
          onClick={() => setActive("all")}
          className={`flex items-center justify-center rounded-full text-sm transition
            ${active === "all"
              ? "bg-black text-white"
              : "text-gray-500 hover:bg-gray-200"}
          `}
        >
          All
        </button>

      </div>
    </div>
  );
}

export default Diva;
