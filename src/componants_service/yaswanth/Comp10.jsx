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

function Comp10() {
  const dropdownOptions = [
    "2km","3km","4km","5km","10km","15km","20km","30km","40km","50km"
  ];

  const [activeOption, setActiveOption] = useState("nearby");
  const [open, setOpen] = useState(false);
  const [selectedDistance, setSelectedDistance] = useState("10km");
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

        {/* FILTER OPTIONS */}
        <div className="mt-4 w-full flex justify-center">
          <div className="w-full bg-gray-100 rounded-full p-1 flex items-center gap-1">

            {/* NEARBY */}
            <button
              onClick={() => {
                setActiveOption("nearby");
                setOpen(false);
              }}
              className={`w-[32%] px-3 py-2 rounded-full text-sm transition-all
                ${
                  activeOption === "nearby"
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700"
                }`}
            >
              NearBy
            </button>

            {/* ALL */}
            <button
              onClick={() => {
                setActiveOption("all");
                setOpen(false);
              }}
              className={`w-[32%] px-3 py-2 rounded-full text-sm transition-all
                ${
                  activeOption === "all"
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700"
                }`}
            >
              All
            </button>

            {/* DISTANCE DROPDOWN */}
            <div className="relative w-[35%]">
              <button
                onClick={() => {
                  setActiveOption("distance");
                  setOpen(!open);
                }}
                className={`flex items-center w-full justify-center gap-1 px-3 py-2 rounded-full text-sm shadow
                  ${
                    activeOption === "distance"
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-700"
                  }`}
              >
                {selectedDistance}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${open ? "rotate-180" : ""}`}
                />
              </button>

              {open && (
                <ul className="absolute right-0 mt-2 bg-black rounded-lg shadow-lg z-10 w-28">
                  {dropdownOptions.map((item) => (
                    <li
                      key={item}
                      onClick={() => {
                        setSelectedDistance(item);
                        setActiveOption("distance");
                        setOpen(false);
                      }}
                      className="px-4 py-2 text-sm cursor-pointer text-gray-200 hover:bg-gray-100 hover:text-black rounded-md"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* ================= FILTER POPUP ================= */}
      {showFilterPopup && (
        <div className="fixed inset-0 z-50">

          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowFilterPopup(false)}
          />

          <div className="absolute bottom-0 right-0 bg-gradient-to-t from-gray-100 to-gray-700 rounded-t-2xl md:w-[30%] w-[80%] max-h-[90vh] flex flex-col">

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

export default Comp10;
