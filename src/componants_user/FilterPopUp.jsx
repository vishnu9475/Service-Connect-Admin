import React, { useState } from "react";

const CheckItem = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <div
        onClick={() => setChecked(!checked)}
        className={`w-5 h-5 rounded-md flex items-center justify-center border transition
          ${checked ? "bg-[#1C1B1F] border-[#1C1B1F]" : "bg-gray-200 border-gray-300"}`}
      >
        {checked && <span className="w-2 h-2 bg-white rounded-sm block"></span>}
      </div>
      <span className="text-sm text-[#1C1B1F]">{label}</span>
    </label>
  );
};

const Section = ({ title, items }) => (
  <div className="mb-6">
    <h2 className="text-md font-semibold mb-3">{title}</h2>
    <div className="flex flex-col gap-3 px-2">
      {items.map((item, i) => (
        <CheckItem key={i} label={item} />
      ))}
    </div>
  </div>
);

const FilterPopUp = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Popup Panel */}
      <div className="absolute bottom-0 right-0 bg-gradient-to-t from-gray-100 to-gray-700 rounded-t-2xl md:w-[30%] w-[80%] max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button
            onClick={onClose}
            className="text-sm font-semibold text-gray-900"
          >
            Close
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <Section 
            title="Sub Categories" 
            items={[
              "xxxxxxxxxxxx",
              "xxxxxxxxxxxx",
              "xxxxxxxxxxxxxx",
              "xxxxxxxxxxxxx",
              "xxxxxxxxxxxxxx",
              "xxxxxxxxxxxxxxxxxxx"
            ]} 
          />

          <Section 
            title="Category Type" 
            items={[
              "Alaaaaaaaaaaa",
              "xxxxxxxxxxxxx",
              "xxxxxxxxxxxxxx",
              "xxxxxxxxxx"
            ]} 
          />

          <Section title="Price" items={["Paid", "Free"]} />

          <Section 
            title="Level" 
            items={[
              "All Levels",
              "Beginner",
              "Intermediate",
              "Advanced"
            ]} 
          />

          <Section 
            title="Rating" 
            items={[
              "4.5 & Up Above",
              "4.0 & Up Above",
              "3.5 & Up Above",
              "3.0 & Up Above"
            ]} 
          />

          <Section 
            title="Duration" 
            items={[
              "0–2 Hours",
              "3–6 Hours",
              "7–16 Hours",
              "17+ Hours"
            ]} 
          />
        </div>

        {/* Bottom Button */}
        <div className="p-4 border-t">
          <button
            onClick={onClose}
            className="w-full bg-[#1C1B1F] text-white py-3 rounded-full"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopUp;