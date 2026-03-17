import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import JobItem from "./JobItem";

export default function JobLists() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ongoing");

  const jobs = [
    {
      id: 1,
      title: "Tap Repair",
      user: "Keshavan",
      status: "ongoing",
      date: "March 20, 2025",
      time: "09:00 AM - 10:00 AM",
      amount: 300,
      hasExtra: true,
    },
    {
      id: 2,
      title: "Pipe Fixing",
      user: "Arun",
      status: "completed",
      date: "March 18, 2025",
      time: "11:00 AM - 12:00 PM",
      amount: 450,
      hasExtra: false,
    },
    {
      id: 3,
      title: "Bathroom Cleaning",
      user: "Ravi",
      status: "ongoing",
      date: "March 21, 2025",
      time: "02:00 PM - 03:00 PM",
      amount: 250,
      hasExtra: true,
    },
    {
      id: 4,
      title: "AC Service",
      user: "Suresh",
      status: "completed",
      date: "March 15, 2025",
      time: "04:00 PM - 05:00 PM",
      amount: 1200,
      hasExtra: false,
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "completed") navigate("/pageu33");
  };

  return (
    <div className="px-4 sm:px-8 py-4 bg-gray-200 min-h-screen">

      {/* TOGGLE */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative flex bg-gray-500 rounded-full p-1">
          
          {/* SLIDER */}
          <div
            className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-full transition-all duration-300 ${
              activeTab === "completed"
                ? "translate-x-full"
                : "translate-x-0"
            }`}
          />

          <button
            onClick={() => handleTabChange("ongoing")}
            className={`relative z-10 w-1/2 py-2 text-sm sm:text-base font-medium transition ${
              activeTab === "ongoing" ? "text-black" : "text-white"
            }`}
          >
            Ongoing
          </button>

          <button
            onClick={() => handleTabChange("completed")}
            className={`relative z-10 w-1/2 py-2 text-sm sm:text-base font-medium transition ${
              activeTab === "completed" ? "text-black" : "text-white"
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* JOB LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <Link to="/75"><JobItem key={job.id} job={job} /></Link>
        ))}
      </div>
    </div>
  );
}