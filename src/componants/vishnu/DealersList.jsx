
import React, { useState, useEffect, useRef } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
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

const DEALERS = [
  { id: 1, name: "Samanta William", code: "#123456789", providers: 2, location: "Jakarta", status: "Not Active" },
  { id: 2, name: "Tony Soap", code: "#123456789", providers: 8, location: "Jakarta", status: "Active" },
  { id: 3, name: "Karen Hope", code: "#123456789", providers: 10, location: "Jakarta", status: "Active" },
  { id: 4, name: "Jordan Nico", code: "#123456789", providers: 0, location: "Jakarta", status: "Active" },
  { id: 5, name: "Nadilla Adja", code: "#123456789", providers: 1, location: "Jakarta", status: "Not Active" },
  { id: 6, name: "Johnny Ahmad", code: "#123456789", providers: 3, location: "Jakarta", status: "Active" },
  { id: 7, name: "Devid Nico", code: "#123456789", providers: 0, location: "Jakarta", status: "Not Verified" },
  { id: 8, name: "pooja sharma", code: "#123456789", providers: 1, location: "Jakarta", status: "Active" },
  { id: 9, name: "Ali Ahmad", code: "#123456789", providers: 3, location: "Jakarta", status: "Not Verified" }
];

const FILTERS = [
  "All",
  "Active",
  "Not Active",
  "Not Verified",
  "Providers High",
  "Providers Low"
];

