import { useNavigate } from "react-router";

const ServiceRequest = () => {
  const navigate = useNavigate();
  const goToPage74 = () => {
    navigate("/page74"); // 👈 route path
  };
  return (
    <div className="flex justify-center py-2">
      <div className="bg-white rounded-2xl w-91 h-35 flex-col text-center my-2 p-2 border-l-16  border-l-indigo-600 shadow">
        <div className="flex  justify items-center gap-2">
          <h3 className="text-slate-600 font-bold text-lg">Tap Repair</h3>

          <a 
          onClick={goToPage74}
          className="text-blue-400">
            view
          </a>

          <p className="relative mx-10">
            <span>Today,09:30 AM</span>
            <span className="absolute right p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                width="18"
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

        <p className="flex justify-items-start p-1 gap-1">
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

        <div>
          <div className="flex gap-2 p-1">
            <p className="text-gray-600 flex gap-1">
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
            <p className="text-gray-600 flex gap-1">
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

          <div className="flex gap-2 p-1">
            <p className="text-gray-600 flex gap-1">
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
            <p className="text-gray-600 flex gap-1">
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
        </div>
      </div>
    </div>
  );
};
export default ServiceRequest;
