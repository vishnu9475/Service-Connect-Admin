// import React, { useState, useMemo } from "react";
// import { FiMoreHorizontal } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// const ITEMS_PER_PAGE = 5;

// const IncompleteBookings = () => {
//   const navigate = useNavigate();

//   const bookingsData = useMemo(
//     () => [
//       { name: "Samantha W.", id: "123456789", user: "User Name", amount: "50,036" },
//       { name: "Tony Soap", id: "123456790", user: "User Name", amount: "42,120" },
//       { name: "Jordan Nico", id: "123456791", user: "User Name", amount: "31,880" },
//       { name: "Karen Hope", id: "123456792", user: "User Name", amount: "28,450" },
//       { name: "Nadila Adja", id: "123456793", user: "User Name", amount: "19,600" },
//     ],
//     []
//   );

//   const [page, setPage] = useState(1);

//   const paginatedData = useMemo(() => {
//     const start = (page - 1) * ITEMS_PER_PAGE;
//     return bookingsData.slice(start, start + ITEMS_PER_PAGE);
//   }, [page, bookingsData]);

//   /* ✅ NAVIGATE TO BOOKING DETAILS */
//   const handleRowClick = (item) => {
//     navigate("/Booking-Details", {
//       state: {
//         bookingId: item.id,
//         customerName: item.name,
//       },
//     });
//   };

//   return (
//     <div className="bg-white rounded-xl p-3 shadow-sm w-full">
//       {/* HEADER */}
//       <h2 className="text-xs font-bold text-indigo-900 mb-3">
//         Incomplete Bookings
//       </h2>

//       <div className="overflow-x-auto">
//         <div className="min-w-[520px] space-y-2">
//           {paginatedData.map((item, i) => (
//             <div
//               key={i}
//               onClick={() => handleRowClick(item)}
//               className="flex items-center justify-between gap-2 text-xs cursor-pointer hover:bg-gray-50"
//             >
//               {/* NAME */}
//               <div className="flex items-center gap-2 min-w-[140px]">
//                 <div className="w-7 h-7 rounded-full bg-indigo-200 shrink-0" />
//                 <span className="font-medium text-indigo-900 whitespace-nowrap">
//                   {item.name}
//                 </span>
//               </div>

//               {/* ID */}
//               <span className="text-indigo-600 whitespace-nowrap min-w-[95px]">
//                 ID {item.id}
//               </span>

//               {/* USER */}
//               <div className="flex items-center gap-1 min-w-[95px] text-gray-500">
//                 <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-3 h-3"
//                   >
//                     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//                     <circle cx="12" cy="7" r="4" />
//                   </svg>
//                 </div>
//                 <span className="whitespace-nowrap">{item.user}</span>
//               </div>

//               {/* AMOUNT */}
//               <span className="font-semibold text-indigo-900 whitespace-nowrap min-w-[70px] text-right">
//                 ${item.amount}
//               </span>

//               {/* ACTION ICON */}
//               <FiMoreHorizontal
//                 size={14}
//                 className="text-gray-400 shrink-0"
//                 onClick={(e) => e.stopPropagation()}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* FOOTER */}
//       <div className="flex items-center justify-between mt-4 text-xs flex-wrap gap-2">
//         <span className="text-gray-400">
//           Showing 1–5 of 100 data
//         </span>

//         <div className="flex items-center gap-1">
//           <button
//             disabled={page === 1}
//             onClick={() => setPage((p) => Math.max(p - 1, 1))}
//             className="text-gray-400 disabled:opacity-40"
//           >
//             ‹
//           </button>

//           {[1, 2, 3].map((n) => (
//             <button
//               key={n}
//               onClick={() => setPage(n)}
//               className={`w-6 h-6 rounded-full ${
//                 page === n
//                   ? "bg-indigo-600 text-white"
//                   : "border border-indigo-300 text-indigo-600"
//               }`}
//             >
//               {n}
//             </button>
//           ))}

//           <button
//             disabled={page === 3}
//             onClick={() => setPage((p) => Math.min(p + 1, 3))}
//             className="text-gray-400 disabled:opacity-40"
//           >
//             ›
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IncompleteBookings;
import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";

const ITEMS_PER_PAGE = 5;

const IncompleteBookings = () => {
  const bookingsData = [
    { name: "Samantha W.", id: "123456789", user: "User Name", amount: "50,036" },
    { name: "Tony Soap", id: "123456790", user: "User Name", amount: "42,120" },
    { name: "Jordan Nico", id: "123456791", user: "User Name", amount: "31,880" },
    { name: "Karen Hope", id: "123456792", user: "User Name", amount: "28,450" },
    { name: "Nadila Adja", id: "123456793", user: "User Name", amount: "19,600" },
  ];

  const [page, setPage] = useState(1);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginatedData = bookingsData.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="bg-white rounded-xl p-3 shadow-sm w-full">
      {/* HEADER */}
      <h2 className="text-xs font-bold text-indigo-900 mb-3">
        Incomplete Bookings
      </h2>

      <div className="overflow-x-auto">
        <div className="min-w-[520px] space-y-2">
          {paginatedData.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-2 text-xs cursor-pointer hover:bg-gray-50"
            >
              {/* NAME */}
              <div className="flex items-center gap-2 min-w-[140px]">
                <div className="w-7 h-7 rounded-full bg-indigo-200 shrink-0" />
                <span className="font-medium text-indigo-900 whitespace-nowrap">
                  {item.name}
                </span>
              </div>

              {/* ID */}
              <span className="text-indigo-600 whitespace-nowrap min-w-[95px]">
                ID {item.id}
              </span>

              {/* USER */}
              <div className="flex items-center gap-1 min-w-[95px] text-gray-500">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="whitespace-nowrap">{item.user}</span>
              </div>

              {/* AMOUNT */}
              <span className="font-semibold text-indigo-900 whitespace-nowrap min-w-[70px] text-right">
                ${item.amount}
              </span>

              {/* ACTION */}
              <FiMoreHorizontal
                size={14}
                className="text-gray-400 shrink-0"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between mt-4 text-xs flex-wrap gap-2">
        <span className="text-gray-400">
          Showing 1–5 of 100 data
        </span>

        <div className="flex items-center gap-1">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="text-gray-400 disabled:opacity-40"
          >
            ‹
          </button>

          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`w-6 h-6 rounded-full ${
                page === n
                  ? "bg-indigo-600 text-white"
                  : "border border-indigo-300 text-indigo-600"
              }`}
            >
              {n}
            </button>
          ))}

          <button
            disabled={page === 3}
            onClick={() => setPage((p) => Math.min(p + 1, 3))}
            className="text-gray-400 disabled:opacity-40"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncompleteBookings;

