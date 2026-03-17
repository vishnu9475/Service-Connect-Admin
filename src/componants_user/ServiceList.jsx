import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceItem from "./ServiceItem";

export default function ServiceList() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("completed");

  const services = [
    {
      id: 1,
      category: "UI / UX",
      title: "Mobile App UI Design",
      rating: 4.6,
    },
    {
      id: 2,
      category: "UI / UX",
      title: "Mobile App UI Design",
      rating: 4.6,
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "ongoing") navigate("/page27");
  };

  const handleServiceClick = () => {
    navigate("/page28");
  };

  return (
    <div className="px-4 sm:px-8 py-4 bg-gray-100 min-h-screen">

      {/* TOGGLE */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative flex bg-gray-500 rounded-full p-1">

          <div
            className={`absolute top-1 left-[-5px] bottom-1 w-1/2 bg-white rounded-full transition-all duration-300 ${
              activeTab === "completed" ? "translate-x-full" : "translate-x-0"
            }`}
          />

          <button
            onClick={() => handleTabChange("ongoing")}
            className={`relative z-10 w-1/2 py-2 font-medium ${
              activeTab === "ongoing" ? "text-black" : "text-white"
            }`}
          >
            Ongoing
          </button>

          <button
            onClick={() => handleTabChange("completed")}
            className={`relative z-10 w-1/2 py-2 font-medium ${
              activeTab === "completed" ? "text-black" : "text-white"
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* SERVICE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceItem
            key={service.id}
            category={service.category}
            title={service.title}
            rating={service.rating}
            completed
            onClick={handleServiceClick}
          />
        ))}
      </div>
    </div>
  );
}
