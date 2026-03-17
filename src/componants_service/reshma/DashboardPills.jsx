import React from "react";
import { useNavigate } from "react-router";

const stats = [
  { title: "Registered Services", value: 12, growth: "+168.001%" },
  { title: "Revised Quotes", value: 12, growth: "+168.001%" },
  { title: "Active Bookings", value: 12, growth: "+168.001%" },
  { title: "Requests", value: 12, growth: "+168.001%" },
];

const DashboardPills = () => {
  const navigate = useNavigate();

  const routeMap = {
    "Registered Services": "/page69",
    "Active Bookings": "/page71",
    Requests: "/page70",
  };

  return (
    <div className="px-7 md:px-10 lg:px-10">
      <div className="bg-gray-300 flex justify-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-7xl">
          {stats.map((item, index) => {
            const route = routeMap[item.title];

            return (
              <div
                key={index}
                onClick={() => route && navigate(route)}
                className={`bg-white rounded-2xl h-60 shadow-md p-6 flex items-center justify-between 
                  transition-all duration-300 
                  ${route ? "cursor-pointer hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]" : ""}
                `}
              >
                {/* Left Content */}
                <div>
                  <h3 className="text-gray-600 font-medium">{item.title}</h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {item.value}
                  </p>
                  <p className="text-green-500 text-sm mt-1">{item.growth}</p>
                </div>

                {/* Circle */}
                <div className="w-16 h-16 bg-blue-300 rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardPills;
