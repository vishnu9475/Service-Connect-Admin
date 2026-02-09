
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ServiceProviderDetails() {
  const [provider] = useState({
    name: "Service Provider Name",
    id: "SP-3543324",
    status: "ACTIVE",
    image: null,
    description:
      "We are a professional service provider delivering reliable and customer-focused solutions with a commitment to quality and long-term value.",
    service:
      "We provide installation, maintenance, technical support, and customized service solutions tailored to client requirements, ensuring efficiency, reliability, and timely delivery.",
    address: "Santha Street, Kanoor",
    phone: "1244557875",
    email: "provider@email.com",
    whatsapp: "125547883",
  });

  const navigate = useNavigate();

  const statusStyles = {
    ACTIVE: {
      bg: "bg-green-100",
      text: "text-green-700",
      dot: "bg-green-600",
      label: "Active",
    },
    NOTACTIVE: {
      bg: "bg-gray-200",
      text: "text-gray-600",
      dot: "bg-gray-500",
      label: "Not Active",
    },
    SUSPENDED: {
      bg: "bg-red-100",
      text: "text-red-700",
      dot: "bg-red-600",
      label: "Suspended",
    },
  };

  const currentStatus = statusStyles[provider.status];

  return (
    <div className="bg-[#F3F4FF] min-h-[70vh] flex justify-center p-4 md:p-6">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-sm p-4 md:p-8">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

          {/* LEFT: IMAGE + INFO */}
          <div className="flex flex-col sm:flex-row gap-6">

            {/* IMAGE */}
            <div className="w-full sm:w-56 h-40 rounded-2xl overflow-hidden bg-indigo-100">
              {provider.image ? (
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-indigo-400 text-sm">
                  No Image
                </div>
              )}
            </div>

            {/* INFO */}
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-indigo-900 font-semibold text-lg">
                  {provider.name}
                </h2>

                <span
                  className={`flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full 
                  ${currentStatus.bg} ${currentStatus.text}`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${currentStatus.dot}`}
                  />
                  {currentStatus.label}
                </span>
              </div>

              <p className="text-sm text-gray-400 mt-1">
                #Id: {provider.id}
              </p>

              <p className="text-sm text-gray-400 mt-4 max-w-md leading-relaxed break-words">
                {provider.description}
              </p>
            </div>
          </div>

          {/* EDIT BUTTON */}
          <button
            onClick={() => navigate("/addserviceprovider")}
            className="self-start md:self-auto px-6 py-2 bg-indigo-600 text-white rounded-full text-sm cursor-pointer hover:bg-indigo-700 transition-colors"
          >
            Edit
          </button>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* SERVICE */}
          <div>
            <h3 className="text-indigo-900 font-semibold mb-3">
              Service
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed break-words">
              {provider.service}
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-indigo-900 font-semibold mb-3">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-gray-400">
              <ContactField label="Address" value={provider.address} />
              <ContactField label="Contact" value={provider.phone} />
              <ContactField label="Email" value={provider.email} />
              <ContactField label="Whatsapp" value={provider.whatsapp} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ---------- HELPER ---------- */
const ContactField = ({ label, value }) => (
  <p>
    <span className="font-medium text-gray-500">{label} :</span>{" "}
    {value}
  </p>
);

export default ServiceProviderDetails;
