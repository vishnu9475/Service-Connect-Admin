import React from "react";

const FranchiseDetails133 = ({
  name = "Franchisee Name",
  id = "#Id:3543324",
  status = "Active", // "Active" | "Inactive"
  // revenue = "10,00,500",
  // branches = 2,
  // serviceProviders = 2,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  contact = {
    address: "Santha Street, Kanoor",
    phone: "1244557875",
    email: "santha@email.com",
    whatsapp: "125547883",
  },
  onEdit = () => {},
  onViewDashboard = () => {},
}) => {
  const isActive = status === "Active";

  return (
    <div className="w-full bg-[#F5F6FF] p-4 sm:p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 sm:p-8">

        {/* TOP SECTION */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* IMAGE */}
          <div className="w-full sm:w-55 h-35 sm:h-40 bg-[#C8C4F2] rounded-xl" />

          {/* INFO */}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D6E]">
                  {name}
                </h2>

                <p className="text-sm text-gray-400">{id}</p>

                {/* STATUS UNDER ID */}
                <span
                  className={`inline-block mt-2 px-4 py-1 text-xs font-medium rounded-full ${
                    isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-600"
                  }`}
                >
                  {status}
                </span>
              </div>

              <button
                onClick={onEdit}
                className="px-8 py-2 text-sm bg-[#4F46B5] text-white rounded-full"
              >
                Edit
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-500 max-w-xl">
              {description}
            </p>
          </div>
        </div>

        {/* STATS SECTION */}
        {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#F5F6FF] rounded-xl p-4">
            <p className="text-xs text-gray-400">Revenue</p>
            <p className="text-lg font-semibold text-[#2D2D6E]">
              ₹ {revenue}
            </p>
          </div>

          <div className="bg-[#F5F6FF] rounded-xl p-4">
            <p className="text-xs text-gray-400">Branches</p>
            <p className="text-lg font-semibold text-[#2D2D6E]">
              {branches}
            </p>
          </div>

          <div className="bg-[#F5F6FF] rounded-xl p-4">
            <p className="text-xs text-gray-400">Service Providers</p>
            <p className="text-lg font-semibold text-[#2D2D6E]">
              {serviceProviders}
            </p>
          </div>
        </div> */}

        {/* DETAILS SECTION */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* ABOUT */}
          <div>
            <h3 className="text-md font-semibold text-[#2D2D6E] mb-3">
              About
            </h3>
            <p className="text-sm text-gray-500">{about}</p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-md font-semibold text-[#2D2D6E] mb-3">
              Contact
            </h3>
            <div className="space-y-4 text-sm text-gray-500">
              <p>Address : {contact.address}</p>
              <p>Contact : {contact.phone}</p>
              <p>Email : {contact.email}</p>
              <p>Whatsapp : {contact.whatsapp}</p>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-16 flex justify-end">
          <button
            onClick={onViewDashboard}
            className="px-6 py-2 bg-[#4F46B5] text-white text-sm rounded-lg"
          >
            VIEW DASHBOARD
          </button>
        </div>

      </div>
    </div>
  );
};

export default FranchiseDetails133;
