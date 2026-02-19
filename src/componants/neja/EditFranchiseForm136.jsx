import { FiTrash2 } from "react-icons/fi";
import { useState } from "react";

const FranchiseeTypeForm136 = ({ typeName = "", mode = "view" }) => {
  const [isManualEdit, setIsManualEdit] = useState(false);

  const isAddNew = mode === "add";
  const isViewMode = !isAddNew && !isManualEdit;
  const isEditMode = isAddNew || isManualEdit;

  return (
    <div className="w-full">
      {/* CARD */}
      <div className="bg-white rounded-[20px] px-5 sm:px-8 lg:px-10 py-6 sm:py-8">

        <h2 className="text-[#303972] text-base sm:text-lg font-semibold mb-6">
          {isAddNew ? "Add Franchisee Type" : "Edit Franchisee Type"}
        </h2>

        {/* INPUTS */}
        <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
          <input
            type="text"
            disabled={!isEditMode}
            placeholder={typeName || "Franchisee type"}
            className="w-full h-12 bg-[#F3F4FF] rounded-md px-4 text-sm text-[#303972]
            placeholder:text-[#8A8FB3] outline-none disabled:opacity-70
            focus:ring-2 focus:ring-[#5B5AD6]"
          />

          <input
            type="text"
            disabled={!isEditMode}
            placeholder="Details"
            className="w-full h-12 bg-[#F3F4FF] rounded-md px-4 text-sm text-[#303972]
            placeholder:text-[#8A8FB3] outline-none
            focus:ring-2 focus:ring-[#5B5AD6]"
          />

          <input
            type="text"
            disabled={!isEditMode}
            placeholder="Rate"
            className="w-full h-12 bg-[#F3F4FF] rounded-md px-4 text-sm text-[#303972]
            placeholder:text-[#8A8FB3] outline-none
            focus:ring-2 focus:ring-[#5B5AD6]"
          />

          <input
            type="text"
            disabled={!isEditMode}
            placeholder="Currency"
            className="w-full h-12 bg-[#F3F4FF] rounded-md px-4 text-sm text-[#303972]
            placeholder:text-[#8A8FB3] outline-none
            focus:ring-2 focus:ring-[#5B5AD6]"
          />
        </div>

        {/* ACTION BUTTONS INSIDE CARD */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4
    items-stretch sm:items-center
    justify-center sm:justify-end
    mt-6 sm:mt-8

    [@media(min-width:1024px)_and_(max-width:1100px)]:flex-col
    [@media(min-width:1024px)_and_(max-width:1100px)]:items-stretch
    [@media(min-width:1024px)_and_(max-width:1100px)]:justify-center">

          {isViewMode && (
            <>
              <button
                className="px-8 py-2.5 rounded-full bg-red-600 text-white text-sm font-medium"
                onClick={() => alert("Deleted!")}
              >
                Delete
              </button>

              <button
                className="px-10 py-2.5 rounded-full bg-[#4D44B5] text-white text-sm font-medium"
                onClick={() => setIsManualEdit(true)}
              >
                Edit
              </button>
            </>
          )}

          {isEditMode && (
            <>
              <button
                className="px-8 py-2.5 rounded-full border border-[#4D44B5] text-[#4D44B5] text-sm font-medium hover:bg-[#F3F4FF]"
                onClick={() => alert("Cleared")}
              >
                Clear
              </button>

              <button
                className="px-8 py-2.5 rounded-full border border-[#4D44B5] text-[#4D44B5] text-sm font-medium hover:bg-[#F3F4FF]"
                onClick={() => alert("Saved as draft!")}
              >
                Save as Draft
              </button>

              <button
                className="px-10 py-2.5 rounded-full bg-[#4D44B5] text-white text-sm font-medium"
                onClick={() => {
                  alert("Saved");
                  if (!isAddNew) setIsManualEdit(false);
                }}
              >
                Save
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default FranchiseeTypeForm136;
