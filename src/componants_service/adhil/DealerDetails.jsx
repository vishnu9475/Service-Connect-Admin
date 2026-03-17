import React, { useState } from "react";

function DealerDetails() {
  /* ===================== */
  /* 🔹 DEALER STATE       */
  /* ===================== */
  const [dealer, setDealer] = useState({
    name: "Dealer Name",
    id: "3543324",
    status: "ACTIVE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    address: "Santha Street, Kanoor",
    phone: "1244557875",
    email: "Santha@email.com",
    whatsapp: "125547883",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState(dealer);

 
  const startEdit = () => {
    setTempData(dealer);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  const saveEdit = () => {
    setDealer(tempData);
    setIsEditing(false);
  };

  const handleChange = (key, value) => {
    setTempData((prev) => ({ ...prev, [key]: value }));
  };

 
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

  const currentStatus = statusStyles[dealer.status];

  return (
    <div className="bg-[#F3F4FF] min-h-screen flex justify-center p-4 md:p-6">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-sm p-4 md:p-8">

        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

          <div className="flex flex-col sm:flex-row gap-6">

            <div className="w-full sm:w-56 h-40 bg-indigo-200 rounded-2xl" />

            <div>
              <div className="flex items-center gap-3">
                {isEditing ? (
                  <input
                    value={tempData.name}
                    onChange={(e) =>
                      handleChange("name", e.target.value)
                    }
                    className="text-lg font-semibold text-indigo-900 border-b outline-none"
                  />
                ) : (
                  <h2 className="text-indigo-900 font-semibold text-lg">
                    {dealer.name}
                  </h2>
                )}

                {!isEditing && (
                  <span
                    className={`flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full 
                    ${currentStatus.bg} ${currentStatus.text}`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${currentStatus.dot}`}
                    ></span>
                    {currentStatus.label}
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-400 mt-1">
                #Id:{dealer.id}
              </p>

              {isEditing ? (
                <textarea
                  value={tempData.description}
                  onChange={(e) =>
                    handleChange("description", e.target.value)
                  }
                  className="mt-4 w-full text-sm border rounded-md p-2 outline-none"
                />
              ) : (
                <p className="text-sm text-gray-400 mt-4 max-w-md leading-relaxed">
                  {dealer.description}
                </p>
              )}
            </div>
          </div>

          {isEditing ? (
            <div className="flex gap-3">
              <button
                onClick={saveEdit}
                className="px-6 py-2 bg-indigo-600 text-white rounded-full text-sm"
              >
                Save
              </button>
              <button
                onClick={cancelEdit}
                className="px-6 py-2 border border-gray-400 text-gray-600 rounded-full text-sm"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={startEdit}
              className="self-start md:self-auto px-6 py-2 bg-indigo-600 text-white rounded-full text-sm"
            >
              Edit
            </button>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          <div>
            <h3 className="text-indigo-900 font-semibold mb-3">
              About
            </h3>

            {isEditing ? (
              <textarea
                value={tempData.about}
                onChange={(e) =>
                  handleChange("about", e.target.value)
                }
                className="w-full text-sm border rounded-md p-2 outline-none"
              />
            ) : (
              <p className="text-sm text-gray-400 leading-relaxed">
                {dealer.about}
              </p>
            )}
          </div>

          <div>
            <h3 className="text-indigo-900 font-semibold mb-3">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-gray-400">
              <ContactField
                label="Address"
                value={isEditing ? tempData.address : dealer.address}
                isEditing={isEditing}
                onChange={(v) => handleChange("address", v)}
              />
              <ContactField
                label="Contact"
                value={isEditing ? tempData.phone : dealer.phone}
                isEditing={isEditing}
                onChange={(v) => handleChange("phone", v)}
              />
              <ContactField
                label="Email"
                value={isEditing ? tempData.email : dealer.email}
                isEditing={isEditing}
                onChange={(v) => handleChange("email", v)}
              />
              <ContactField
                label="Whatsapp"
                value={isEditing ? tempData.whatsapp : dealer.whatsapp}
                isEditing={isEditing}
                onChange={(v) => handleChange("whatsapp", v)}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

const ContactField = ({ label, value, isEditing, onChange }) => (
  <p>
    <span className="font-medium text-gray-500">
      {label} :
    </span>{" "}
    {isEditing ? (
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-b outline-none ml-2"
      />
    ) : (
      value
    )}
  </p>
);

export default DealerDetails;
