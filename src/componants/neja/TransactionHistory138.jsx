import { useState, useEffect, useRef } from "react";
import { FiSearch, FiMoreHorizontal, FiFilter, FiTrash2 } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
/* ---------------- DUMMY DATA ---------------- */
const DATA = [
  {
    id: 1,
    transactionId: "FRDLSE1201",
    date: "March 25, 2021",
    type: "Ad",
    description: "Ad Posted",
    from: "R01A0SI002",
    to: "R01A0SI002",
    amount: 20001,
    status: "Completed",
  },
  {
    id: 2,
    transactionId: "SRDLSE1202",
    date: "March 26, 2021",
    type: "Service",
    description: "Service Charge",
    from: "R01A0SI002",
    to: "GL021002",
    amount: 15000,
    status: "Processing",
  },
  {
    id: 3,
    transactionId: "FRDLSE1203",
    date: "March 27, 2026",
    type: "Ad",
    description: "Ad Posted",
    from: "R01A0SI002",
    to: "R01A0SI002",
    amount: 20001,
    status: "Failed",
  },
  {
    id: 4,
    transactionId: "FRDLSE1204",
    date: "March 28, 2024",
    type: "Service",
    description: "Service Charge",
    from: "R01A0SI002",
    to: "GL021002",
    amount: 18000,
    status: "Pending",
  },
  {
    id: 5,
    transactionId: "FRDLSE1205",
    date: "March 29, 2025",
    type: "Ad",
    description: "Ad Posted",
    from: "R01A0SI002",
    to: "R01A0SI002",
    amount: 20001,
    status: "Completed",
  },
  {
    id: 6,
    transactionId: "FRDLSE1206",
    date: "March 30, 2023",
    type: "Service",
    description: "Service Charge",
    from: "R01A0SI002",
    to: "GL021002",
    amount: 22000,
    status: "Pending",
  },
];

/* CONSTANT */
const PER_PAGE = 5;

/* COMPONENT */
const TransactionHistory138 = ({
  onView,
  onDelete,
}) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [statusOpen, setStatusOpen] = useState(false);
  const [openDateFilter, setOpenDateFilter] = useState(false);
  const parseDate = (dateStr) => new Date(dateStr);
  const [tableData, setTableData] = useState(DATA);
  
  const menuRef = useRef(null);
  const dateFilterRef = useRef(null);
 
