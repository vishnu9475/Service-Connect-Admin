import { useState } from "react";
import { Plus, Trash2, ChevronDown } from "lucide-react";

const DailyWorkForm140 = ({ title = "Daily work" }) => {

  // edit state (only when user clicks Edit for existing type)
  const [isManualEdit, setIsManualEdit] = useState(false);

 ;
  // modes
  const isAddNew = title === "Add New Service";
  const isViewMode = !isAddNew && !isManualEdit; // existing type, view only
  const isEditMode = isAddNew || isManualEdit;   // add new OR clicked edit

  const [rows, setRows] = useState([
    { color: "Blue-collar", qty: "", rate: "" },
    { color: "White-collar", qty: "", rate: "" },
    { color: "Grey-collar", qty: "", rate: "" },
  ]);

  const addRow = () => {
    if (!isEditMode) return;
    setRows([...rows, { color: "", qty: "", rate: "" }]);
  };

  const clearAll = () => {
    setRows([
      { color: "", qty: "", rate: "" },
      { color: "", qty: "", rate: "" },
      { color: "", qty: "", rate: "" },
    ]);
  };

  const deleteRow = (index) => {
    if (!isEditMode) return;
    setRows(rows.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-sm px-6 py-10">

        {/* TITLE */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[#303972] text-xl font-semibold">
            {title}
          </h2>
        </div>

        {/* TOP FIELDS */}
        <div className="max-w-md mx-auto space-y-6">
          <input
            disabled={!isEditMode}
            placeholder="Enter work name"
            className="w-full h-11 bg-[#F7F8FF] rounded-md px-3 text-sm outline-none placeholder:text-gray-400 disabled:opacity-70"
          />

          <input
            disabled={!isEditMode}
            placeholder="Enter work details"
            className="w-full h-11 bg-[#F7F8FF] rounded-md px-3 text-sm outline-none placeholder:text-gray-400 disabled:opacity-70"
          />

          <div className="relative">
            <select
              disabled={!isEditMode}
              className="w-full h-11 bg-[#F7F8FF] rounded-md px-3 text-sm outline-none appearance-none text-gray-700 disabled:opacity-70"
            >
              <option value="">Select currency</option>
              <option>INR</option>
              <option>USD</option>
              <option>EUR</option>
            </select>

            <ChevronDown
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* COLLAR SECTION */}
        <div className="mt-12 border border-gray-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <p className="text-base font-medium text-[#303972]">Collar</p>

            {isEditMode && (
              <button
                onClick={addRow}
                className="flex items-center gap-2 text-sm font-medium text-[#303972]"
              >
                <Plus size={16} />
                Add new
              </button>
            )}
          </div>

          <div className="overflow-x-auto no-scrollbar">
            <div className="min-w-[720px] space-y-4">
              {rows.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1fr_1fr_1fr_40px] gap-4 items-center"
                >
                  <input
                    disabled={!isEditMode}
                    placeholder={row.color || "Collar type"}
                    className="h-11 bg-[#F7F8FF] rounded-md px-3 text-sm outline-none placeholder:text-gray-400 disabled:opacity-70"
                  />

                  <input
                    disabled={!isEditMode}
                    placeholder="Enter quantity"
                    className="h-11 bg-[#F7F8FF] rounded-md px-3 text-sm outline-none placeholder:text-gray-400 disabled:opacity-70"
                  />

                  <input
                    disabled={!isEditMode}
                    placeholder="Enter rate"
                    className="h-11 bg-[#F7F8FF] rounded-md px-3 text-sm outline-none placeholder:text-gray-400 disabled:opacity-70"
                  />

                  {isEditMode && (
                    <button
                      onClick={() => deleteRow(index)}
                      className="h-11 w-11 flex items-center justify-center rounded-md hover:bg-red-50"
                    >
                      <Trash2 size={18} className="text-red-500" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex flex-col md:flex-row md:justify-end gap-4 mt-12 w-full 
           [@media(min-width:1024px)_and_(max-width:1100px)]:flex-col
           [@media(min-width:1024px)_and_(max-width:1100px)]:items-stretch
           [@media(min-width:1024px)_and_(max-width:1100px)]:justify-center">

          {/* VIEW MODE → Edit + Delete */}
          {isViewMode && (
            <>
              <button
                className="px-8 py-2.5 rounded-full bg-red-600 text-white text-sm font-medium"
                onClick={() => alert("Service deleted")}
              >
                Delete
              </button>

              <button
                className="px-10 py-2.5 rounded-full bg-[#4F46B5] text-white text-sm font-medium"
                onClick={() => setIsManualEdit(true)}
              >
                Edit
              </button>
            </>
          )}

          {/* EDIT MODE → Clear + Save as Draft + Save */}
          {isEditMode && (
            <>
              <button
                className="px-8 py-2.5 rounded-full border border-[#4F46B5] text-[#4F46B5] text-sm font-medium hover:bg-[#F3F4FF]"
                onClick={clearAll}
              >
                Clear
              </button>

              <button
                className="px-8 py-2.5 rounded-full border border-[#4F46B5] text-[#4F46B5] text-sm font-medium hover:bg-[#F3F4FF]"
                onClick={() => alert("Saved as draft!")}
              >
                Save as Draft
              </button>

              <button
                className="px-10 py-2.5 rounded-full bg-[#4F46B5] text-white text-sm font-medium"
                onClick={() => {
                  alert("Saved");
                  if (!isAddNew) {
                    setIsManualEdit(false); // back to view mode for existing
                  }
                }}
              >
                Save
              </button>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default DailyWorkForm140;
