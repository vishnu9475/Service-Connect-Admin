import { CircleCheckBig } from "lucide-react";

export default function ServiceItem({
  category,
  title,
  rating,
  completed = false,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="relative bg-white rounded-xl shadow-[0_4px_6px_rgba(75,75,75,0.45)]
        flex overflow-hidden w-full mt-1 cursor-pointer hover:shadow-gray-400 hover:shadow-lg transition"
    >
      {/* Status Icon */}
      {completed && (
        <div className="absolute right-2 top-2 bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center">
          <CircleCheckBig size={16} />
        </div>
      )}

      {/* Left Image */}
      <div className="w-28 bg-black" />

      {/* Right Content */}
      <div className="flex-1 p-3">
        <p className="text-sm text-orange-500 font-semibold">
          {category}
        </p>

        <p className="font-semibold text-sm">
          {title}
        </p>

        <div className="flex items-center gap-1 text-xs mt-1">
          ⭐ <span className="font-semibold">{rating}</span>
        </div>
      </div>
    </div>
  );
}
