import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  PhoneIcon,
  EnvelopeIcon,
  EllipsisHorizontalIcon,
  PlusIcon,
  TrashIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const initialUsers = [
  {
    id: 1,
    name: "Samanta William",
    code: "#123456789",
    date: "March 25, 2021",
    verifiedBy: "-",
    location: "Jakarta",
    status: "Not Verified",
    statusColor: "bg-orange-400",
  },
  {
    id: 2,
    name: "Tony Soap",
    code: "#123456789",
    date: "March 25, 2021",
    verifiedBy: "-",
    location: "Jakarta",
    status: "Not Verified",
    statusColor: "bg-orange-400",
  },
  {
    id: 3,
    name: "Karen Hope",
    code: "#123456789",
    date: "March 25, 2021",
    verifiedBy: "Jakarta",
    location: "Jakarta",
    status: "Active",
    statusColor: "bg-[#64FC3E]",
  },
  {
    id: 4,
    name: "Jordan Nico",
    code: "#123456789",
    date: "March 25, 2021",
    verifiedBy: "Jakarta",
    location: "Jakarta",
    status: "Active",
    statusColor: "bg-[#64FC3E]",
  },
  {
    id: 5,
    name: "Nadila Adja",
    code: "#123456789",
    date: "March 25, 2021",
    verifiedBy: "Jakarta",
    location: "Jakarta",
    status: "Notactive",
    statusColor: "bg-gray-400",
  },
  {
    id: 6,
    name: "Johnny Ahmad",
    code: "#123456789",
    date: "March 25, 2021",
    verifiedBy: "Jakarta",
    location: "Jakarta",
    status: "Active",
    statusColor: "bg-[#64FC3E]",
  },
];

