import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // optional icon

const Dropdown = () => {
  const options = ["Short term relationship", "Long term relationship", "Friendship"];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select option");

  return (
    <div className="relative w-72">
      
      {/* Dropdown Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 border rounded-xl bg-white shadow-sm"
      >
        <span className="text-gray-700">{selected}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown List */}
      {open && (
        <ul className="absolute w-full mt-2 bg-white border rounded-xl shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="px-4 py-3 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