useEffect(() => {
  const handleClickOutside = (e) => {
    if (
      openMenuId &&
      menuRef.current &&
      !menuRef.current.contains(e.target)
    ) {
      setOpenMenuId(null);
    }

    if (
      openDateFilter &&
      dateFilterRef.current &&
      !dateFilterRef.current.contains(e.target)
    ) {
      setOpenDateFilter(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () =>
    document.removeEventListener("mousedown", handleClickOutside);
}, [openMenuId, openDateFilter]);



const filtered = tableData.filter((item) => {
  const matchesSearch =
    item.transactionId.toLowerCase().includes(search.toLowerCase()) ||
    item.type.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase());

  const matchesStatus =
    statusFilter === "All" ||
    item.status.toLowerCase() === statusFilter.toLowerCase();

  const itemDate = parseDate(item.date);

  const matchesFromDate = fromDate
    ? itemDate >= new Date(fromDate)
    : true;

  const matchesToDate = toDate
    ? itemDate <= new Date(toDate)
    : true;
  
  return matchesSearch && matchesFromDate && matchesToDate && matchesStatus;
});

 const deleteSelected = () => {
  const filtered = tableData.filter(
    (item) => !selectedIds.includes(item.id)
  );
  setTableData(filtered);
  setSelectedIds([]);
};

  /* PAGINATION */
  const start = (page - 1) * PER_PAGE;
  const current = filtered.slice(start, start + PER_PAGE);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);

  return (
    <div className="bg-[#f5f6ff] p-4">

      {/* TOP BAR */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

        {/* SEARCH */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-full sm:max-w-xs shadow-sm">
          <FiSearch className="text-indigo-400 mr-2" />
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search here..."
            className="outline-none text-sm w-full"
          />
        </div>
        {/* Actions */}
          <div className="flex gap-2">
            {/* STATUS */}
          <div className="relative">
            <button
              onClick={() => setStatusOpen((prev) => !prev)}
              className="px-4 py-2 border border-indigo-400 text-indigo-600 rounded-full text-sm flex items-center gap-2 font-medium">
              {statusFilter}
              <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[7px] border-t-indigo-600"></span>
            </button>
            {statusOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white border rounded-xl shadow-lg z-50">
               {["All", "Completed", "Failed", "Processing", "Pending"].map((opt) => (
               <button
                  key={opt}
                  onClick={() => {
                  setStatusFilter(opt);
                  setStatusOpen(false);
                  setPage(1);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 ${
                statusFilter === opt
                   ? "text-indigo-600 font-medium"
                   : "text-gray-700"
                }`}
                >
               {opt}
              </button>
             ))}
           </div>
            )}
          </div>
          {/* DATE */}
              <div className="relative">
                 <button
                    onClick={() => setOpenDateFilter(!openDateFilter)}
                    className="px-4 py-2 border border-indigo-400 text-indigo-600 rounded-full text-sm flex items-center gap-2 font-medium"> 
                    <FiFilter className="text-indigo-500" />
                    {fromDate || toDate ? (
                        <span className="text-gray-700">
                           {fromDate || "Any"} → {toDate || "Any"}
                        </span>
                     ) : (
                     <span className="text-indigo-600">Filter by date</span>
                    )}
                  </button>
                  {openDateFilter && (
                  <div 
                    ref={dateFilterRef} 
                    className="fixed top-20 right-6 w-80 bg-white border rounded-xl shadow-lg p-4 z-[9999]">
                    <p className="text-sm font-semibold text-indigo-700 mb-2">
                      Select Date Range
                    </p>
                    <div className="flex flex-col gap-2">
                       <label className="text-xs text-gray-500">From</label>
                       <input
                         type="date"
                         value={fromDate}
                         onChange={(e) => setFromDate(e.target.value)}
                         className="border rounded-lg px-3 py-2 text-sm"
                       />
                        <label className="text-xs text-gray-500">To</label>
                       <input
                         type="date"
                         value={toDate}
                         onChange={(e) => setToDate(e.target.value)}
                         className="border rounded-lg px-3 py-2 text-sm"
                       />
                     </div>

                     <div className="flex justify-between items-center mt-4">
                      <button
                         onClick={() => {
                         setFromDate("");
                         setToDate("");
                         setPage(1);
                        }}
                       className="text-sm text-gray-500 hover:text-gray-700">
                       Clear
                      </button>

                      <button
                        onClick={() => {
                        setOpenDateFilter(false);
                        setPage(1);
                      }}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm">
                       Apply
                      </button>
                    </div>
                  </div>
                )}
            </div>
            <button
              onClick={() => {
                if (selectedIds.length === 0) {
                   alert("No rows selected");
                     return;
                  }
                  const ok = window.confirm(
                    `Delete ${selectedIds.length} selected transactions?`
                     );
                    if (ok) {
                      deleteSelected();
                      }
                    }}
                    className="p-2 rounded-full hover:bg-blue-100"
                    title={`Delete selected (${selectedIds.length})`}
                  >
                <FiTrash2 size={20} className="text-blue-600" />
            </button>

                          {/* <button className="px-4 py-2 border border-indigo-400 text-indigo-600 rounded-full text-sm flex items-center gap-2 font-medium">
                               Download
                               <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[7px] border-t-indigo-600"></span>
                         </button>
                
                         <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                              <FiFilter className="text-gray-500" />
                          </div> */}
                
            </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl w-full overflow-x-auto">
        <table className="w-full lg:min-w-275 text-sm">
          <thead className="text-indigo-900">
            <tr className="border-b border-gray-200">
              <th className="p-4 w-12">
                <input
                  type="checkbox"
                  checked={selectedIds.length === tableData.length && tableData.length > 0}
                  onChange={() => {
                    if (selectedIds.length === tableData.length) {
                      setSelectedIds([]);
                    } else {
                      setSelectedIds(tableData.map((item) => item.id));
                    }
                  }}
                />
              </th>
              <th className="p-4 text-left">TRANSACTION_ID</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">From</th>
              <th className="p-4 text-left">To</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {current.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 last:border-none"
              >
                <td className="p-4">
                  <input
                     type="checkbox"
                     checked={selectedIds.includes(item.id)}
                     onChange={() => {
                      setSelectedIds((prev) =>
                       prev.includes(item.id)
                       ? prev.filter((id) => id !== item.id)
                       : [...prev, item.id]
                      );
                    }}
                  />

                </td>

                <td className="p-4 font-semibold text-indigo-700">
                  {item.transactionId}
                </td>
                <td className="p-4 text-gray-500">{item.date}</td>
                <td className="p-4">{item.type}</td>
                <td className="p-4 text-gray-500">{item.description}</td>
                <td className="p-4 text-indigo-600">{item.from}</td>
                <td className="p-4 text-indigo-600">{item.to}</td>
                <td className="p-4">{item.amount}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-full text-white
                        ${item.status === "Completed" ? "bg-green-500" : ""}
                        ${item.status === "Failed" ? "bg-red-500" : ""}
                        ${item.status === "Pending" ? "bg-yellow-500" : ""}
                        ${item.status === "Processing" ? "bg-blue-500" : ""}
                       `}
                      >
                     {item.status}
                    </span>
                  </td>


                <td className="p-4 text-center relative">
                  <button
                     onClick={() =>
                     setOpenMenuId(openMenuId === item.id ? null : item.id)
                    }
                     className="p-2 rounded-full hover:bg-indigo-100">
                    <FiMoreHorizontal />
                  </button>
                {openMenuId === item.id && (
                  <div 
                    ref={menuRef}
                    className="absolute right-6 top-10 w-36 bg-white border rounded-lg shadow-lg z-50">
                      <button
                          onClick={()=>onView(item)}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-indigo-50">View
                      </button>


                      <button
                          onClick={()=>onDelete(item.id)}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Delete
                      </button>
                  </div>
                )}
             </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* FOOTER */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 text-sm">
          <p className="text-gray-500">
            Showing {start + 1}–
            {Math.min(start + PER_PAGE, filtered.length)} from{" "}
            {filtered.length}
          </p>

          <div className="flex items-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="w-8 h-8 flex items-center justify-center"
            >
              <div
                className="w-0 h-0 
                border-t-[6px] border-b-[6px] border-r-10
                border-t-transparent border-b-transparent
                border-r-gray-400"
              />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-8 h-8 rounded-full border ${
                  page === i + 1
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="w-8 h-8 flex items-center justify-center"
            >
              <div
                className="w-0 h-0 
                border-t-[6px] border-b-[6px] border-l-10
                border-t-transparent border-b-transparent
                border-l-gray-400"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory138;
