import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";

function StatCard({ title, value, percent, trend, bg, className }) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm px-5 py-4 ${className}`}>
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center`}>
          <UserIcon className="w-6 h-6 text-white" />
        </div>

        <div>
          <p className="text-xs text-[#A098AE]">{title}</p>
          <p className="text-lg font-bold text-[#303972]">{value}</p>
          <p className="text-xs">
            <span className={trend}>{percent}</span>{" "}
            <span className="text-black">than last month</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function DashboardStats() {
  return (
    <div className="max-w-[1050px] w-full">

      
      <div className="hidden lg:grid grid-cols-4 grid-rows-2 gap-5">

        {/* ROW 1 */}
        <StatCard
          className="col-start-1 row-start-1"
          title="Total Earnings"
          value="932"
          percent="+10%"
          trend="text-green-500"
          bg="bg-indigo-600"
        />

        <StatCard
          className="col-start-2 row-start-1"
          title="Total Service Providers"
          value="932"
          percent="+10%"
          trend="text-green-500"
          bg="bg-indigo-600"
        />

        <StatCard
          className="col-start-3 row-start-1"
          title="Total Services"
          value="932"
          percent="+10%"
          trend="text-green-500"
          bg="bg-indigo-600"
        />

        {/* ROW 2 — 754 STARTS HERE (FORCED) */}
        <StatCard
          className="col-start-1 row-start-2"
          title="Registration Earnings"
          value="754"
          percent="-0.5%"
          trend="text-red-500"
          bg="bg-orange-400"
        />

        <StatCard
          className="col-start-2 row-start-2"
          title="Commission Earnings"
          value="932"
          percent="+10%"
          trend="text-green-500"
          bg="bg-indigo-600"
        />

        <StatCard
          className="col-start-3 row-start-2"
          title="Ads Earnings"
          value="754"
          percent="-0.5%"
          trend="text-red-500"
          bg="bg-orange-400"
        />

        {/* RIGHT SIDE — BETWEEN BOTH ROWS */}
        <div className="col-start-4 row-start-1 row-span-2 bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-[#A098AE] mb-4">
              Pending Verification
            </p>
            <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center mx-auto mb-3">
              <UserIcon className="w-7 h-7 text-white" />
            </div>
            <p className="text-2xl font-bold text-[#303972]">32</p>
          </div>
        </div>

      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden">
        <StatCard title="Total Earnings" value="932" percent="+10%" trend="text-green-500" bg="bg-indigo-600" />
        <StatCard title="Total Service Providers" value="932" percent="+10%" trend="text-green-500" bg="bg-indigo-600" />
        <StatCard title="Total Services" value="932" percent="+10%" trend="text-green-500" bg="bg-indigo-600" />
        <StatCard title="Registration Earnings" value="754" percent="-0.5%" trend="text-red-500" bg="bg-orange-400" />
        <StatCard title="Commission Earnings" value="932" percent="+10%" trend="text-green-500" bg="bg-indigo-600" />
        <StatCard title="Ads Earnings" value="754" percent="-0.5%" trend="text-red-500" bg="bg-orange-400" />
      </div>

    </div>
  );
}

export default DashboardStats;
