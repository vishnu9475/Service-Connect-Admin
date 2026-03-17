import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Component4 from "../componants_user/Component4";

const categories = ["All", "Plumbing", "Electrical", "Health"];

const services = [
  { id: 1, title: "Residential Plumbing", cat: "Plumbing", price: "₹300–700" },
  { id: 2, title: "Bathroom Pipe Fix", cat: "Plumbing", price: "₹200–500" },
  { id: 3, title: "Wiring Installation", cat: "Electrical", price: "₹400–900" },
  { id: 4, title: "Health Consultation", cat: "Health", price: "₹500–1200" },
];

export default function ServicesPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? services : services.filter((s) => s.cat === active);

  return (
    <div className="w-full h-screen bg-gray-100">
      {/* header */}
      <div className="w-full">
        <Component4
          title="ALL services"
          showSearch={true}
          //  showFilter={true}
          theme="black"
        />
      </div>
      <div className=" p-4 md:p-8 ">
        {/* Category Tabs */}
        <div className="flex gap-2 mb-5  ">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-1 py-1 rounded-full w-[25%] text-sm border shadow shadow-gray-500 ${
                active === cat
                  ? "bg-black text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl overflow-hidden shadow-md shadow-gray-500"
            >
              <div className="h-28 bg-black"></div>

              <div className="p-3">
                <p className="text-xs text-gray-400">{item.cat}</p>
                <h3 className="text-sm font-semibold">{item.title}</h3>

                <div className="flex items-center text-xs text-gray-500 mt-1 gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>4.3</span>
                  <span>•</span>
                  <span>2.1k Reviews</span>
                </div>

                <p className="text-sm font-semibold mt-1">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
