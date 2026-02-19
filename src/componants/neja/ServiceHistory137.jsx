import { useState,useEffect, useRef } from "react";
import { FiSearch, FiMoreHorizontal,FiFilter,FiTrash2 } from "react-icons/fi";

/* DUMMY DATA */
const DATA = [
  {
    id: 1,
    jobId: "FRDLSE1201",
    date: "March 25, 2021",
    franchisee: "Recto5",
    agent: "Jackop R",
    providerId: "R01A0SI002",
    customerId: "R01A0SI002",
    customerType: "Service Provider",
    jobType: "One Time Lead",
    status: "Active",
    createdAt: "2024-01-15",
    updatedAt: "2026-05-10",
  },
  {
    id: 2,
    jobId: "FRDLSE1201",
    date: "March 25, 2021",
    franchisee: "Recto4",
    agent: "Jackop R",
    providerId: "R01A0SI002",
    customerId: "GL021002",
    customerType: "Customer",
    jobType: "Daily Work",
    status: "Completed",
    createdAt: "2025-01-15",
    updatedAt: "2026-05-10",
  },
  {
    id: 3,
    jobId: "FRDLSE1201",
    date: "March 25, 2021",
    franchisee: "Recto3",
    agent: "Jackop R",
    providerId: "R01A0SI002",
    customerId: "R01A0SI002",
    customerType: "Service Provider",
    jobType: "One Time Lead",
    status: "Active",
    createdAt: "2023-01-15",
    updatedAt: "2022-05-10",
  },
  {
    id: 4,
    jobId: "SRDLSE1201",
    date: "March 25, 2021",
    franchisee: "Recto2",
    agent: "abc",
    providerId: "R01A0SI002",
    customerId: "R01A0SI002",
    customerType: "Service Provider",
    jobType: "One Time Lead",
    status: "Active",
    createdAt: "2021-01-15",
    updatedAt: "2020-05-10",
  },
  {
    id: 5,
    jobId: "FRDLSE1201",
    date: "March 25, 2021",
    franchisee: "Recto C",
    agent: "Jackop R",
    providerId: "R01A0SI002",
    customerId: "R01A0SI002",
    customerType: "Service Provider",
    jobType: "One Time Lead",
    status: "Active",
    createdAt: "2024-01-15",
    updatedAt: "2023-05-10",
  },
  {
    id: 6,
    jobId: "FRDLSE1201",
    date: "March 25, 2021",
    franchisee: "Recto1",
    agent: "Jackop R",
    providerId: "R01A0SI002",
    customerId: "R01A0SI002",
    customerType: "Service Provider",
    jobType: "One Time Lead",
    status: "Active",
    createdAt: "2025-01-15",
    updatedAt: "2022-05-10",
  },
];

/* CONSTANT */
const PER_PAGE = 5;

