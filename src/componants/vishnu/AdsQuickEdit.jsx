import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

const initialAds = [
  {
    id: 1,
    name: "Ad1",
    value: 1456,
    label: "Total Reach",
    percent: 26,
    action: "Clicks",
  },
  {
    id: 2,
    name: "Ad2",
    value: 1456,
    label: "Total Reach",
    percent: 26,
    action: "Clicks",
  },
  {
    id: 3,
    name: "Boosted Profile",
    value: 1456,
    label: "Total Order",
    percent: 26,
    action: "Clicks",
  },
];

function AddQuickEdit() {
  const [ads, setAds] = useState(initialAds);
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  const deleteAd = (id) => {
    setAds((prev) => prev.filter((ad) => ad.id !== id));
    setOpenMenuId(null);
  };

  const navigate = useNavigate();

  const handleAdClick = (ad) => {
    navigate("/adsmanagement", { state: { ad } });
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


  return (
    <div className="bg-[#F5F6FF]">
      <div className="bg-white rounded-2xl p-4 sm:p-6  mx-auto">

        {/* HEADER */}
        <h2 className="text-indigo-900 font-semibold text-lg mb-6">
          Ads
        </h2>

        {/* LIST */}
        <div className="space-y-4 sm:space-y-5">
          {ads.map((ad) => (
            <div
              key={ad.id}
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
              {/* LEFT IMAGE */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-200 rounded-xl shrink-0" />

              {/* NAME + MOBILE STATS */}
              <div className="flex-1">
                <p className="text-indigo-900 font-medium text-sm sm:text-base">
                  {ad.name}
                </p>

                {/* MOBILE STATS */}
                <div className="flex sm:hidden items-center gap-6 mt-2">
                  <div>
                    <p className="text-sm font-semibold text-indigo-900">
                      {ad.value.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-400">
                      {ad.label}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <ArrowUpRightIcon className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm font-semibold text-indigo-900">
                      {ad.percent}%
                    </span>
                    <span className="text-xs text-gray-400 ml-1">
                      {ad.action}
                    </span>
                  </div>
                </div>
              </div>

              {/* DESKTOP TOTAL */}
              <div className="hidden sm:flex items-center gap-3 w-44">
                <div className="flex items-end gap-1">
                  <span className="w-1 h-3 bg-indigo-600 rounded" />
                  <span className="w-1 h-5 bg-indigo-600 rounded" />
                  <span className="w-1 h-4 bg-indigo-600 rounded" />
                  <span className="w-1 h-6 bg-indigo-600 rounded" />
                </div>

                <div>
                  <p className="text-indigo-900 font-semibold text-sm">
                    {ad.value.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-400">
                    {ad.label}
                  </p>
                </div>
              </div>

              {/* DESKTOP CLICKS */}
              <div className="hidden sm:flex items-center gap-2 w-32">
                <ArrowUpRightIcon className="w-5 h-5 text-indigo-600" />
                <div>
                  <p className="text-indigo-900 font-semibold text-sm">
                    {ad.percent}%
                  </p>
                  <p className="text-xs text-gray-400">
                    {ad.action}
                  </p>
                </div>
              </div>

              {/* MENU */}
              <button
                onClick={() =>
                  setOpenMenuId(openMenuId === ad.id ? null : ad.id)
                }
                className="
                  absolute top-4 right-4
                  sm:static
                  text-gray-400 hover:text-indigo-600
                  cursor-pointer
                "
              >
                <EllipsisHorizontalIcon className="w-5 h-5" />
              </button>

              {/* DROPDOWN MENU */}
              {openMenuId === ad.id && (
                <div className="absolute right-4 sm:right-0 top-12 bg-white border rounded-lg shadow-md w-28 z-10" ref={menuRef}>
                  <button onClick={() => handleAdClick(ad)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                    View
                  </button>
                  <button
                    onClick={() => deleteAd(ad.id)}
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

export default AddQuickEdit;
