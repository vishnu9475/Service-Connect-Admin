import React from "react";
import { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";

export default function Expense() {
  const [page, setPage] = useState(1);

  const expenses = [
    { id: 1, category: "SMS charges" },
    { id: 2, category: "Salary" },
    { id: 3, category: "Rent" },
    { id: 4, category: "Salary" },
    { id: 5, category: "Salary" },
  ];

  const totalPages = 3;

  return (
    <div className="mt-10 flex items-center justify-center px-4">
      
      {/* CARD */}
      <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-md p-6">

        {/* Header */}
        <h2 className="text-[18px] font-semibold text-[#2D2F7A] mb-6">
          Expense
        </h2>

        {/* Expense List */}
        <div className="space-y-6">
          {expenses.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[56px_1fr_90px] items-center"
            >
              {/* ICON */}
              <div className="flex justify-center">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                  <IoMdTrendingUp className="text-white text-lg" />
                </div>
              </div>

              {/* DETAILS */}
              <div className="flex flex-col gap-1 min-w-0">
                <p className="text-[14px] font-semibold text-[#2D2F7A] truncate">
                  #123456789
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
                  <span className="text-[11px] text-gray-400 whitespace-nowrap">
                    2 March 2025, 13:45 PM
                  </span>
                  <span className="text-[11px] text-[#6B6FA9]">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* AMOUNT */}
              <p className="text-[14px] font-semibold text-[#2D2F7A] text-right whitespace-nowrap">
                $ 50,036
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[11px] text-gray-400">
            Showing 1–5 from 100 data
          </p>

          {/* Pagination */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="text-[#A098AE] disabled:opacity-40"
            >
              <FaCaretLeft size={16} />
            </button>

            {[1, 2, 3].map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-8 h-8 rounded-full text-sm font-medium
                  ${
                    page === p
                      ? "bg-[#4B4ACF] text-white"
                      : "border text-gray-500"
                  }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="text-[#A098AE] disabled:opacity-40"
            >
              <FaCaretRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
