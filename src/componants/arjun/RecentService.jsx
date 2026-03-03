import React from "react";
import { FiCalendar, FiClock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Tap Repair",
    name: "Keshavan",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    color: "bg-indigo-600",
  },
  {
    title: "Drain Blockage",
    name: "Keshavan",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    color: "bg-orange-400",
  },
  {
    title: "Light Change",
    name: "Keshavan",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    color: "bg-yellow-400",
  },
  {
    title: "Fan Repair",
    name: "Keshavan",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    color: "bg-indigo-900",
  },
];

function RecentServiceDetails() {

  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate("/servicehistory");
  };

  return (
    <div className="
      w-full 
      max-w-sm sm:max-w-md lg:max-w-lg 
      mx-auto 
      bg-[#F3F4FF] 
      p-4 sm:p-5 lg:p-6 
      rounded-2xl 
      space-y-5
    ">

      {/* Header */}
      <div className="bg-white p-4 sm:p-5 rounded-xl">
        <h2 className="text-base sm:text-lg font-semibold text-indigo-900">
          Recent Service Details
        </h2>
        <p className="text-xs sm:text-sm text-gray-400">
          Thursday, 10th April , 2021
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              flex 
              bg-white 
              rounded-2xl 
              overflow-hidden 
              shadow-sm 
              hover:shadow-md 
              transition
            "
          >
            {/* Left Color Strip */}
            <div className={`w-4 sm:w-5 ${service.color} rounded-l-2xl`} />

            {/* Card Content */}
            <div className="p-4 sm:p-5 flex-1 space-y-2">
              <h3 className="text-sm sm:text-base font-semibold text-indigo-900">
                {service.title}
              </h3>

              {/* Profile */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                <div className="
                  w-6 h-6 sm:w-7 sm:h-7 
                  bg-indigo-300 
                  rounded-full 
                  flex items-center justify-center 
                  text-white 
                  text-xs font-semibold
                ">
                  {service.name.charAt(0)}
                </div>
                {service.name}
              </div>

              <p className="text-[11px] sm:text-xs text-gray-400">
                Booked
              </p>

              {/* Date & Time */}
              <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-orange-500" />
                  {service.date}
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="text-yellow-500" />
                  {service.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <button 
        onClick={handleViewMore}
        className="
        w-full 
        bg-[#E6E8FA] 
        text-indigo-700 
        py-2.5 sm:py-3 
        rounded-xl 
        text-sm sm:text-base 
        font-medium
        cursor-pointer
        hover:bg-indigo-100
        transition
      " >
        View More
      </button>
    </div>
  );
}

export default RecentServiceDetails;
