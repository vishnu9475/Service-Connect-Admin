import Compo78 from "./Combo78";

const RegisteredServiceList = () => {
  return (
    <>
      <div className="flex justify-center">
        <button class="w-4/6 flex  justify-center bg-black text-white mb-1 py-3 my-4 rounded-lg font-semibold  hover:bg-slate-700 transition-colors  items-center gap-2">
          <span class="text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-plus-icon lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </span>
          ADD NEW SERVICE
        </button>
      </div>

      <Compo78 service_name="House Electrical" service_status="Boost service" />
      <Compo78 service_name="Plumbing" service_status="Boost service" />
      <Compo78
        service_name="Landscaping"
        service_status="Boost service"
        lead_balance="Available Lead Balance : 42"
      />
      <Compo78
        service_name="Construction"
        service_disabled="Disabled due to insufficient lead balance"
      />
    </>
  );
};
export default RegisteredServiceList;