import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit, FiChevronDown } from "react-icons/fi";
import { TfiPlus } from "react-icons/tfi";
import Pic from "../../assets/graphic.jpg";

export default function ItemCard142({
  onView,
  onEdit,
  onAdd,
  onDelete,
}) {
  const initialCategories = [
    { title: "Home Services", date: "12 Jan 2026", status: "Active" },
    { title: "House Keeping", date: "10 Jan 2026", status: "Inactive" },
    { title: "Accounting", date: "08 Jan 2026", status: "Active" },
    { title: "Doctor", date: "05 Jan 2026", status: "Active" },
    { title: "Cleaning", date: "02 Jan 2026", status: "Inactive" },
  ];

  const [categories] = useState(initialCategories);
  const [sortFilter, setSortFilter] = useState("All");
  const [openSort, setOpenSort] = useState(false);

  const filteredCategories =
    sortFilter === "All"
      ? categories
      : categories.filter((c) => c.status === sortFilter);

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h2 className="text-base font-semibold text-[#303972]">
          Categories
        </h2>

        <div className="flex gap-2 relative">
          {/* SORT BUTTON */}
          <button
            onClick={() => setOpenSort(!openSort)}
            className="flex items-center gap-2 px-4 sm:px-6 py-1.5 text-xs bg-[#6C63FF] text-white rounded-full"
          >
            {sortFilter} <FiChevronDown size={12} />
          </button>

          {/* SORT DROPDOWN */}
          {openSort && (
            <div className="absolute right-0 top-full mt-2 w-28 bg-white border rounded-lg shadow-md text-xs z-10">
              {["All", "Active", "Inactive"].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSortFilter(option);
                    setOpenSort(false);
                  }}
                  className={`block w-full text-left px-3 py-2 hover:bg-[#F3F4FF] ${
                    sortFilter === option ? "text-[#6C63FF] font-medium" : ""
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {/* MAIN BUTTON */}
          
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCategories.map((item, index) => (
          <div
            key={index}
            className="bg-[#F3F4FF] rounded-xl p-4 flex flex-col min-h-[230px]"
          >
            {/* IMAGE WRAPPER */}
            <div className="relative">
              {/* STATUS */}
              <div className="absolute top-2 left-2 right-2 flex justify-end">
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full text-white ${
                    item.status === "Active"
                      ? "bg-green-500"
                      : "bg-gray-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <img
                src={Pic}
                alt={item.title}
                className="w-full h-[120px] sm:h-[130px] object-cover rounded-lg"
              />
            </div>

            <p className="mt-3 text-xs font-medium text-[#303972]">
              {item.title}
            </p>

            <div className="flex justify-center gap-5 mt-auto text-gray-500 text-sm">
              <FaEye
                onClick={() => onView?.(item)}
                className="cursor-pointer hover:text-[#6C63FF]"
                size={18}
              />
              <FiEdit
                onClick={() => onEdit?.(item)}
                className="cursor-pointer hover:text-[#6C63FF]"
                size={18}
              />
              <RiDeleteBinLine
                onClick={() => onDelete?.(item)}
                className="cursor-pointer hover:text-red-500"
                size={18}
              />
            </div>
          </div>
        ))}

        {/* ADD NEW CARD */}
        <div
          onClick={onAdd}
          className="bg-[#F3F4FF] rounded-xl p-4 flex flex-col min-h-[230px] cursor-pointer"
        >
          <TfiPlus className="text-6xl text-gray-300 mx-auto mt-8" />

          <p className="mt-4 text-xs font-medium text-[#303972]">
            Title
          </p>

          <div className="flex justify-center gap-5 mt-auto text-gray-400 text-sm">
            <FaEye />
            <FiEdit />
            <RiDeleteBinLine />
          </div>
        </div>
      </div>
    </div>
  );
}
