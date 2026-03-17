import React, { useState } from 'react'
import AdItem from './AdItem'

export default function AdsList () {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div>
      <div className="flex justify-center m-3">
        <div className="bg-stone-500 p-1 rounded-full w-full flex">

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
            onClick={() => setActiveTab("saved")}
            className={`flex-1 py-1 rounded-full text-center font-medium cursor-pointer
              ${activeTab === "saved"
                ? "bg-white text-gray-800"
                : "text-white"
              }`}
          >
            Saved
          </div>

        </div>
      </div>

      <div className="m-3">
        <AdItem />
      </div>

      <div className="flex justify-center mt-5">
        <button className="w-[60%] bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition">
          + Create Ad
        </button>
      </div>
    </div>
  )
}
