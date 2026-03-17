import ServiceBookingItem from "./ServiceBookingItem.jsx";

const ServiceBookingList = () => {
  return (
    <div className=" bg-gray-300 max-h-screen max-w-full p-4">
      <ServiceBookingItem status="Pending" color="border-blue-500" />
      <ServiceBookingItem color="border-blue-500" />
    </div>
  );
};
export default ServiceBookingList;
