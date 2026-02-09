import React from "react";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

function AdCategory() {
  const [categories, setCategories] = useState([
    "Banner Ad",
    "Card Ad",
    "Popup Ad",
    "Boost Profile",
  ]);

  const [editMode, setEditMode] = useState(false);

  const changeCategory = (index, value) => {
    const copy = [...categories];
    copy[index] = value;
    setCategories(copy);
  };

  return (
    <div className=" bg-[#F6F7FB] lg:w-[430px] flex  pt-10 px-4">
      <div className="w-full  bg-white rounded-[20px] px-4 pt-4 pb-6">

        <div className="flex items-center gap-4 mb-4">
          <p className="text-[20px] font-bold text-[#303972]">
            Ad Category
          </p>

          <FiEdit
            size={20}
            className="cursor-pointer text-[#111827]"
            onClick={() => setEditMode(!editMode)}
          />
        </div>

        <div className="flex flex-col gap-2.5">
          {categories.map((item, index) =>
            editMode ? (
              <input
                key={index}
                value={item}
                onChange={(e) => changeCategory(index, e.target.value)}
                className="h-9 rounded-full px-3.5 text-xs bg-[#F3F4FF] w-full  outline-none"
              />
            ) : (
              <div
                key={index}
                className="h-9 flex items-center justify-center rounded-full text-xs bg-[#F3F4FF]"
              >
                {item}
              </div>
            )
          )}
        </div>

      </div>
    </div>
  );
}

export default AdCategory;
