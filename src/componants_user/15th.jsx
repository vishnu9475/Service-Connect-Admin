import { FaBroom } from "react-icons/fa";

export default function Comp15() {
  return (
    <div className="w-1/4 mx-auto my-8 px-4 py-3 rounded-sm">
      <div className="flex flex-col items-center">
        {/* Category Icon */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-100">
          <FaBroom size={22} className="text-blue-600" />
        </div>

        {/* Category Name */}
        <p className="mt-2 text-sm font-semibold text-gray-800">
          Cleaning
        </p>
      </div>
    </div>
  );
}
