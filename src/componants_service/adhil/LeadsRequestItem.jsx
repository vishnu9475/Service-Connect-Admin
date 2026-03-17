import { FiX, FiCalendar, FiClock } from "react-icons/fi";
import { BsFillCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const LeadsRequestItem = ({ color, title, status, lead_type, onRemove }) => {
  return (
    <div
      className={`mx-auto text-sm bg-white w-full p-1.5 xs:mx-2 shadow rounded-3xl border-l-16 ${color} p-2`}
    >
      <div className="flex justify-between xs:max-w-xs">
        <div className="flex">
          <h1 className="md:text-md lg:text-xl font-bold text-slate-600 text-lg text-nowrap p-1">
            {title}
          </h1>
          <Link to="/77" className="underline text-sm p-1.5 px-1 text-blue-500">
            view
          </Link>
        </div>

        <div className="p-2 -mx-.5 lg:mx-3 md:mx-3">
          <p className="relative text-xs md:text-sm lg:text-sm text-gray-500 font-bold text-nowrap mx-0 lg:mx-3 md:mx-3">
            Today, 09:30 AM
            <span
              className="absolute right md:p-1 lg:p-1 cursor-pointer"
              onClick={onRemove}
            >
              <FiX size={15} className="text-gray-500" />
            </span>
          </p>
        </div>
      </div>

      <p className="flex gap-1 mx-1 items-center">
        <BsFillCircleFill size={14} className="text-blue-500" />
        <span className="text-gray-500 font-semibold">Rose</span>
      </p>

      <p className="mx-3">{status}</p>

      <p className="text-gray-500 mx-3 font-semibold">{lead_type}</p>

      {!lead_type && status && (
        <div className="flex gap-1 p-1">
          <p className="text-gray-500 text-xs md:text-sm lg:text-sm font-semibold flex gap-1 text-nowrap items-center">
            <FiCalendar size={18} className="text-red-500" />
            March 20, 2021
          </p>

          <p className="text-xs md:text-sm lg:text-sm text-gray-500 font-semibold flex gap-1 text-nowrap items-center">
            <FiClock size={18} className="text-yellow-500" />
            09.00 - 10.00 AM
          </p>
        </div>
      )}

      {status && !lead_type && (
        <div className="text-xs md:text-sm lg:text-sm flex p-1 gap-1 text-gray-500 font-semibold">
          <p className="flex gap-1 text-nowrap items-center">
            <FiCalendar size={18} className="text-red-500" />
            March 21, 2021
          </p>

          <p className="flex gap-1 text-nowrap items-center">
            <FiClock size={18} className="text-yellow-500" />
            09.00 - 10.00 AM
          </p>
        </div>
      )}
    </div>
  );
};

export default LeadsRequestItem;
