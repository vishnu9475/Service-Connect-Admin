import React, { useState } from "react";
import WorkCard107 from "./WorkCard107";



const WorkList106 = ({ data }) => {
  const [activeTab, setActiveTab] = useState("ongoing");

  const filteredData = data.filter((item) =>
    activeTab === "completed" ? item.completed : !item.completed
  );

  return (
    <section className="w-full min-h-screen bg-gray-100 px-4 py-4">
      <div className="max-w-md mx-auto space-y-4">
        {/* Tabs */}
        <div className="flex bg-gray-300 rounded-full p-1">
          <button
            onClick={() => setActiveTab("ongoing")}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "ongoing"
                ? "bg-white text-gray-900 shadow"
                : "text-gray-600"
            }`}
          >
            Ongoing
          </button>

          <button
            onClick={() => setActiveTab("completed")}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "completed"
                ? "bg-white text-gray-900 shadow"
                : "text-gray-600"
            }`}
          >
            Completed
          </button>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {filteredData.map((item) => (
            <WorkCard107 key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkList106;
