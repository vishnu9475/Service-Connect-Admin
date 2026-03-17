import { useState } from 'react'
import ActiveComplaint from './ActiveComplaint'

export default function ActiveComplaints() {

  const [activeTab, setActiveTab] = useState("active");

  return (
    <div>
      <div className="flex justify-center mt-3">
        <div className="bg-gray-700 p-1 rounded-full w-[95%] flex">

          <div
            onClick={() => setActiveTab("active")}
            className={`flex-1 py-1 rounded-full text-center font-medium cursor-pointer
              ${activeTab === "active"
                ? "bg-white text-gray-800"
                : "text-white"
              }`}
          >
            Active
          </div>

          <div
            onClick={() => setActiveTab("completed")}
            className={`flex-1 py-1 rounded-full text-center font-medium cursor-pointer
              ${activeTab === "completed"
                ? "bg-white text-gray-800"
                : "text-white"
              }`}
          >
            Completed
          </div>

        </div>
      </div>

      <div className="mt-3">
        {activeTab === "active" && <ActiveComplaint />}
        {activeTab === "completed" && <p className="text-center text-gray-500">Completed complaints</p>}
      </div>
    </div>
  )
}
