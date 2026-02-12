// Dashboard.jsx
import React from "react";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from "../componants/neja/AdminMain114";
import Chart from "../componants/arjun/Chart";
import Messages120 from "../componants/arjun/Messages120";
import ServiceCategories from "../componants/arjun/ServiceCategories";
import RecentActivities from "../componants/arjun/RecentActivities";
import StatCard from "../componants/arjun/StatCard";
import Finance from "../componants/arjun/Finance";
import IncompleteBookings118 from "../componants/arjun/IncompleteBookings118";
import ComplaintsCard119 from "../componants/arjun/ComplaintsCard119";
import CustomerArrivalChart from "../componants/arjun/CustomerArrivalChart";
import StatisticsCard from "../componants/arjun/StatisticsCard";
import RevenueCard from "../componants/arjun/RevenueCard";
import Calendar117 from "../componants/arjun/Calendar117";

/* ✅ ONLY NEW ADDITION */
const statsData = [
  {
    title: "Franchisee",
    value: "932",
    icon: "users",
    color: "bg-indigo-500",
  },
  {
    title: "Dealers",
    value: "754",
    icon: "calendar",
    color: "bg-orange-400",
  },
  {
    title: "Providers",
    value: "40",
    icon: "briefcase",
    color: "bg-yellow-400",
  },
  {
    title: "Users",
    value: "32k",
    icon: "users",
    color: "bg-indigo-900",
  },
];

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#f5f6ff] overflow-x-hidden">
      {/* SIDEBAR */}
      <AdminSideMenu113 />

      {/* MAIN AREA */}
      <div className="flex-1 ml-0 lg:ml-64 flex flex-col min-h-screen overflow-x-hidden">
        <AdminMain114
          title="DASHBOARD"
          showSearch
          showBell
          showSettings
          showProfile
        >
          {/* CONTENT WRAPPER */}
          <div
            className="
              w-full
              mx-auto
              px-4 sm:px-6 lg:px-8 2xl:px-12
              max-w-[1600px] 2xl:max-w-[1800px] 4xl:max-w-[2200px]
            "
          >
            {/* MAIN GRID */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 xl:gap-6">

              {/* LEFT COLUMN */}
              <div className="xl:col-span-8 flex flex-col gap-6">

                {/* STATS — UPDATED ONLY */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pr-[15px]">
                  {statsData.map((item, index) => (
                    <StatCard
                      key={index}
                      title={item.title}
                      value={item.value}
                      icon={item.icon}
                      color={item.color}
                    />
                  ))}
                </div>

                {/* CHART */}
                <div className="w-full min-h-[300px]">
                  <Chart />
                </div>

                {/* CALENDAR + FINANCE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Calendar117 />
                  <Finance />
                </div>

                {/* CUSTOMER ARRIVAL */}
                <div className="w-full min-h-[260px]">
                  <CustomerArrivalChart />
                </div>

                {/* STATISTICS + REVENUE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <StatisticsCard />
                  <RevenueCard />
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="xl:col-span-4 flex flex-col gap-6">
                <RecentActivities />
                <Messages120 />
                <ServiceCategories />
              </div>
            </div>

            {/* BOTTOM SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 pb-12">
              <IncompleteBookings118 />
              <ComplaintsCard119 />
            </div>
          </div>
        </AdminMain114>
      </div>
    </div>
  );
}

export default Dashboard;
