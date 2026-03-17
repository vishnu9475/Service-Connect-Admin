

import { FaBroom, FaBolt, FaTruck, FaSpa } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

const services = [
  {
    id: 1,
    name: "Cleaning",
    icon: <FaBroom size={22} />,
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    name: "Electrical",
    icon: <FaBolt size={22} />,
    bg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    id: 3,
    name: "Delivery",
    icon: <FaTruck size={22} />,
    bg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 4,
    name: "Beauty",
    icon: <FaSpa size={22} />,
    bg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

export default function Comp12() {
  return (
    <div className="w-3/4  mx-auto my-8 px-4 py-3 bg-gray-200  rounded-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Services Category
        </h2>

        <div className="flex items-center gap-1 text-xs font-semibold text-gray-500 cursor-pointer">
          <span>SEE ALL</span>
          <MdArrowForwardIos size={12} />
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-5  overflow-x-auto scrollbar-hide">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center min-w-30"
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center ${service.bg}`}
            >
              <span className={service.iconColor}>
                {service.icon}
              </span>
            </div>
            <p className="mt-2 text-sm font-normal text-gray-700">
              {service.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
