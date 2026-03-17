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
        {checked && (
          <span className="w-2 h-2 bg-white rounded-sm block"></span>
        )}
      </div>
      <span className="text-sm text-[#1C1B1F]">{label}</span>
    </label>
  );
};

const Section = ({ title, items }) => (
  <div className="mb-6">
    <h2 className="text-md font-semibold mb-3">{title}</h2> 
    <div className="flex flex-col gap-3 px-4">
      {items.map((item, i) => (
        <CheckItem key={i} label={item} />
      ))}
    </div>
  </div>
);

const FilterPage = () => {
  return (
    <div className="min-h-screen max-w-full flex-col px-4 bg-white">







      
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-5 mt-4 space-y-8">
        <Section 
          title="SubCategories:" 
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
          title="xxxxxx:" 
          items={[
            "Alaaaaaaaaaaa",
            "xxxxxxxxxxxxx",
            "xxxxxxxxxxxxxx",
            "xxxxxxxxxx"
          ]} 
        />

        <Section title="Price:" items={["Paid", "Free"]} />

        <Section 
          title="xxxxxxx:" 
          items={[
            "All xxxxxx",
            "xxxxxxxx",
            "xxxxxxx Exercise",
            "xxxxxxxxxxxx"
          ]} 
        />

        <Section 
          title="Rating:" 
          items={[
            "4.5 & Up Above",
            "4.0 & Up Above",
            "3.5 & Up Above",
            "3.0 & Up Above"
          ]} 
        />

        <Section 
          title="Duration:" 
          items={[
            "0–2 Hours",
            "3–6 Hours",
            "7–16 Hours",
            "17+ Hours"
          ]} 
        />
      </div>

      {/* Bottom Button */}
      <div className="p-4 w-[100%]">
        <button className="w-full bg-[#1C1B1F] text-white py-3 rounded-full text-center">
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterPage;