/* COMPONENT */
const ServiceHistory137 = ({
  onView,
  onEdit,
  onDelete, 
}) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [statusOpen, setStatusOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Newest");
  const [statusFilter, setStatusFilter] = useState("All");
  const [serviceTypeOpen, setServiceTypeOpen] = useState(false);
  const [serviceTypeFilter, setServiceTypeFilter] = useState("Service Type");
  const [tableData, setTableData] = useState(DATA);
  const menuRef = useRef(null);
  useEffect(() => {
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpenMenuId(null);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);
  /* SEARCH */
  const filtered = tableData.filter((item) => {
    const matchesSearch =
      item.jobId.toLowerCase().includes(search.toLowerCase()) ||
      item.franchisee.toLowerCase().includes(search.toLowerCase()) ||
      item.agent.toLowerCase().includes(search.toLowerCase());

  const matchesStatus =
    statusFilter === "All" ||
    item.status.toLowerCase() === statusFilter.toLowerCase();

  const matchesServiceType =
    serviceTypeFilter === "Service Type" ||
    item.jobType.toLowerCase() === serviceTypeFilter.toLowerCase();

  return matchesSearch && matchesStatus && matchesServiceType;
});
  
  const sorted = [...filtered].sort((a, b) => {
  if (sortBy === "Newest") {
    return new Date(b.createdAt) - new Date(a.createdAt);
  }

  if (sortBy === "Oldest") {
    return new Date(a.createdAt) - new Date(b.createdAt);
  }

  if (sortBy === "Last Updated") {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  }

  return 0;
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
const current = sorted.slice(start, start + PER_PAGE);
const totalPages = Math.ceil(sorted.length / PER_PAGE);

  return (
    <div className="bg-[#f5f6ff] p-4">

      {/* TOP BAR */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

        {/* SEARCH */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-full sm:max-w-xs shadow-sm">
          <FiSearch className="text-indigo-400 mr-2" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here..."
            className="outline-none text-sm w-full"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          {/* SERVICE TYPE */}
          <div className="relative">
              <button
                onClick={() => setServiceTypeOpen((prev) => !prev)}
                className="px-4 py-2 border border-[#4D44B5] text-[#4D44B5] rounded-full text-sm flex items-center gap-2 font-medium">
                {serviceTypeFilter}
                <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[7px] border-[#4D44B5]"></span>
              </button>

              {serviceTypeOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-xl shadow-lg z-50">
            {["Service Type", "One Time Lead", "Daily Work"].map((opt) => (
             <button
               key={opt}
               onClick={() => {
               setServiceTypeFilter(opt);
               setServiceTypeOpen(false);
               setPage(1);
               }}
               className={`w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 ${
               serviceTypeFilter === opt
                 ? "text-[#4D44B5] font-medium"
                 : "text-gray-700"
               }`}
              >
              {opt}
             </button>
            ))}
          </div>
         )}
        </div>

        
                {/* NEWEST */}
          <div className="relative">
              <button
                 onClick={() => setSortOpen(!sortOpen)}
                 className="px-4 py-2 border border-[#4D44B5] text-[#4D44B5] rounded-full text-sm flex items-center gap-2 font-medium">
                {sortBy}
                <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[7px] border-[#4D44B5]"></span>
              </button>

            {sortOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow-lg z-50">
                {["Newest", "Oldest", "Last Updated"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                    setSortBy(opt);
                    setSortOpen(false);
                    setPage(1);
                   }}
                   className={`w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 ${
                   sortBy === opt ? "text-[#4D44B5] font-medium" : "text-gray-700"
                }`}>
                {opt}
              </button>
             ))}
            </div>
            )}
          </div>
       

       {/* STATUS */}
          <div className="relative">
            <button
              onClick={() => setStatusOpen((prev) => !prev)}
              className="px-4 py-2 border border-[#4D44B5] text-[#4D44B5] rounded-full text-sm flex items-center gap-2 font-medium">
              {statusFilter}
              <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[7px] border-[#4D44B5]"></span>
            </button>
            {statusOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white border rounded-xl shadow-lg z-50">
               {["All", "Completed", "Active"].map((opt) => (
               <button
                  key={opt}
                  onClick={() => {
                  setStatusFilter(opt);
                  setStatusOpen(false);
                  setPage(1);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 ${
                statusFilter === opt
                   ? "text-[#4D44B5] font-medium"
                   : "text-gray-700"
                }`}
                >
               {opt}
              </button>
             ))}
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
                    disabled={selectedIds.length === 0}
                    className={`p-2 rounded-full transition ${
                        selectedIds.length === 0
                           ? "bg-gray-100 cursor-not-allowed"
                           : "hover:bg-blue-100 cursor-pointer"
                        }`}
                     title={`Delete selected (${selectedIds.length})`}
                    >
                   <FiTrash2
                   size={20}
                   className={`${
                   selectedIds.length === 0
                      ? "text-gray-400"
                      : "text-[#4D44B5]"
                    }`}
                   />
            </button> 

           </div>  

           
                {/* <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 border border-indigo-400 text-indigo-600 rounded-full text-sm flex items-center gap-2 font-medium">
                       Download
                       <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[7px] border-t-indigo-600"></span>
                 </button>
        
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <FiFilter className="text-gray-500" />
                  </div>
        
                </div> */}
                
      </div>
      
      {/* TABLE */}
      <div className="bg-white rounded-xl w-full overflow-x-auto">
        <div className="min-w-full w-full text-sm">
        <table className="w-full lg:min-w-275 text-sm">
          <thead className="text-indigo-900">
            <tr className="border-b border-gray-200">
              <th className="p-4">
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
              <th className="p-4 text-left">JOB_ID</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Franchisee</th>
              <th className="p-4 text-left">Agent</th>
              <th className="p-4 text-left">Service Provider Id</th>
              <th className="p-4 text-left">Customer Id</th>
              <th className="p-4 text-left">Customer Type</th>
              <th className="p-4 text-left">Job Type</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {current.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 last:border-none">
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
                  {item.jobId}
                </td>
                <td className="p-4 text-gray-500">{item.date}</td>
                <td className="p-4">{item.franchisee}</td>
                <td className="p-4">{item.agent}</td>
                <td className="p-4 text-indigo-600">{item.providerId}</td>
                <td className="p-4 text-indigo-600">{item.customerId}</td>
                <td className="p-4">{item.customerType}</td>
                <td className="p-4">{item.jobType}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full text-white ${
                      item.status === "Completed"
                        ? "bg-green-500"
                        : "bg-orange-500"
                    }`}
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
                          onClick={()=>onEdit(item)}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-indigo-50">Edit
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
        </div>

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

          <div className="flex items-center gap-2">
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
    </div>
  );
};

export default ServiceHistory137;
