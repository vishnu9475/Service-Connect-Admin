import { useState } from "react";

import ServiceRequestItem from "./LeadsRequestItem.jsx";

const LeadsRequestList = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      color: "border-blue-500",
      title: "Tap Repair", 
      status: "Pending",
    },
    {
      id: 2,
      color: "border-green-500",
      title: "Tap Repair",
      status: "Opened",
    },
    {
      id: 3,
      color: "border-indigo-500",
      title: "Tap Repair",
      status: "Pending",
    }, 
    {
      id: 4,
      color: "border-gray-400",
      title: "Tap Repair",
      status: "Pending",
      lead_type: "Open Lead",
    },
    {
      id: 5,
      color: "border-red-500",
      title: "Tap Repair",
      status: "Opened",
      lead_type: "Target Lead",
    },
  ]);

  const handleRemove = (id) => {
    setRequests((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="flex justify-center px-4 py-4">
      <div className="flex flex-col items-center gap-3 xs:max-w-xs my-2 w-full mx-2 sm:p-4 md:p-5 lg:p-6">
        {requests.map((item) => (
          <ServiceRequestItem
            key={item.id}
            {...item}
            onRemove={() => handleRemove(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default LeadsRequestList;