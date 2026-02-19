import React, { useState, useEffect, useRef } from "react";
import { LuTrash2 } from "react-icons/lu";
import {useNavigate} from 'react-router-dom';
import { 
  MagnifyingGlassIcon,
  ChevronDownIcon,
  PhoneIcon,
  EnvelopeIcon,
  EllipsisHorizontalIcon,
  PlusIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const USERS = [
  { name: "Samanta William", id: "#123456789", services: 2, jobs: 2, location: "Jakarta", status: "Not Active" },
  { name: "Tony Soap", id: "#223456789", services: 2, jobs: 8, location: "Jakarta", status: "Active" },
  { name: "Karen Hope", id: "#323456789", services: 2, jobs: 10, location: "Jakarta", status: "Active" },
  { name: "Jordan Nico", id: "#423456789", services: 2, jobs: 0, location: "Jakarta", status: "Active" },
  { name: "Nadilla Adja", id: "#523456789", services: 2, jobs: 1, location: "Jakarta", status: "Not Active" },
  { name: "Johnny Ahmad", id: "#623456789", services: 2, jobs: 3, location: "Jakarta", status: "Active" },
  { name: "Modi", id: "#723456789", services: 2, jobs: 3, location: "Jakarta", status: "Not Verified" },
  { name: "Rahul", id: "#823456789", services: 2, jobs: 3, location: "Jakarta", status: "Not Verified" },
  { name: "Rohan", id: "#923456789", services: 2, jobs: 3, location: "Jakarta", status: "Not Verified" },
  { name: "Jaya", id: "#103456789", services: 2, jobs: 3, location: "Jakarta", status: "Active" }
];

const FILTERS = [
  "All",
  "Active",
  "Not Active",
  "Not Verified",
  "Providers High",
  "Providers Low",
  "Jobs High",
  "Jobs Low"
];

function ServiceProviderList() {
  const [users, setUsers] = useState(USERS);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState([]);
  const [sort, setSort] = useState("Newest");
  const [filter, setFilter] = useState("All");
  const [openFilter, setOpenFilter] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const itemsPerPage = 5;
  const menuRef = useRef(null);
  const filterRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      // close action menu
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }

      // close filter dropdown
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setOpenFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  // ✅ close menu on page change (logic only)
  useEffect(() => {
    setOpenMenu(false);
  }, [page]);

  /* PROCESS USERS */
  const processedUsers = [...users]
    .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      switch (filter) {
        case "Active":
          return a.status === "Active" ? -1 : 1;
        case "Not Active":
          return a.status === "Not Active" ? -1 : 1;
        case "Not Verified":
          return a.status === "Not Verified" ? -1 : 1;
        case "Providers High":
          return b.services - a.services;
        case "Providers Low":
          return a.services - b.services;
        case "Jobs High":
          return b.jobs - a.jobs;
        case "Jobs Low":
          return a.jobs - b.jobs;
        default:
          return 0;
      }
    });

  /* PAGINATION */
  const totalPages = Math.ceil(processedUsers.length / itemsPerPage);
  const paginated = processedUsers.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  /* CHECKBOX */
  const toggleAll = (e) => {
    setSelected(e.target.checked ? paginated.map((u) => u.id) : []);
  };

  const toggleOne = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  /* SORT (kept as you had it) */
  const handleSort = () => {
    setSort(sort === "Newest" ? "Oldest" : "Newest");
    setUsers([...users].reverse());
  };

  /* DELETE — FIXED (logic only) */
  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
    setOpenMenu(null);
  };

    const handleBulkDelete = () => {
      if (selected.length === 0) return;

      // optional confirmation
      const confirmDelete = window.confirm(
        `Delete ${selected.length} selected dealer(s)?`
      );
      if (!confirmDelete) return;

      setUsers((prev) => prev.filter((u) => !selected.includes(u.id)));
      setSelected([]); 
    };


  const handleAddNewServiceProvider = () => {
    navigate('/addserviceprovider');
  };

  const handleView =() => {
    navigate('/serviceprovider');
  };

  const handleEdit =() => {
    navigate('/serviceproviderdetails');
  };

  return (
    <div className="bg-[#F4F6FF] min-h-screen p-4 md:p-6 overflow-x-hidden">

      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-[#4D44B5] text-white px-4 py-1.5 text-xs xl:px-5 xl:py-2 xl:text-sm rounded-full">
            Franchise Name
            <ChevronDownIcon className="w-4 h-4" />
          </button>
          <div className="relative flex items-center">
            <MagnifyingGlassIcon className="w-4 h-4 text-indigo-500 absolute left-4" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search here..."
              className="
                w-64
                pl-10 pr-4
                h-10
                rounded-full
                bg-white
                text-sm
                outline-none
              "
            />
          </div>
        </div>

        {/* Filter*/}
        <div ref={filterRef} className="flex flex-wrap xl:flex-nowrap gap-3 relative">
          <button
            onClick={() => setOpenFilter(!openFilter)}
            className="flex items-center gap-2
              bg-[#4D44B5] text-white
              px-3 py-1.5 text-xs
              xl:px-5 xl:py-2 xl:text-sm
              rounded-full"
          >
            {filter}
            <ChevronDownIcon className="w-4 h-4" />
          </button>

          {openFilter && (
            <div className="absolute top-12 left-0 bg-white border rounded-lg shadow text-sm z-20">
              {FILTERS.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setFilter(item);
                    setPage(1);
                    setOpenFilter(false);
                  }}
                  className="block px-4 py-2 hover:bg-indigo-50 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          )}

          {/* SORT & ADD NEW */}
          <button
            onClick={handleSort}
            className="flex items-center gap-2
              px-3 py-1.5 text-xs
              xl:px-4 xl:py-2 xl:text-sm
              rounded-full border border-[#4D44B5]
              text-[#4D44B5]"
                    >
            {sort}
            <ChevronDownIcon className="w-4 h-4" />
          </button>

          <button
            onClick={handleAddNewServiceProvider}
            className="    flex items-center gap-2
              px-3 py-1.5 text-xs
              xl:px-4 xl:py-2 xl:text-sm
              rounded-full bg-[#4D44B5] text-white
              whitespace-nowrap"
          >
            <PlusIcon className="w-4 h-4" />
            New Service Provider
          </button>

          <button
              onClick={handleBulkDelete}
              disabled={selected.length === 0}
              className={`p-2 transition-all flex items-center justify-center ${
                    selected.length > 0 
                     ? "text-[#4D44B5] hover:scale-110 active:scale-95" 
                    : "text-gray-300 cursor-not-allowed"
                     }`}
            >
              <LuTrash2
                size={24} strokeWidth={2.5}
              />
            </button>

        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] lg:min-w-[1100px] text-sm table-fixed">
            <thead className="border-b border-b-gray-200 text-indigo-800">
              <tr>
                <th className="w-[50px] px-3 py-4 text-center">
                  <input type="checkbox" 
                  checked={
                      paginated.length > 0 &&
                      paginated.every((d) => selected.includes(d.id))
                    }
                  onChange={toggleAll} />
                </th>
                <th className="w-[260px] px-3 py-4 text-left">Name</th>
                <th className="w-[140px] px-3 py-4 text-center">ID</th>
                <th className="w-[120px] px-3 py-4 text-center">Services</th>
                <th className="w-[120px] px-3 py-4 text-center">Jobs</th>
                <th className="w-[120px] px-3 py-4 text-left">Location</th>
                <th className="w-[160px] px-3 py-4 text-center">Contact</th>
                <th className="w-[140px] px-3 py-4 text-center">Status</th>
                <th className="w-[80px] px-3 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {paginated.map((user, i) => (
                <tr key={user.id} className="border-b border-b-gray-200 last:border-none">
                  <td className="px-3 py-4 text-center">
                    <input
                      type="checkbox"
                      checked={selected.includes(user.id)}
                      onChange={() => toggleOne(user.id)}
                    />
                  </td>

                  <td className="px-3 py-4 ">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-200 rounded-full" />
                      <span className="font-medium text-indigo-900">
                      {user.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-3 py-4 text-center text-[#4D44B5]">{user.id}</td>
                  <td className="px-3 py-4 text-center text-[#4D44B5]">{user.services}</td>
                  <td className="px-3 py-4 text-center text-[#4D44B5]">{user.jobs}</td>
                  <td className="px-3 py-4 text-left text-[#4D44B5]">{user.location}</td>

                  <td className="px-3 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="p-2 bg-indigo-100 rounded-full">
                        <PhoneIcon className="w-4 h-4 text-[#4D44B5]" />
                      </button>
                      <button className="p-2 bg-indigo-100 rounded-full">
                        <EnvelopeIcon className="w-4 h-4 text-[#4D44B5]" />
                      </button>
                    </div>
                  </td>

                  <td className="px-3 py-4 text-center">
                    <span className={`inline-flex w-[90px] h-6 items-center justify-center rounded-full text-xs font-medium text-white ${
                      user.status === "Active"
                        ? "bg-green-400"
                        : user.status === "Not Verified"
                        ? "bg-gray-400"
                        : "bg-orange-400"
                    }`}>
                      {user.status}
                    </span>
                  </td>

                  <td className="px-3 py-4 text-center relative">
                    <EllipsisHorizontalIcon
                      className="w-5 h-5 mx-auto cursor-pointer"
                      onClick={() => setOpenMenu(openMenu === i ? null : i)}
                    />

                    {openMenu === i && (
                      <div ref={menuRef} className="absolute right-6 top-8 bg-white border rounded shadow text-xs z-10">
                        <button onClick={handleView} className="block px-4 py-2 hover:bg-indigo-50 w-full">View</button>
                        <button onClick={handleEdit} className="block px-4 py-2 hover:bg-indigo-50 w-full">Edit</button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="block px-4 py-2 hover:bg-red-50 text-red-500 w-full"
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
          {/* ✅ fixed variable */}
          <span>Showing {paginated.length} of {processedUsers.length}</span>

          <div className="flex items-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="w-9 h-9 rounded-full border grid place-items-center"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-9 h-9 rounded-full ${
                  page === i + 1 ? "bg-[#4D44B5] text-white" : "border"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="w-9 h-9 rounded-full border grid place-items-center"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProviderList;
