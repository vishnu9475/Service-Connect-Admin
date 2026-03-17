import ServiceRequestItem from "./ServiceRequestItem.jsx";

const ServiceRequestList = () => {
  return (
    <>
      <div className="flex justify-center px-6 py-4">
        <div className=" flex flex-col justify items-center gap-3  xs:max-w-xs my-2 w-full mx-2 sm:p-4 md:p-5 lg:p-6">
          <ServiceRequestItem
            color="border-blue-500"
            title="Tap Repair"
            status="Pending"
          />
          <ServiceRequestItem
            color="border-green-500"
            title="Tap Repair"
            status="Opened"
          />
          <ServiceRequestItem
            color="border-indigo-500"
            title="Tap Repair"
            status="Pending"
          />

          <ServiceRequestItem
            color="border-gray-400"
            title="Tap Repair"
            status="Pending"
            lead_type="Open Lead"
          />

          <ServiceRequestItem
            color="border-red-500"
            title="Tap Repair"
            status="Opened"
            lead_type="Target Lead"
          />
        </div>
      </div>
    </>
  );
};

export default ServiceRequestList;