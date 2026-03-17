import { FaRegEdit, FaRegCheckCircle } from "react-icons/fa";

export default function AdItem() {
  return (
    <div className="w-full bg-white rounded-xl shadow-md flex mt-5 ">

      <div className="w-[25%] md:w-[25%] bg-black rounded-l-xl"></div>

      <div className="flex-1 p-3 relative overflow-visible">

        <span className=" absolute -top-3 right-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center z-50 shadow">
          <FaRegCheckCircle className="text-white w-4 h-4" />
        </span>

        <div className="flex gap-3 items-center">
          <p className="text-sm text-orange-500 font-semibold">Card Ad</p>
          <FaRegEdit className="text-gray-500 cursor-pointer" />
        </div>

        <h3 className="md:text-lg font-bold text-gray-800">Title</h3>
        <p className="text-sm text-gray-400">Ad ID</p>

        <div className="ml-3 mt-1 flex items-center gap-2 text-sm md:text-lg font-semibold whitespace-nowrap">
          <span>420 Views</span>
          <span>|</span>
          <span>50 Hits</span>
        </div>

      </div>
    </div>
  );
}
