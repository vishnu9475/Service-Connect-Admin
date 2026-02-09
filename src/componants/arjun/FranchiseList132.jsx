import { useState, useEffect, useRef } from "react";

import {
  FiSearch,
  FiPhone,
  FiMail,
  FiMoreHorizontal,
  // FiFilter,
} from "react-icons/fi";

/* DUMMY DATA */
const DATA = [
  {
    id: 1,
    name: "abc",
    avatar: null,
    fid: "#123456789",
    revenue: "10,00,500",
    branches: 2,
    providers: 2,
    location: "Jakarta",
    valid: "March 25, 2021",
    status: "Inactive",
    createdAt: "2021-01-15",
    updatedAt: "2025-05-10",
  },
  {
    id: 2,
    name: "Samanta W",
    avatar: null,
    fid: "#123456789",
    revenue: "10,00,500",
    branches: 2,
    providers: 2,
    location: "Jakarta",
    valid: "March 25, 2021",
    status: "active",
    createdAt: "2022-01-15",
    updatedAt: "2025-05-10",
  },
  {
    id: 3,
    name: "Samanta Wil",
    avatar: null,
    fid: "#123456789",
    revenue: "10,00,500",
    branches: 2,
    providers: 2,
    location: "Jakarta",
    valid: "March 25, 2021",
    status: "Inactive",
    createdAt: "2023-01-15",
    updatedAt: "2026-05-10",
  },
  {
    id: 4,
    name: "123",
    avatar: null,
    fid: "#123456789",
    revenue: "10,00,500",
    branches: 2,
    providers: 2,
    location: "india",
    valid: "March 25, 2021",
    status: "Inactive",
    createdAt: "2024-01-15",
    updatedAt: "2021-05-10",
  },
  {
    id: 5,
    name: "Samanta Willi",
    avatar: null,
    fid: "#123456789",
    revenue: "10,00,500",
    branches: 2,
    providers: 2,
    location: "Jakarta",
    valid: "March 25, 2021",
    status: "Inactive",
    createdAt: "2025-01-15",
    updatedAt: "2024-05-10",
  },
  {
    id: 6,
    name: "Samanta Willia",
    avatar: null,
    fid: "#123456789",
    revenue: "10,00,500",
    branches: 2,
    providers: 2,
    location: "india",
    valid: "March 25, 2021",
    status: "Inactive",
    createdAt: "2026-01-15",
    updatedAt: "2023-05-10",
  },
];


/* CONSTANTS */
const PER_PAGE = 5;

/* COMPONENT */
const FranchiseList132 = ({
  onView,
  onEdit,
  onAdd,
  onDelete,
  onAddFranchiseType,
}) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [statusOpen, setStatusOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Newest");
  const [statusFilter, setStatusFilter] = useState("All");
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

const filtered = DATA.filter((item) => {
  const matchesSearch =
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.location.toLowerCase().includes(search.toLowerCase());

  const matchesStatus =
    statusFilter === "All" ||
    item.status.toLowerCase() === statusFilter.toLowerCase();

  return matchesSearch && matchesStatus;
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

  
const start = (page - 1) * PER_PAGE;
const current = sorted.slice(start, start + PER_PAGE);
const totalPages = Math.ceil(sorted.length / PER_PAGE);
  
 
  return (
    <div className="bg-[#f5f6ff]">

      {/* TOP BAR */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

        {/* Search */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-full sm:max-w-xs shadow-sm">
          <FiSearch className="text-indigo-400 mr-2 shrink-0" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here..."
            className="outline-none text-sm w-full"
          />
        </div>
        
    
        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 border border-indigo-400 text-indigo-600 rounded-full text-sm flex items-center gap-2 font-medium">
               Franchise Type
               <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[7px] border-t-indigo-600"></span>
         </button>

          <button 
            onClick={onAddFranchiseType} 
            className="px-5 py-2 bg-indigo-600 text-white rounded-full text-sm">
            Add/Edit Franchisee Type
          </button>
        {/* NEWEST */}
          <div className="relative">
              <button
                 onClick={() => setSortOpen(!sortOpen)}
                 className="px-4 py-2 border border-indigo-400 text-indigo-600 rounded-full text-sm flex items-center gap-2 font-medium">
                {sortBy}
                <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[7px] border-t-indigo-600"></span>
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
                   sortBy === opt ? "text-indigo-600 font-medium" : "text-gray-700"
                }`}>
                {opt}
              </button>
             ))}
            </div>
            )}
          </div>


          <button 
             onClick={onAdd}
             className="px-5 py-2 bg-indigo-600 text-white rounded-full text-sm">
            + New franchisee
          </button>
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
               {["All", "Active", "Inactive"].map((opt) => (
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
        <table className="min-w-full w-full text-sm">
          <thead className="text-indigo-900">
            <tr className="border-b border-gray-200">
              <th className="p-4">
                <input
                    type="checkbox"
                    checked={
                    current.length > 0 &&
                    current.every((item) => selectedIds.includes(item.id))
                   }
                   onChange={(e) => {
                      if (e.target.checked) {
                        const ids = current.map((item) => item.id);
                        setSelectedIds(ids);
                      } else {
                        setSelectedIds([]);
                      }
                   }}
                />
              </th>
              <th className="p-4 text-left">Franchisee Name</th>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Revenue</th>
              <th className="p-4 text-left">Branches</th>
              <th className="p-4 text-left">Service Providers</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Contact</th>
              <th className="p-4 text-left">Valid Up to</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
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

                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-indigo-200" />
                    <span className="font-medium text-indigo-700 whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                </td>

                <td className="p-4 text-indigo-600">{item.fid}</td>
                <td className="p-4">{item.revenue}</td>
                <td className="p-4 text-center">{item.branches}</td>
                <td className="p-4 text-center">{item.providers}</td>
                <td className="p-4">{item.location}</td>

                <td className="p-4 flex gap-2">
                  <span className="p-2 rounded-full bg-indigo-100 text-indigo-600">
                    <FiPhone size={14} />
                  </span>
                  <span className="p-2 rounded-full bg-indigo-100 text-indigo-600">
                    <FiMail size={14} />
                  </span>
                </td>

                <td className="p-4 text-gray-500">{item.valid}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      item.status.toLowerCase() === "active"
                         ? "bg-green-600 text-green-100"
                         : "bg-orange-600 text-orange-100"
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

export default FranchiseList132;
