import { useNavigate } from "react-router";

const OngoingJob = ({ job, job_status, Payment_status, color, onComplete }) => {
  const navigate = useNavigate();

  const isOngoing = job_status === "Ongoing";
  const isCompleted = job_status === "Completed";
  const isPaymentPending = !!Payment_status;

  return (
    <div
      className={`bg-white sm:w-full md:w-full md:p-4 md:text-xl lg:text-xl shadow rounded-3xl border-l-16 my-6 ${color} xs:max-w-xs`}
    >
      {/* Top Header */}
      <div className="flex justify-between p-2">
        <div className="flex gap-2">
          <h3 className="text-slate-600 font-bold text-lg md:text-xl text-nowrap">
            {job}
          </h3>
          <a
            href="#"
            onClick={() => navigate("/page29")}
            className="text-gray-600 underline lg:text-xl md:text-xl"
          >
            view
          </a>
        </div>

        {/* Top right time */}
        <div className="mx-3 p-1">
          <p className="relative text-gray-400 font-semibold text-nowrap text-xs md:text-sm lg:text-sm">
            Today, 09:30 AM
          </p>
        </div>
      </div>

      {/* Name Row */}
      <p className="flex justify-items-start p-1 gap-1 text-md">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="blue"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-icon lucide-circle"
          >
            <circle cx="12" cy="12" r="9" />
          </svg>
        </span>
        Rose
      </p>

      <div>
        {/* Active label only for ongoing non-payment jobs */}
        {isOngoing && !isPaymentPending && (
          <p className="place-self-start mx-3 font-semibold text-green-600">
            Active
          </p>
        )}

        {/* Payment pending warning */}
        {isOngoing && isPaymentPending && (
          <p className="text-red-600 flex items-start mx-1 p-1 gap-x-1">
            {Payment_status}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-badge-info-icon lucide-badge-info"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <line x1="12" x2="12" y1="16" y2="12" />
              <line x1="12" x2="12.01" y1="8" y2="8" />
            </svg>
          </p>
        )}

        {/* Calendar & clock: only for active ongoing jobs */}
        {isOngoing && !isPaymentPending && (
          <div className="flex gap-2 p-1 items-center">
            {/* Calendar SVG */}
            <p className="text-gray-600 flex gap-1 text-sm items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar-icon lucide-calendar text-red-500"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
              March 20, 2021
            </p>

            {/* Clock SVG */}
            <p className="text-gray-600 flex gap-1 text-sm text-nowrap items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-clock3-icon lucide-clock-3 text-yellow-500"
              >
                <path d="M12 6v6h4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              09.00 - 10.00 AM
            </p>
          </div>
        )}

        {/* Button */}
        <div className="flex justify-center mt-2">
          {isOngoing ? (
            isPaymentPending ? (
              <button
                onClick={() => navigate("/page29")}
                className="bg-black text-white w-3/4 rounded-full h-10 text-center shadow cursor-pointer my-2"
              >
                View
              </button>
            ) : (
              onComplete && (
                <button
                  onClick={onComplete}
                  className="bg-black text-white w-3/4 rounded-full h-10 text-center shadow cursor-pointer my-2"
                >
                  Mark Complete
                </button>
              )
            )
          ) : isCompleted ? (
            <button
              onClick={() => navigate("/page29")}
              className="bg-black text-white w-3/4 rounded-full h-10 text-center shadow cursor-pointer my-2"
            >
              View
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OngoingJob;
