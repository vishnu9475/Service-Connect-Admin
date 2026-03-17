import ServiceRequest from "./ServiceRequest";
import { useNavigate } from "react-router";

const ServiceBookingItem = ({ status, color }) => {
   const navigate = useNavigate();
   const goToPage20 = () => {
    navigate("/75");
  };
  return (
    <div
      className={` w-full sm:w-full md:w-full md:p-4 md:text-xl lg:text-xl bg-white   shadow rounded-3xl border-l-16 ${color} my-8 `}
    >
      <div className="flex justify-between p-2">
        <div className="flex gap-2 md:gap-3">
          <h1 className="font-bold text-slate-600 text-lg md:text-xl text-nowrap ">
            Tap Repair
          </h1>

          <a href="#"
          
           onClick={goToPage20}
          className="text-blue-400 underline md:text-lg">
            view
          </a>
        </div>
        <div className="mx-5">
          <p className="relative text-gray-400 font-semibold text-nowrap p-1.5 text-xs md:text-sm  xs:max-w-xs lg:text-sm">
            Today,09:30 AM
            <span className="mx-1 absolute right  text-gray-400 md:p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="14"
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

      <p className="flex justify-items-start text-gray-500 p-1 gap-1">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="blue"
            stroke="currentColor"
            stroke-width=""
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-icon lucide-circle"
          >
            <circle cx="12" cy="12" r="9" />
          </svg>
        </span>
        Rose
      </p>

      {!status && (
        <p className="text-red-600 text-start mx-3 relative ">
          Rescheduled
          <span className="absolute right p-1 px-1">
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
              class="lucide lucide-octagon-alert-icon lucide-octagon-alert"
            >
              <path d="M12 16h.01" />
              <path d="M12 8v4" />
              <path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />
            </svg>
          </span>
        </p>
      )}

      <p className="text-gray-500 place-self-start mx-3"> {status} </p>
      <div>
        <div className="flex gap-2 p-1">
          <p className="text-gray-600 flex text-sm text-nowrap">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
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
          <p className="text-gray-600 flex gap-1 text-nowrap text-sm">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
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
        <div className="flex justify-center">
          {!status && (
            <button
             onClick={goToPage20}
            className="bg-black text-white rounded-full w-3/4 h-10 text-center my-2">
              View & Accept
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceBookingItem;
