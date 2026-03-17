import { MdArrowForwardIos } from "react-icons/md";
import { FaUserTie, FaUserAlt } from "react-icons/fa";
import {Link} from "react-router-dom";

const providers = [
  { id: 1, name: "John", icon: <FaUserTie size={28} /> },
  { id: 2, name: "Alex", icon: <FaUserAlt size={28} /> },
  { id: 3, name: "Emma", icon: <FaUserAlt size={28} /> },
  { id: 4, name: "Chris", icon: <FaUserTie size={28} /> },
  { id: 5, name: "Sophia", icon: <FaUserAlt size={28} /> },
];

export default function Comp14() {
  return (
    <div className="max-w-[90%] mx-auto my-10 px-4 py-2 bg-gray-200 rounded-xl shadow-md shadow-gray-400">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-800">
          Top Service Providers
        </h2>

        <div className="flex items-center gap-1 text-[10px] font-semibold text-gray-500 cursor-pointer">
          <span><Link to="/SirviceProvidersPage">SEE ALL</Link></span>
          <MdArrowForwardIos size={10} />
        </div>
      </div>

      {/* Providers list */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide ">
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="flex flex-col items-center w-20"
          >
            {/* Icon Card */}
            <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center shadow-md shadow-gray-700">
              <span className="text-white">
                {provider.icon}
              </span>
            </div>

            {/* Name */}
            <p className="mt-1 text-[11px] text-gray-700">
              {provider.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}