function ServiceProviderList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("")
  const [filterOpen, setFilterOpen] = useState(false);

  const pageSize = 5;

  const processedUsers = [...users]
    .filter((u) => {
      const match = u.name.toLowerCase().includes(search.toLowerCase());
      if (["Active", "Notactive", "Verified", "Not Verified"].includes(filter)) {
        if (filter === "Verified") return u.status !== "Not Verified";
        return u.status === filter;
      }
      return match;
    })
    .sort((a, b) => {
      if (!sortOrder) return 0;
      if (sortOrder === "Newest") return new Date(b.date) - new Date(a.date);
      if (sortOrder === "Oldest") return new Date(a.date) - new Date(b.date);
      if (sortOrder === "LastUpdated")
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      return 0;
    });

  const paginatedUsers = processedUsers.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const toggleRow = (id) =>
    setSelected((p) =>
      p.includes(id) ? p.filter((x) => x !== id) : [...p, id]
    );

  const toggleAll = () =>
    setSelected(
      selected.length === processedUsers.length
        ? []
        : processedUsers.map((u) => u.id)
    );

  const handleBulkDelete = () => {
    if (selected.length === 0) return alert("Please select at least one user");
    if (!window.confirm(`Delete ${selected.length} selected user(s)?`)) return;
    setUsers((prev) => prev.filter((u) => !selected.includes(u.id)));
    setSelected([]);
  };

  const handleDelete = (user) => {
    if (!window.confirm(`Delete ${user.name}?`)) return;
    setUsers((prev) => prev.filter((u) => u.id !== user.id));
    setSelected((prev) => prev.filter((id) => id !== user.id));
    setOpenMenuId(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        {/* SEARCH */}
        <div className="relative w-full md:w-64">
          <MagnifyingGlassIcon className="w-5 h-5 text-indigo-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here..."
            className="w-full pl-12 pr-4 py-2 rounded-full bg-[#F3F4FF] outline-none text-sm"
          />
        </div>

        {/* CONTROLS */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          {/* FILTER DROPDOWN */}
<div className="relative">
  <button
    onClick={() => setFilterOpen((prev) => !prev)}
    className="flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500 text-indigo-600 text-sm bg-white"
  >
    {filter}
    <ChevronDownIcon className="w-4 h-4" />
  </button>

  {filterOpen && (
    <div className="absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow-lg z-50">
      {["All", "Active", "Notactive", "Verified", "Not Verified"].map((opt) => (
        <button
          key={opt}
          onClick={() => {
            setFilter(opt);
            setFilterOpen(false);
            setPage(1);
          }}
          className={`w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 ${
            filter === opt
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

          {/* FILTER */}
        <div className="relative">
  {/* BUTTON */}
  <button
    onClick={() => setSortOpen((prev) => !prev)}
    className="flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500 text-indigo-600 text-sm bg-white"
  >
    {sortBy || ""}
    <ChevronDownIcon className="w-4 h-4" />
  </button>

  {/* DROPDOWN MENU */}
  {sortOpen && (
    <div className="absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow-lg z-50">
      {["Newest", "Oldest", "Last Updated"].map((opt) => (
        <button
          key={opt}
          onClick={() => {
            setSortBy(opt);
            setSortOrder(opt); // connects to your existing sorting logic
            setSortOpen(false);
            setPage(1);
          }}
          className={`w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 ${
            sortBy === opt
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

          {/* NEW USER */}
          <button
            onClick={() => navigate("/Addnewuser")}
            className="w-[140px] flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-[#4D44B5] text-white text-sm whitespace-nowrap"
          >
            <PlusIcon className="w-4 h-4" />
            New User
          </button>

          {/* DELETE */}
          <button
            onClick={handleBulkDelete}
            disabled={selected.length === 0}
            className={`w-10 h-10 flex items-center justify-center transition-all ${
              selected.length > 0
                ? "text-[#4D44B5] hover:scale-110 active:scale-95"
                : "text-gray-300 cursor-not-allowed"
            }`}
            title="Delete selected"
          >
            <TrashIcon className="w-5 h-5" />
          </button>

        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px] table-fixed whitespace-nowrap">
          <thead>
            <tr className="text-sm text-indigo-800 border-b border-gray-100">
              <th className="w-[48px] py-4 px-3 text-center">
                <input
                  type="checkbox"
                  checked={
                    selected.length === processedUsers.length &&
                    processedUsers.length > 0
                  }
                  onChange={toggleAll}
                />
              </th>
              <th className="py-4 px-3 text-left">Name</th>
              <th className="py-4 px-3 text-left">ID</th>
              <th className="py-4 px-3 text-left">Date</th>
              <th className="py-4 px-3 text-left">Verified by</th>
              <th className="py-4 px-3 text-left">Location</th>
              <th className="py-4 px-3 text-left">Contact</th>
              <th className="py-4 px-3 text-left">Status</th>
              <th className="py-4 px-3 text-center w-[90px]">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-700">
            {paginatedUsers.map((user) => (
              <tr key={user.id} className="border-b border-gray-100">
                <td className="w-[48px] py-4 px-3 text-center">
                  <input
                    type="checkbox"
                    checked={selected.includes(user.id)}
                    onChange={() => toggleRow(user.id)}
                  />
                </td>
                <td className="py-4 px-3 font-medium text-indigo-900">
                  {user.name}
                </td>
                <td className="py-4 px-3 text-indigo-600">{user.code}</td>
                <td className="py-4 px-3 text-gray-400">{user.date}</td>
                <td className="py-4 px-3">{user.verifiedBy}</td>
                <td className="py-4 px-3 text-indigo-700">{user.location}</td>

                <td className="py-4 px-3">
  <div className="flex gap-2">
    {/* CALL */}
    <button
      onClick={() => alert(`📞 Calling ${user.name}`)}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-100 hover:bg-indigo-200 transition"
    >
      <PhoneIcon className="w-4 h-4 text-indigo-600" />
    </button>

    {/* EMAIL */}
    <button
      onClick={() => alert(`✉️ Emailing ${user.name}`)}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-100 hover:bg-indigo-200 transition"
    >
      <EnvelopeIcon className="w-4 h-4 text-indigo-600" />
    </button>
  </div>
</td>
                <td className="py-4 px-3">
                  <span
                    className={`inline-flex w-[110px] justify-center py-1 rounded-full text-white text-xs ${user.statusColor}`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-3 py-4 text-center relative">
                  <EllipsisHorizontalIcon
                    onClick={() =>
                      setOpenMenuId(openMenuId === user.id ? null : user.id)
                    }
                    className="w-5 h-5 text-gray-400 cursor-pointer mx-auto"
                  />
                  {openMenuId === user.id && (
                    <div className="absolute right-6 top-10 w-32 bg-white border rounded shadow text-xs z-20">
                      <button
                        onClick={() =>
                          navigate("/DServiceProvider", { state: user })
                        }
                        className="block px-4 py-2 hover:bg-indigo-50 w-full text-left"
                      >
                        View
                      </button>
                      <button
                        onClick={() =>
                          navigate("/ServiceProviderDetails", {
                            state: user,
                          })
                        }
                        className="block px-4 py-2 hover:bg-indigo-50 w-full text-left"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user)}
                        className="block px-4 py-2 hover:bg-red-50 text-red-500 w-full text-left"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
        <p>
          Showing {(page - 1) * 5 + 1} –{" "}
          {Math.min(page * 5, users.length)} from {users.length}
        </p>
        <div className="flex items-center gap-1">
          <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
            ‹
          </button>
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`w-6 h-6 rounded-full text-xs ${
                page === n
                  ? "bg-[#4D44B5] text-white"
                  : "border border-gray-300 text-gray-400"
              }`}
            >
              {n}
            </button>
          ))}
          <button disabled={page === 3} onClick={() => setPage((p) => p + 1)}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceProviderList;