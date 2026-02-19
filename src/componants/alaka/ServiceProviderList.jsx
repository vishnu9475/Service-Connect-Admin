import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  PhoneIcon,
  EnvelopeIcon,
  EllipsisHorizontalIcon,
  PlusIcon,
  TrashIcon,
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
      const A = new Date(a.date);
      const B = new Date(b.date);
      return sortOrder === "Newest" ? B - A : A - B;
    });

  const toggleRow = (id) =>
    setSelected((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const toggleAll = () =>
    setSelected(
      selected.length === processedUsers.length
        ? []
        : processedUsers.map((u) => u.id)
    );

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div className="relative w-full md:w-64">
          <MagnifyingGlassIcon className="w-5 h-5 text-indigo-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here..."
            className="w-full pl-12 pr-4 py-2 rounded-full bg-[#F3F4FF] outline-none text-sm"
          />
        </div>

        {/* 🔒 FIXED-WIDTH CONTROLS (NO JUMP AT 1024px) */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-[140px] px-4 py-2 rounded-full border border-indigo-500 text-indigo-600 text-sm bg-white outline-none"
          >
            <option>All</option>
            <option>Active</option>
            <option>Notactive</option>
            <option>Verified</option>
            <option>Not Verified</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-[140px] px-4 py-2 rounded-full border border-indigo-500 text-indigo-600 text-sm bg-white outline-none"
          >
            <option value="">Sort by</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>

          <button
            onClick={() => navigate("/Addnewuser")}
            className="w-[140px] flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-[#4D44B5] text-white text-sm whitespace-nowrap"
          >
            <PlusIcon className="w-4 h-4" />
            New User
          </button>

          {/* <button
            onClick={handleBulkDelete}
            className="w-10 h-10 flex items-center justify-center text-blue-600 hover:text-blue-800"
            title="Delete selected"
          >
            <TrashIcon className="w-5 h-5" />
          </button> */}
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
            {processedUsers.map((user) => (
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
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-100">
                      <PhoneIcon className="w-4 h-4 text-indigo-600" />
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-100">
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
          Showing {processedUsers.length} of {users.length} data
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
