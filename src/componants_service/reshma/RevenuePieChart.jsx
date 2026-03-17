import React from "react";

export default function RevenuePieChart() {
  return (
    <div className="px-7  md:px-10 lg:px-10 my-3 ">
      <div className=" bg-gray-100 p-4 sm:p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg border shadow p-6">
          <h2 className="text-xl font-bold mb-6">Revenue Distribution</h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Donut Chart */}
            <div className="relative">
              <svg viewBox="0 0 200 200" className="w-64 h-64">
                {/* Green segment */}
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="40"
                  strokeDasharray="132 440"
                  strokeDashoffset="0"
                  transform="rotate(-90 100 100)"
                />
                {/* Purple segment */}
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="40"
                  strokeDasharray="110 440"
                  strokeDashoffset="-132"
                  transform="rotate(-90 100 100)"
                />
                {/* Orange segment */}
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="40"
                  strokeDasharray="198 440"
                  strokeDashoffset="-242"
                  transform="rotate(-90 100 100)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl  text-black font-bold">3</div>
                  <div className="text-m font-semibold text-gray-500">
                    Service
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <div className="flex-1">
                  <p className="font-semibold  text-black">Product Sales</p>
                  <p className="text-sm text-gray-600">30%</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-purple-500 rounded"></div>
                <div className="flex-1">
                  <p className="font-semibold  text-black ">Services</p>
                  <p className="text-sm text-gray-600">25%</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <div className="flex-1">
                  <p className="font-semibold text-black">Subscriptions</p>
                  <p className="text-sm text-gray-600">20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
