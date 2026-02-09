import React from "react";
import {
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const activities = [
  {
    id: 1,
    title: "New Service Registration",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    name: "Rakavan",
    description: "Tap Work",
    color: "bg-indigo-600",
  },
  {
    id: 2,
    title: "New Ad Posted",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    name: "Rakavan",
    description: "50% off",
    color: "bg-orange-400",
  },
  {
    id: 3,
    title: "New Service Registration",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    name: "Rakavan",
    description: "Tap Work",
    color: "bg-yellow-400",
  },
  {
    id: 4,
    title: "New Service Registration",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    name: "Rakavan",
    description: "Tap Work",
    color: "bg-indigo-900",
  },
];

function RecentActivities() {
  const navigate = useNavigate();

  /* 🔹 VIEW MORE CLICK */
  const handleViewMore = () => {
    navigate("/DealerList");
  };

  return (
    <div className="bg-[#F3F4FF] min-h-screen flex justify-center px-3 sm:px-6 py-4">
      <div className="w-full max-w-sm sm:max-w-md space-y-4">

        {/* HEADER CARD */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-indigo-700 font-semibold text-sm sm:text-base">
            Recent Activities
          </h2>
          <p className="text-[11px] text-gray-400 mt-1">
            Thursday, 10th April , 2021
          </p>
        </div>

        {/* ACTIVITY CARDS */}
        {activities.map((item) => (
          <div
            key={item.id}
            className="flex bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className={`w-3 sm:w-4 ${item.color}`} />

            <div className="p-3 sm:p-4 flex-1">
              <h3 className="text-sm font-semibold text-indigo-800">
                {item.title}
              </h3>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-400 mt-1">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-3.5 h-3.5 text-orange-400" />
                  {item.date}
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-3.5 h-3.5 text-yellow-400" />
                  {item.time}
                </div>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <div className="w-8 h-8 rounded-full bg-indigo-200 shrink-0" />
                <div className="leading-tight">
                  <p className="text-sm text-gray-700 font-medium">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* VIEW MORE */}
        <button
          onClick={handleViewMore}
          className="w-full bg-indigo-100 text-indigo-700 text-xs py-2 rounded-lg"
        >
          View More
        </button>

      </div>
    </div>
  );
}

export default RecentActivities;
