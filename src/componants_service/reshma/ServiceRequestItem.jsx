import { useNavigate } from "react-router";

const ServiceRequestItem = ({ color, title, status, lead_type }) => {
   const navigate = useNavigate();
  const goToPage74 = () => {
    navigate("/74"); // 👈 route path
  };
  return (
    <div
      className={`mx-auto text-sm  bg-white w-full  p-1.5 xs:mx-2 shadow rounded-3xl border-l-16 ${color} p-2 `}
    >
      <div className="flex justify-between xs:max-w-xs">
        <div className="flex">
          <h1 className="md:text-md lg:text-xl font-bold text-slate-600 text-lg text-nowrap p-1">
            {title}
          </h1>
          <a  onClick={goToPage74}className="underline text-sm p-1.5 px-1 text-blue-500 cursor-pointer">
            view
          </a>
        </div>
        <div className="p-2 -mx-.5 lg:mx-3 md:mx-3">
          <p className="relative text-xs md:text-sm lg:text-sm text-gray-500 font-bold text-nowrap mx-0 lg:mx-3 md:mx-3">
            Today,09:30 AM
            <span className="absolute right  md:p-1 lg:p-1 text-gray-500 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x-icon lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </span>
          </p>
        </div>
      </div>
      <p className="flex gap-1 mx-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="blue"
          stroke="currentColor"
          stroke-width=""
          stroke-linecap=""
          stroke-linejoin=""
          class="lucide lucide-circle-icon lucide-circle"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
        <span className="text-gray-500 font-semibold">Rose</span>
      </p>
      <p className="mx-3">{status}</p>

      <p className="text-gray-500 mx-3  font-semibold"> {lead_type} </p>
      {!lead_type && status && (
        <div className="flex gap-1 p-1">
          <p className="text-gray-500 text-xs md:text-sm lg:text-sm font-semibold flex gap-1 text-nowrap">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-calendar-icon lucide-calendar text-red-500"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
            </span>
            March 20, 2021
          </p>
          <p className="text-xs md:text-sm lg:text-sm text-gray-500 font-semibold flex gap-1 text-nowrap">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 23"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-clock3-icon lucide-clock-3 text-yellow-500"
              >
                <path d="M12 6v6h4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
            09.00 - 10.00 AM
          </p>
        </div>
      )}

      {status && !lead_type && (
        <div className="text-xs md:text-sm lg:text-sm flex  p-1 gap-1 text-gray-500 font-semibold">
          <p className="text-gray-500 flex gap-1 text-nowrap">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-calendar-icon lucide-calendar text-red-500"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
            </span>
            March 21, 2021
          </p>
          <p className="flex gap-1 text-nowrap text-gray-500 font-semibold ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 23"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-clock3-icon lucide-clock-3 text-yellow-500"
              >
                <path d="M12 6v6h4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
            09.00 - 10.00 AM
          </p>
        </div>
      )}
    </div>
  );
};
export default ServiceRequestItem;
