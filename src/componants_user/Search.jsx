import { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

/* ---------- CHECK ITEM ---------- */
const CheckItem = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <div
        onClick={() => setChecked(!checked)}
        className={`w-5 h-5 rounded-md flex items-center justify-center border transition
          ${
            checked
              ? "bg-[#1C1B1F] border-[#1C1B1F]"
              : "bg-gray-200 border-gray-300"
          }`}
      >
        {checked && <span className="w-2 h-2 bg-white rounded-sm block" />}
      </div>
      <span className="text-sm text-[#1C1B1F]">{label}</span>
    </label>
  );
};

/* ---------- SECTION ---------- */
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

export default function Search1() {

  const [open, setOpen] = useState(false);
  const [showFilterPopup, setShowFilterPopup] = useState(false);

  return (
    <>
      {/* ================= MAIN SEARCH + FILTER ================= */}
      <div className="w-[90%] rounded-xl mx-auto my-4 p-2 bg-gray-200 shadow">

        {/* SEARCH BAR */}
        <div className="flex items-center gap-2 bg-stone-400 rounded-xl px-3 py-2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-700"
          />
          <button
            onClick={() => setShowFilterPopup(true)}
            className="p-2 bg-white rounded-lg shadow"
          >
            <SlidersHorizontal size={16} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* ================= FILTER POPUP ================= */}
      {showFilterPopup && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowFilterPopup(false)}
          />

          <div className="absolute bottom-0 right-0 bg-gradient-to from-gray-100 to-gray-700 rounded-t-2xl md:w-[30%] w-[80%] max-h-[90vh] flex flex-col">

            <div className="flex justify-between items-center px-4 py-3 border-b">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setShowFilterPopup(false)}
                className="text-sm font-semibold text-gray-900"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              <Section title="Sub Categories" items={["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxxx"]} />
              <Section title="Category Type" items={["Alaaaaaaaaaaa","xxxxxxxxxxxxx"]} />
              <Section title="Price" items={["Paid","Free"]} />
              <Section title="Level" items={["All Levels","Beginner","Intermediate","Advanced"]} />
              <Section title="Rating" items={["4.5 & up","4.0 & up","3.5 & up","3.0 & up"]} />
              <Section title="Duration" items={["0–2 Hours","3–6 Hours","7–16 Hours","17+ Hours"]} />
            </div>

            <div className="p-4 border-t">
              <button
                onClick={() => setShowFilterPopup(false)}
                className="w-full bg-[#1C1B1F] text-white py-3 rounded-full"
              >
                Apply
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