function DealersList() {
  const [dealers, setDealers] = useState(DEALERS);
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

  /* OUTSIDE CLICK (menu + filter) */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setOpenFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* FILTER + SEARCH LOGIC */
  const processedDealers = [...dealers]
    .filter((d) => d.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      switch (filter) {
        case "Active":
          return a.status === "Active" ? -1 : 1;
        case "Not Active":
          return a.status === "Not Active" ? -1 : 1;
        case "Not Verified":
          return a.status === "Not Verified" ? -1 : 1;
        case "Providers High":
          return b.providers - a.providers;
        case "Providers Low":
          return a.providers - b.providers;
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(processedDealers.length / itemsPerPage);
  const paginated = processedDealers.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const toggleAll = (e) =>
    setSelected(e.target.checked ? paginated.map((d) => d.id) : []);

  const toggleOne = (id) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );

  const handleSort = () => {
    setSort(sort === "Newest" ? "Oldest" : "Newest");
    setDealers([...dealers].reverse());
  };

  const handleDelete = (id) => {
    setDealers((prev) => prev.filter((d) => d.id !== id));
    setOpenMenu(null);
  };

  const handleBulkDelete = () => {
  if (selected.length === 0) return;

  // // optional confirmation
  // const confirmDelete = window.confirm(
  //   `Delete ${selected.length} selected dealer(s)?`
  // );
  // if (!confirmDelete) return;

  setDealers((prev) => prev.filter((d) => !selected.includes(d.id)));
  setSelected([]); 
};


  const handleaddNewDealer = () => {
    navigate('/Adddealer');
  }

  const handleview=()=>{
    navigate('/dealersdashboard');
  }
  const handleedit=()=>{
    navigate('/dealerdetails');
  }
  
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">

        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full md:w-64">
            <MagnifyingGlassIcon className="w-5 h-5 text-indigo-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search here..."
              className="w-full pl-12 pr-4 py-2 rounded-full bg-[#F3F4FF] outline-none text-sm"
            />
          </div>

          <div ref={filterRef} className="flex flex-wrap md:flex-nowrap gap-3 relative">
            {/* FILTER */}
            <button
              onClick={() => setOpenFilter(!openFilter)}
              className="flex items-center gap-1.5
                px-3 py-1.5 text-xs
                lg:px-4 lg:py-2 lg:text-sm
                rounded-full border border-indigo-500
                text-indigo-600"
            >
              {filter}
              <ChevronDownIcon className="w-4 h-4 lg:w-5 lg:h-5" />
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
                    className="block px-4 py-2 hover:bg-indigo-50 w-full text-left cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}

            {/* SORT */}
            <button
              onClick={handleSort}
              className="flex items-center gap-1.5
                px-3 py-1.5 text-xs
                lg:px-4 lg:py-2 lg:text-sm
                rounded-full border border-indigo-500
                text-indigo-600"
            >
              {sort}
              <ChevronDownIcon className="w-4 h-4" />
            </button>

            <button
              onClick={handleaddNewDealer}
              className="flex items-center gap-1.5
                px-3 py-1.5 text-xs
                lg:px-4 lg:py-2 lg:text-sm
                rounded-full bg-indigo-600 text-white"
            >
              <PlusIcon className="w-4 h-4 lg:w-5 lg:h-5" />
              New Dealers
            </button>

            <button
              onClick={handleBulkDelete}
              disabled={selected.length === 0}
              className="p-1.5 rounded-full hover:bg-red-100 transition"
            >
              <TrashIcon
                className={`w-4 h-4 ${
                  selected.length === 0 ? "text-gray-400" : "text-red-600"
                }`}
              />
            </button>

          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px] table-fixed">
            <thead>
              <tr className="border-b border-b-gray-200 text-sm text-indigo-800">
                <th className="w-[50px] py-4 text-center">
                  <input
                    type="checkbox"
                    checked={
                      paginated.length > 0 &&
                      paginated.every((d) => selected.includes(d.id))
                    }
                    onChange={toggleAll}
                  />
                </th>
                <th className="w-[260px] py-4 text-left">Name</th>
                <th className="w-[160px] py-4 text-left">ID</th>
                <th className="w-[180px] py-4 text-center">Service Providers</th>
                <th className="w-[140px] py-4 text-left">Location</th>
                <th className="w-[180px] py-4 text-center">Contact</th>
                <th className="w-[160px] py-4 text-center">Status</th>
                <th className="w-[80px] py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {paginated.map((dealer, i) => (
                <tr key={dealer.id} className="border-b border-b-gray-200 last:border-none">
                  <td className="py-4 text-center">
                    <input
                      type="checkbox"
                      checked={selected.includes(dealer.id)}
                      onChange={() => toggleOne(dealer.id)}
                    />
                  </td>

                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-300" />
                      <span className="font-medium text-indigo-900">
                        {dealer.name}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 text-indigo-600">{dealer.code}</td>
                  <td className="py-4 text-center text-indigo-700">{dealer.providers}</td>
                  <td className="py-4 text-indigo-700">{dealer.location}</td>

                  <td className="py-4">
                    <div className="flex justify-center gap-2">
                      <button className="p-2 rounded-full bg-indigo-100">
                        <PhoneIcon className="w-4 h-4 text-indigo-600" />
                      </button>
                      <button className="p-2 rounded-full bg-indigo-100">
                        <EnvelopeIcon className="w-4 h-4 text-indigo-600" />
                      </button>
                    </div>
                  </td>

                  {/* ✅ STATUS COLOR DERIVED FROM STATUS */}
                  <td className="py-4 text-center">
                    <span
                      className={`inline-flex w-[110px] py-1 items-center justify-center rounded-full text-xs text-white ${
                        dealer.status === "Active"
                          ? "bg-green-400"
                          : dealer.status === "Not Verified"
                          ? "bg-gray-400"
                          : "bg-orange-400"
                      }`}
                    >
                      {dealer.status}
                    </span>
                  </td>

                  <td className="py-4 text-center relative">
                    <EllipsisHorizontalIcon
                      onClick={() => setOpenMenu(openMenu === i ? null : i)}
                      className="w-5 h-5 text-gray-400 cursor-pointer mx-auto"
                    />

                    {openMenu === i && (
                      <div
                        ref={menuRef}
                        className="absolute right-6 top-8 bg-white border rounded shadow text-xs z-10"
                      >
                        <button
                          onClick={handleview}
                          className="block px-4 py-2 hover:bg-indigo-50 w-full">
                          View
                        </button>
                        <button
                          onClick={handleedit}
                          className="block px-4 py-2 hover:bg-indigo-50 w-full">
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(dealer.id)}
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
          <span>Showing {paginated.length} of {processedDealers.length}</span>

          <div className="flex gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="w-9 h-9 grid place-items-center rounded-full border"
            >
              <ChevronLeftIcon className="w-4 h-4 text-indigo-600" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-9 h-9 grid place-items-center rounded-full ${
                  page === i + 1 ? "bg-indigo-600 text-white" : "border"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="w-9 h-9 grid place-items-center rounded-full border"
            >
              <ChevronRightIcon className="w-4 h-4 text-indigo-600" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DealersList;
