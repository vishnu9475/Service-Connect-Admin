import React, { useState, useMemo } from "react";
import { FaUser, FaArrowRight } from "react-icons/fa"; // Added FaArrowRight
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 5;

const IncompleteBookings118 = ({
  title = "Incomplete Bookings",
  data = [
    { id: "101", name: "Booking A", user: "Arjun", amount: "250" },
    { id: "102", name: "Booking B", user: "Rahul", amount: "450" },
    { id: "103", name: "Booking C", user: "Asha", amount: "120" },
    { id: "104", name: "Booking D", user: "Kiran", amount: "300" },
    { id: "105", name: "Booking E", user: "Sita", amount: "210" },
    { id: "106", name: "Booking F", user: "Amit", amount: "500" },
    { id: "107", name: "Booking G", user: "Pooja", amount: "150" },
  ],
  pageMode = false,
}) => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    return data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [page, data]);

  return (
    <div className={`${pageMode ? "min-h-screen bg-[#f5f6ff] p-6" : "h-full"}`}>
      <div
        className={`${
          pageMode
            ? "max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col border border-gray-300"
            : "bg-white rounded-2xl p-6 w-full shadow-sm h-full flex flex-col border border-gray-300"
        }`}
      >
        {/* HEADER WITH NEW VIEW MORE STYLE */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-[#303972]">
            {title}
          </h2>
          
          <button 
             onClick={() => navigate("/incbookings")}
                  className="flex items-center gap-1.5 text-[12px] font-extrabold text-[#605BFF] hover:text-[#4D44B5] transition-colors group"
                   >
                    <span>View More</span>
                  <FaArrowRight 
                   size={10} 
               className="transition-transform group-hover:translate-x-1" 
                 />
          </button>
        </div>

        {/* ROWS WITH SEPARATOR LINES */}
        <div className="flex-1 flex flex-col">
          {paginatedData.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center justify-between gap-4 py-4 ${
                index !== paginatedData.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="flex items-center gap-3 w-48">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-[#4D44B5]">
                  <FaUser size={16} />
                </div>
                <span className="font-bold text-[#303972]">
                  {item.name}
                </span>
              </div>

              <div className="w-32 text-[#4D44B5] font-medium text-sm">
                ID {item.id}
              </div>

              <div className="flex items-center gap-2 w-40 text-gray-500">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">
                  <FaUser size={14} />
                </div>
                <span className="text-sm font-medium">{item.user}</span>
              </div>

              <div className="w-24 font-bold text-[#303972] text-right">
                ${item.amount}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-400 font-medium">
            Showing {(page - 1) * ITEMS_PER_PAGE + 1}–
            {Math.min(page * ITEMS_PER_PAGE, totalItems)} of{" "}
            {totalItems} data
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="w-8 h-8 flex items-center justify-center text-gray-400 disabled:opacity-30"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                    page === pageNum
                      ? "bg-[#4D44B5] text-white shadow-md"
                      : "text-gray-400 hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="w-8 h-8 flex items-center justify-center text-gray-400 disabled:opacity-30"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncompleteBookings118;