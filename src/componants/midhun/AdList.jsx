import React from "react";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function AdList() {
  const [ads, setAds] = useState([
    { type: "Card Ad", title: "Title", id: "Ad ID", views: 420, hits: 50 },
    { type: "Card Ad", title: "Title", id: "Ad ID", views: 420, hits: 50 },
    { type: "Banner Ad", title: "Title", id: "Ad ID", views: 420, hits: 50 },
    { type: "Banner Ad", title: "Title", id: "Ad ID", views: 420, hits: 50 },
    { type: "Banner Ad", title: "Title", id: "Ad ID", views: 420, hits: 50 },
    { type: "Card Ad", title: "Title", id: "Ad ID", views: 420, hits: 50 },
  ]);

  const [showSort, setShowSort] = useState(false);

  const sortAZ = () => {
    setAds([...ads].sort((a, b) => a.type.localeCompare(b.type)));
    setShowSort(false);
  };

  const sortZA = () => {
    setAds([...ads].sort((a, b) => b.type.localeCompare(a.type)));
    setShowSort(false);
  };
const navigate=useNavigate()
  const addNewAd = () => {
    setAds([
      ...ads,
      { type: "Card Ad", title: "New Title", id: "New Ad ID", views: 0, hits: 0 },
    ]);
    navigate("/NewAdd")
  };

  const editAd = (index) => {
    const copy = [...ads];
    copy[index].title = "Edited Title";
    setAds(copy);
  };

  return (
    <div className="  bg-[#F6F7FB] p-4 sm:p-[20px]">

      {/* TOP ACTION BAR (alignment unchanged) */}
      <div className="flex lg:justify-end justify-center  gap-[12px] mb-[20px] flex-wrap sm:flex-nowrap">
 
        <div className="relative">
          <button
            onClick={() => setShowSort(!showSort)}
            className="px-[18px] py-[8px] border border-[#5B4BC4] rounded-full text-[#5B4BC4] flex items-center gap-[6px] bg-white text-[13px]"
          >
            Sort <IoMdArrowDropdown size={14} />
          </button>

          {showSort && (
            <div className="absolute right-0 mt-[6px] bg-white shadow rounded-md text-[12px] z-10">
              <div
                onClick={sortAZ}
                className="px-[12px] py-[6px] cursor-pointer hover:bg-gray-100"
              >
                A – Z
              </div>
              <div
                onClick={sortZA}
                className="px-[12px] py-[6px] cursor-pointer hover:bg-gray-100"
              >
                Z – A
              </div>
            </div>
          )}
        </div>

        <button
          onClick={addNewAd}
          className="px-[18px] py-[8px] rounded-full bg-[#5B4BC4] text-white flex items-center gap-[6px] text-[13px]"
        >
          Add New <IoMdArrowDropdown size={14} />
        </button>
      </div>

      {/* CARD GRID (DESKTOP SAME, MOBILE ADJUSTS) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
        {ads.map((ad, index) => (
          <div
            key={index}
            className="flex bg-[#F3F4FF] rounded-[14px] p-[14px] gap-[14px]"
          >
            {/* Image */}
            <div className="w-[88px] h-[88px] bg-black rounded-[10px] flex-shrink-0" />

            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-[6px]">
                  <span className="text-[11px] text-orange-500 font-medium whitespace-nowrap">
                    {ad.type}
                  </span>

                  <FiEdit
                    size={12}
                    className="cursor-pointer"
                    onClick={() => editAd(index)}
                  />
                </div>

                <FaCheckCircle size={16} className="text-green-500" />
              </div>

              <p className="text-[14px] font-semibold mt-[4px]">
                {ad.title}
              </p>

              <p className="text-[11px] text-gray-500">
                {ad.id}
              </p>

              <p className="text-[11px] mt-[10px] text-gray-600">
                {ad.views} Views &nbsp;&nbsp; | &nbsp;&nbsp; {ad.hits} Hits
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdList;
