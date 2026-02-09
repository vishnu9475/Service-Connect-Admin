import React, { useState } from "react";
import { FiTrendingUp, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom"; 

/* STATUS COLORS */
const STATUS_COLOR = {
  Complete: "text-green-500",
  Pending: "text-purple-400",
  Canceled: "text-red-500",
};

const ComplaintsCard119 = ({
  title = "Complaints",
  data = [
    { id: "CMP-001", date: "12 Sep 2025", amount: "₹1,200", status: "Pending" },
    { id: "CMP-002", date: "13 Sep 2025", amount: "₹3,500", status: "Complete" },
    { id: "CMP-003", date: "14 Sep 2025", amount: "₹800", status: "Canceled" },
    { id: "CMP-004", date: "15 Sep 2025", amount: "₹2,100", status: "Pending" },
    { id: "CMP-005", date: "16 Sep 2025", amount: "₹950", status: "Complete" },
    { id: "CMP-006", date: "17 Sep 2025", amount: "₹4,200", status: "Pending" },
  ],
  itemsPerPage = 5,
  pageMode = false, 
}) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={pageMode ? "min-h-screen bg-gray-100 p-4 sm:p-6" : "h-full"}>
      <div
        className={
          pageMode
            ? "max-w-3xl mx-auto bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col"
            : "bg-white rounded-2xl p-6 shadow-sm w-full h-full flex flex-col"
        }
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-indigo-900">{title}</h2>
          
          {/* VIEW MORE - Navigates to /Ac */}
          <Link 
            to="/complaintslist" 
            className="group flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-all"
          >
            View More 
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
          </Link>
        </div>

        {/* LIST SECTION */}
        <div className="space-y-4 flex-1">
          {currentData.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white shrink-0">
                  <FiTrendingUp />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{item.id}</p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-sm font-semibold text-indigo-900 whitespace-nowrap">
                  {item.amount}
                </p>
                <p className={`text-[10px] font-bold uppercase tracking-wider ${STATUS_COLOR[item.status]}`}>
                  {item.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER (Pagination Only) */}
        <div className="flex items-center justify-center mt-auto pt-6 border-t border-gray-50">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-30 transition-colors"
            >
              ‹
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`w-7 h-7 rounded-full text-[11px] font-bold transition-all ${
                    page === pageNum
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-30 transition-colors"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsCard119;