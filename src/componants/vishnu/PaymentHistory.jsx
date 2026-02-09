import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiMoreHorizontal,
  FiTrendingUp,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const payments = [
  { id: "#123456789", date: "2 March 2021, 13:45 PM", amount: "$ 50,036", status: "Complete" },
  { id: "#123456789", date: "2 March 2021, 13:45 PM", amount: "$ 50,036", status: "Pending" },
  { id: "#123456789", date: "2 March 2021, 13:45 PM", amount: "$ 50,036", status: "Canceled" },
  { id: "#123456789", date: "2 March 2021, 13:45 PM", amount: "$ 50,036", status: "Complete" },
  { id: "#123456789", date: "2 March 2021, 13:45 PM", amount: "$ 50,036", status: "Pending" },
  { id: "#123456789", date: "2 March 2021, 13:45 PM", amount: "$ 50,036", status: "Canceled" },
  { id: "#123456789", date: "2 March 2021, 13:45 PM", amount: "$ 50,036", status: "Complete" },
];

const statusColor = {
  Complete: "text-green-500",
  Pending: "text-gray-400",
  Canceled: "text-red-500",
};

function PaymentHistory({onView}) {
  const itemsPerPage = 3;
  const [page, setPage] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const totalPages = Math.ceil(payments.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const paginatedPayments = payments.slice(startIndex, endIndex);

  /* CLOSE MENU ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4 sm:mb-6 relative">
        <h2 className="text-base sm:text-lg font-semibold text-[#2d2d6e]">
          Payment History
        </h2>

        {/* MORE MENU BUTTON */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="text-gray-400 hover:text-indigo-600 cursor-pointer"
        >
          <FiMoreHorizontal size={18} />
        </button>

        {/* DROPDOWN MENU */}
        {openMenu && (
          <div className="absolute right-0 top-8 bg-white border rounded-lg shadow-md w-28 z-10" ref={menuRef}>
            <button
              onClick={onView}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              View
            </button>
          </div>
        )}
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {paginatedPayments.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
          >
            {/* LEFT */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-500 flex items-center justify-center text-white">
                <FiTrendingUp />
              </div>

              <div>
                <p className="text-sm font-medium text-[#2d2d6e]">{item.id}</p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-between sm:justify-end gap-4 pl-12 sm:pl-0">
              <div className="hidden sm:block text-sm font-semibold text-[#2d2d6e]">
                {item.amount}
              </div>
              <div className={`text-sm font-medium ${statusColor[item.status]}`}>
                {item.status}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-400 text-center sm:text-left">
          Showing {startIndex + 1}–{Math.min(endIndex, payments.length)} from {payments.length} data
        </p>

        {/* PAGINATION */}
        <div className="flex items-center justify-center sm:justify-end gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="w-8 h-8 flex items-center justify-center rounded-full border text-gray-400 disabled:opacity-40"
          >
            <FiChevronLeft />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${
                page === i + 1
                  ? "bg-[#4D44B5] text-white"
                  : "border text-gray-500"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-full border text-gray-400 disabled:opacity-40"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
