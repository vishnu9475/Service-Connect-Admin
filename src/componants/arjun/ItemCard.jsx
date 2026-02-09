import React from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { TfiPlus } from "react-icons/tfi";
import Pic from "../assets/Dummy.jpg";

export default function ItemCard() {
  const initialCategories = [
    "Home Services",
    "House Keeping",
    "Accounting",
    "Doctor",
    "Cleaning",
  ];

  const [categories, setCategories] = useState(initialCategories);

  const handleView = (title) => alert(`Viewing: ${title}`);

  const handleEdit = (index) => {
    const name = prompt("Edit category name:");
    if (name) {
      const updated = [...categories];
      updated[index] = name;
      setCategories(updated);
    }
  };

  const handleDelete = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    const name = prompt("Enter new category:");
    if (name) setCategories([...categories, name]);
  };

  return (
    <div className="min-h-screen flex justify-center py-6">
      <div className="w-full max-w-[1475px] px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((title, index) => (
            <div
              key={index}
              className="bg-[#F3F4FF] rounded-2xl p-4 h-[260px] flex flex-col relative"
            >
              {/* IMAGE */}
              <img
                src={Pic}
                alt={title}
                className="w-full h-[150px] object-cover rounded-xl"
              />

              {/* TITLE + DATE */}
              <div className="flex justify-between items-center mt-3">
                <p className="text-sm font-semibold text-gray-800">
                  {title}
                </p>

                <div className="text-xs text-gray-500 whitespace-nowrap">
                  Jun 10, 2024&nbsp;&nbsp;9:41 AM
                </div>
              </div>

              {/* ICONS + STATUS */}
              <div className="flex justify-between items-center mt-auto">
                <div className="flex gap-4 text-gray-500 text-sm">
                  <FaEye
                    onClick={() => handleView(title)}
                    className="cursor-pointer hover:text-[#6C63FF]"
                  />
                  <FiEdit
                    onClick={() => handleEdit(index)}
                    className="cursor-pointer hover:text-[#6C63FF]"
                  />
                  <RiDeleteBinLine
                    onClick={() => handleDelete(index)}
                    className="cursor-pointer hover:text-red-500"
                  />
                </div>

                <span className="text-xs px-3 py-1 rounded-full bg-black text-white">
                  Not-Active
                </span>
              </div>
            </div>
          ))}

          {/* ADD NEW CARD — SAME LOGIC */}
          <div
            onClick={handleAdd}
            className="bg-[#F3F4FF] rounded-2xl p-4 h-[260px] flex flex-col cursor-pointer"
          >
            <TfiPlus className="text-7xl text-gray-300 mx-auto mt-6" />

            <p className="mt-3 text-xs font-medium text-gray-700 pl-1">
              Title
            </p>

            <div className="flex justify-center gap-4 mt-auto text-gray-400 text-sm">
              <FaEye />
              <FiEdit />
              <RiDeleteBinLine />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
