import React from "react";
import { ArrowRight } from "lucide-react";
import Component4 from "../componants_user/Component4";

export default function History() {
  // Example history data (replace with API data)
  const history = []; // ← empty means no history

  return (
    <div className="min-h-screen bg-white md:bg-gray-200">
      {/* Header */}
      <Component4 title={"History"} theme="black" />

      {/* Content */}
      <div className="px-4 py-6">
        {history.length === 0 ? (
          /* ================= EMPTY STATE ================= */
          <div className="flex justify-center items-center py-10">
            <div
              className="
                w-full
                max-w-sm
                bg-[#f8fbff]
                rounded-3xl
                px-6
                py-10
                text-center
                shadow-md
              "
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                No History Found
              </h2>

              <p className="text-sm text-gray-500 mb-8">
                Your activity will appear here once you start using our service
              </p>

              <button className="relative w-full mt-6 bg-[#1E2235] text-white py-3 rounded-full flex items-center text-center justify-center cursor-pointer">
                Explore Service
                {/* Arrow */}
                <span className="absolute right-2 bg-white text-black rounded-full  w-9 h-9 flex items-center justify-center">
                  <ArrowRight />
                </span>
              </button>
            </div>
          </div>
        ) : (
          /* ================= HISTORY LIST ================= */
          <div className="max-w-md mx-auto space-y-4">
            {history.map((item, index) => (
              <div key={index} className="bg-white rounded-xl px-4 py-4 shadow">
                {/* Example history item */}
                <p className="text-sm font-medium text-gray-900">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
