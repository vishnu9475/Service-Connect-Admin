import React, { useState } from "react";
import OngoingJob from "./OngoingJob";

const OngoingJobList = () => {
  const [activeTab, setActiveTab] = useState("Ongoing");

  const [jobs, setJobs] = useState([
    {
      id: 1,
      job: "Tap Repair",
      job_status: "Ongoing",
      Payment_status: "",
      color: "border-blue-500",
    },
    {
      id: 2,
      job: "Tap Repair",
      job_status: "Ongoing",
      Payment_status: "Payment Pending",
      color: "border-blue-500",
    },
  ]);

  const markComplete = (id) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id ? { ...job, job_status: "Completed" } : job,
      ),
    );
  };

  const filteredJobs = jobs.filter((job) =>
    activeTab === "Ongoing"
      ? job.job_status === "Ongoing"
      : job.job_status === "Completed",
  );

  return (
    <div className="bg-gray-300 h-screen max-w-full md:text-xl lg:text-xl p-4">
      <div className="flex p-4 bg-[#6D5D5D] rounded-full mx-4 ">
        <button
          onClick={() => setActiveTab("Ongoing")}
          className={`flex-1 py-2 text-md font-bold rounded-full transition-all ${
            activeTab === "Ongoing"
              ? "bg-white text-black shadow-md"
              : "text-gray-700"
          }`}
        >
          Ongoing
        </button>

        <button
          onClick={() => setActiveTab("Completed")}
          className={`flex-1 py-2 text-md font-bold rounded-full transition-all ${
            activeTab === "Completed"
              ? "bg-white text-black shadow-md"
              : "text-gray-700"
          }`}
        >
          Completed
        </button>
      </div>

      <div>
        {filteredJobs.map((job) => (
          <OngoingJob
            key={job.id}
            {...job}
            onComplete={() => markComplete(job.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default OngoingJobList;
