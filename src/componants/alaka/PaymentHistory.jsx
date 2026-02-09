import React, { useState } from "react";
import { IoMdTrendingUp } from "react-icons/io";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";

const Payement = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActivePage = location.pathname.toLowerCase().includes("pay");

  const Statusclass = {
    Complete: "text-[#4CBC9A]",
    Pending: "text-[#A098AE]",
    Canceled: "text-[#FF4550]",
  };

  const payementHistory = [
    {
      id: 1,
      number: "#123456789",
      date: "2 March 2021, 13:45 PM",
      description: "Description",
      amount: "$ 50,036",
      status: "Complete",
    },
    {
      id: 2,
      number: "#123456789",
      date: "2 March 2021, 13:45 PM",
      description: "Description",
      amount: "$ 50,036",
      status: "Pending",
    },
    {
      id: 3,
      number: "#123456789",
      date: "2 March 2021, 13:45 PM",
      description: "Description",
      amount: "$ 50,036",
      status: "Canceled",
    },
    {
      id: 4,
      number: "#123456789",
      date: "2 March 2021, 13:45 PM",
      description: "Description",
      amount: "$ 50,036",
      status: "Complete",
    },
  ];

  const TOTAL_PAGES = 3;
  const [page, setPage] = useState(1);

  /* ✅ CLICK ANYWHERE → NAVIGATE (ROW DATA PRESERVED) */
  const handleCardClick = (item) => {
    navigate("/TransactionHistory", {
      state: {
        transactionId: item.number,
        amount: item.amount,
        status: item.status,
        date: item.date,
        description: item.description,
      },
    });
  };

  return (
    /* 🔥 ENTIRE CARD IS THE POPUP-STYLE CLICKABLE AREA */
    <div
      className={`
        bg-white rounded-xl p-3 w-full h-full flex flex-col
        border border-gray-200
        shadow-sm cursor-pointer
        transition-all duration-200
        hover:bg-indigo-50
        hover:shadow-xl
        hover:-translate-y-1
        hover:border-indigo-300
        ${isActivePage ? "ring-2 ring-[#4D44B5]/30" : ""}
      `}
      onClick={() => handleCardClick(payementHistory[0])}
    >
      {/* TITLE */}
      <h2 className="text-sm font-semibold text-[#303972] mb-3">
        Payment History
      </h2>

      {/* LIST */}
      <div className="space-y-3 flex-1">
        {payementHistory.map((item) => (
          <div
            key={item.id}
            onClick={(e) => {
              e.stopPropagation(); // prevent double firing
              handleCardClick(item);
            }}
            className="
              flex flex-col gap-2
              sm:grid sm:grid-cols-[40px_1.2fr_1.6fr_1fr_1fr_auto]
              sm:items-center
            "
          >
            <div className="w-9 h-9 rounded-full bg-[#FF4550] flex items-center justify-center">
              <IoMdTrendingUp className="text-white text-sm" />
            </div>

            <p className="text-xs font-semibold text-[#303972]">
              {item.number}
            </p>

            <p className="text-[11px] text-[#A098AE]">
              {item.date}
            </p>

            <p className="text-[11px] text-[#A098AE]">
              {item.description}
            </p>

            <p className="text-xs font-semibold text-[#303972]">
              {item.amount}
            </p>

            <p className={`text-xs font-semibold ${Statusclass[item.status]}`}>
              {item.status}
            </p>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div
        className="mt-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[11px] text-[#A098AE]">
          Showing <span className="text-[#303972] font-medium">1–5</span> from 100 data
        </p>

        <div className="flex items-center gap-2">
          <BiLeftArrow
            className="text-[#A098AE] cursor-pointer text-xs"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          />

          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={
                page === num
                  ? "w-8 h-8 rounded-full bg-[#4D44B5] text-white text-xs"
                  : "w-8 h-8 rounded-full border border-[#DADADA] text-[#A098AE] text-xs"
              }
            >
              {num}
            </button>
          ))}

          <BiRightArrow
            className="text-[#A098AE] cursor-pointer text-xs"
            onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
          />
        </div>
      </div>
    </div>
  );
};

export default Payement;
