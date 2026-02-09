// import React, { useState } from "react";
import { useState } from "react";

import { FiTrendingUp, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const STATUS_COLOR = {
  Complete: "text-green-500",
  Pending: "text-gray-400",
  Canceled: "text-red-500",
};

const dummyData = [
  { id: "#123456789", date: "2 March 2021", time: "13:45 PM", amount: "$ 50,036", status: "Complete" },
  { id: "#123456789", date: "2 March 2021", time: "13:45 PM", amount: "$ 50,036", status: "Pending" },
  { id: "#123456789", date: "2 March 2021", time: "13:45 PM", amount: "$ 50,036", status: "Canceled" },
  { id: "#123456789", date: "2 March 2021", time: "13:45 PM", amount: "$ 50,036", status: "Complete" },
  { id: "#123456789", date: "2 March 2021", time: "13:45 PM", amount: "$ 50,036", status: "Complete" },
];

export default function ComplaintsCard119({
  title = "Complaints",
  data = dummyData,
  itemsPerPage = 5,
}) {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const totalPages = 3;

  const startIndex = (page - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white rounded-xl p-3 shadow-sm w-full flex flex-col overflow-hidden">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold text-indigo-900">
          {title}
        </h2>

        {/* VIEW MORE */}
        <button
          onClick={() => navigate("/ComplaintsList")}
          className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
        >
          View More
          <FiArrowRight size={14} />
        </button>
      </div>

      {/* LIST */}
      <div className="flex-1 space-y-2">
        {currentData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm"
          >
            {/* LEFT */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white">
                <FiTrendingUp size={14} />
              </div>
              <div>
                <p className="text-xs font-semibold text-indigo-900">
                  {item.id}
                </p>
                <p className="text-[11px] text-gray-400">
                  {item.date}, {item.time}
                </p>
              </div>
            </div>

            {/* AMOUNT */}
            <p className="text-xs font-semibold text-indigo-900 whitespace-nowrap">
              {item.amount}
            </p>

            {/* STATUS */}
            <p className={`text-xs font-medium ${STATUS_COLOR[item.status]}`}>
              {item.status}
            </p>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="mt-4 flex items-center justify-between text-xs">
        <p className="text-gray-400">
          Showing {startIndex + 1}-{startIndex + currentData.length} from {data.length} data
        </p>

        {/* PAGINATION */}
        <div className="flex items-center gap-1">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="text-gray-400 disabled:opacity-40"
          >
            ‹
          </button>

          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`w-6 h-6 rounded-full text-xs ${
                page === num
                  ? "bg-indigo-600 text-white"
                  : "border border-gray-300 text-gray-400"
              }`}
            >
              {num}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            className="text-gray-400 disabled:opacity-40"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
