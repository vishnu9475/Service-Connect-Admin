import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

const initialServices = [
  { id: 1, name: "Home Services", orders: 1456, conversion: 26 },
  { id: 2, name: "Health & Wellness", orders: 1456, conversion: 26 },
  { id: 3, name: "Automotive Services", orders: 1456, conversion: 26 },
  { id: 4, name: "Education & Tutoring", orders: 1456, conversion: 26 },
  { id: 5, name: "Business Services", orders: 1456, conversion: 26 },
];

function RegisteredServiceList() {
  const [services, setServices] = useState(initialServices);
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const addService = () => {
    const name = prompt("Enter service name:");
    if (!name) return;

    setServices((prev) => [
      ...prev,
      { id: Date.now(), name, orders: 0, conversion: 0 },
    ]);
  };

  const editService = (id, currentName) => {
    const newName = prompt("Edit service name:", currentName);
    if (!newName) return;

    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, name: newName } : s))
    );
    setOpenMenuId(null);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const deleteService = (id) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;
    setServices((prev) => prev.filter((s) => s.id !== id));
    setOpenMenuId(null);
  };

  const handlenewservice = () => {
    navigate('/AddNewService');
  }

  const handleditservice = () => {
    navigate('/AddNewService');
  }

  return (
    <div className="bg-[#F5F6FF]">
      <div className="bg-white rounded-2xl p-4 sm:p-6  mx-auto">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <h2 className="text-indigo-900 font-semibold text-lg">
            Registered Services
          </h2>

          <button
            onClick={handlenewservice}
            className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium self-start sm:self-auto cursor-pointer"
          >
            + New Service
          </button>
        </div>

        {/* LIST */}
        <div className="space-y-4 sm:space-y-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="
                relative
                flex flex-col sm:flex-row
                sm:items-center
                gap-4 sm:gap-6
                bg-[#F9FAFF] sm:bg-transparent
                p-4 sm:p-0
                rounded-xl
              "
            >
              {/* LEFT ICON */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-200 rounded-xl shrink-0" />

              {/* NAME */}
              <div className="flex-1">
                <p className="text-indigo-900 font-medium text-sm sm:text-base">
                  {service.name}
                </p>

                {/* MOBILE STATS */}
                <div className="flex sm:hidden items-center gap-6 mt-2">
                  <div>
                    <p className="text-sm font-semibold text-indigo-900">
                      {service.orders.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-400">Orders</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <ArrowUpRightIcon className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm font-semibold text-indigo-900">
                      {service.conversion}%
                    </span>
                  </div>
                </div>
              </div>

              {/* DESKTOP TOTAL ORDER */}
              <div className="hidden sm:flex items-center gap-3 w-44">
                <div className="flex items-end gap-1">
                  <span className="w-1 h-3 bg-indigo-600 rounded" />
                  <span className="w-1 h-5 bg-indigo-600 rounded" />
                  <span className="w-1 h-4 bg-indigo-600 rounded" />
                  <span className="w-1 h-6 bg-indigo-600 rounded" />
                </div>

                <div>
                  <p className="text-indigo-900 font-semibold text-sm">
                    {service.orders.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-400">Total Order</p>
                </div>
              </div>

              {/* DESKTOP CONVERSION */}
              <div className="hidden sm:flex items-center gap-2 w-32">
                <ArrowUpRightIcon className="w-5 h-5 text-indigo-600" />
                <div>
                  <p className="text-indigo-900 font-semibold text-sm">
                    {service.conversion}%
                  </p>
                  <p className="text-xs text-gray-400">Conversation</p>
                </div>
              </div>

              {/* MENU */}
              <button
                onClick={() =>
                  setOpenMenuId(openMenuId === service.id ? null : service.id)
                }
                className="absolute top-4 right-4 sm:static text-gray-400 hover:text-indigo-600 cursor-pointer"
              >
                <EllipsisHorizontalIcon className="w-5 h-5" />
              </button>

              {/* DROPDOWN */}
              {openMenuId === service.id && (
                <div className="absolute right-4 sm:right-0 top-12 bg-white border rounded-lg shadow-md w-32 z-10 " ref={menuRef}>
                  <button
                    onClick={handleditservice}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteService(service.id)}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default RegisteredServiceList;
