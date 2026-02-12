import React, { useState } from "react";
import { FiUser, FiTool, FiShield } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const RoleSelect = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const roles = [
    { id: "user", title: "User", icon: FiUser },
    { id: "service", title: "Service", icon: FiTool },
    { id: "admin", title: "Admin", icon: FiShield },
  ];

  const handleContinue = () =>{
    if(!selected) return;

    if (selected === "user") {
        navigate("/user");
    } else if (selected === "service") {
        navigate("/service");
    } else if (selected === "admin") {
        navigate("/admin")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f6ff] px-6 relative overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-200 rounded-full blur-3xl opacity-30 -top-40 -left-40"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-200 rounded-full blur-3xl opacity-30 bottom-0 right-0"></div>

      <div className="relative w-full max-w-6xl text-center">

        <h1 className="text-4xl font-semibold text-gray-800 mb-3">
          Choose Your Portal
        </h1>

        <p className="text-gray-500 mb-14">
          Select your role to continue to the appropriate dashboard
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {roles.map((role) => {
            const Icon = role.icon;
            const active = selected === role.id;

            return (
              <div
                key={role.id}
                onClick={() => setSelected(role.id)}
                className={`relative bg-white rounded-2xl p-10 cursor-pointer
                transition-all duration-300
                ${
                  active
                    ? "shadow-2xl scale-[1.03] border border-indigo-500"
                    : "shadow-md hover:shadow-xl hover:-translate-y-2"
                }`}
              >
                {/* Icon Circle */}
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all
                  ${
                    active
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "bg-indigo-100 text-indigo-600"
                  }`}
                >
                  <Icon className="text-3xl" />
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {role.title}
                </h2>

                <p className="text-gray-500 text-sm">
                  Access the {role.title} dashboard and manage operations
                </p>

                {/* Active indicator line */}
                {active && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 rounded-b-2xl"></div>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={handleContinue}
          disabled={!selected}
          className={`mt-14 px-12 py-3 rounded-xl font-medium text-lg transition
          ${
            selected
              ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue
        </button>

      </div>
    </div>
  );
};

export default RoleSelect;
