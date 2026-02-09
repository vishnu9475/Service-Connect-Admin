import { useState } from "react";
import { Plus, Trash2, ChevronDown } from "lucide-react";

export default function DailyWorkForm140() {
  const [rows, setRows] = useState([
    { color: "Blue-collar", qty: "", rate: "" },
    { color: "White-collar", qty: "", rate: "" },
    { color: "Grey-collar", qty: "", rate: "" },
  ]);

  const addRow = () => {
    setRows([...rows, { color: "", qty: "", rate: "" }]);
  };

  const deleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="w-full max-w-full bg-white rounded-[20px] px-4 sm:px-8 lg:px-10 py-6 sm:py-8">

        {/* TITLE */}
        <h2 className="text-[#303972] text-lg font-semibold mb-8">
          Daily work
        </h2>

        {/* CENTER INPUTS */}
        <div className="w-full max-w-full sm:max-w-md mx-auto mt-6 space-y-5">
          <input
            placeholder="Work"
            className="w-full h-12 bg-[#F3F4FF] rounded-md px-4 text-sm outline-none"
          />

          <input
            placeholder="Details"
            className="w-full h-12 bg-[#F3F4FF] rounded-md px-4 text-sm outline-none"
          />

          <div className="relative">
            <select className="w-full h-12 bg-[#F3F4FF] rounded-md px-4 text-sm appearance-none outline-none">
              <option>Currency</option>
            </select>
            <ChevronDown
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        {/* COLLAR SECTION */}
        <div className="w-full mt-8 sm:max-w-md sm:mx-auto">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-[#303972]">
              Collar
            </p>

            <button
              onClick={addRow}
              className="flex items-center gap-1 text-sm text-black font-medium"
            >
              Add new <Plus size={16} />
            </button>
          </div>

          {/* ROWS */}
          <div className="mt-4 overflow-x-auto min-[1460px]:overflow-x-visible">
            <div className="min-w-170 sm:min-w-full space-y-4">
              {rows.map((row, index) => (
                <div key={index} className="grid grid-cols-[220px_160px_160px_40px] gap-4 items-center">
                  <input defaultValue={row.color} placeholder="Blue-collar" className="h-11 bg-[#F3F4FF] rounded-md px-3 text-sm outline-none"/>
                  <input placeholder="Lead Quantity" className="h-11 bg-[#F3F4FF] rounded-md px-3 text-sm outline-none"/>
                  <input placeholder="Rate" className="h-11 bg-[#F3F4FF] rounded-md px-3 text-sm outline-none"/>
                  <button onClick={() => deleteRow(index)}>
                    <Trash2 size={18} className="text-black" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER BUTTONS */}
       <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mt-12 sm:mt-16">
          <button className="px-6 sm:px-8 py-2 rounded-full bg-red-600 text-white text-sm"onClick={() => {
      alert("Deleted!");
    }}>
            Delete
          </button>

          <button className="px-6 sm:px-8 py-2 rounded-full border border-[#4F46B5] text-[#4F46B5] text-sm" onClick={() => {
      alert("Saved as draft!");
    }}>
            Save as Draft
          </button>

          <button className="px-8 sm:px-10 py-2 rounded-full bg-[#4F46B5] text-white text-sm"onClick={() => {
      alert("Saved");
    }}>
            Save
          </button>
        </div>

      </div>
    </div>
  );
}
