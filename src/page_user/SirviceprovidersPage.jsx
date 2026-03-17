import { FaUserTie, FaUserAlt } from "react-icons/fa";
import Component4 from "../componants_user/Component4";
import { Link } from "react-router-dom";

const providers = [
  { id: 1, name: "John", role: "Plumber", path: "/U17_PROVIDER_PROFILE", icon: <FaUserTie size={32} /> },
  { id: 2, name: "Alex", role: "Electrician", path: "/U17_PROVIDER_PROFILE", icon: <FaUserAlt size={32} /> },
  { id: 3, name: "Emma", role: "Cleaner", path: "/U17_PROVIDER_PROFILE", icon: <FaUserAlt size={32} /> },
  { id: 4, name: "Chris", role: "Mechanic", path: "/U17_PROVIDER_PROFILE", icon: <FaUserTie size={32} /> },
  { id: 5, name: "Sophia", role: "Painter", path: "/U17_PROVIDER_PROFILE", icon: <FaUserAlt size={32} /> },
  { id: 6, name: "Daniel", role: "Carpenter", path: "/U17_PROVIDER_PROFILE", icon: <FaUserTie size={32} /> },
  { id: 7, name: "Olivia", role: "AC Technician", path: "/U17_PROVIDER_PROFILE", icon: <FaUserAlt size={32} /> },
];

export default function SirviceProvidersPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      
      {/* Header */}
      <div className="w-full">
        <Component4
          title="ALL Services Providers"
          showSearch={true}
          theme="black"
        />
      </div>

      {/* Grid Section */}
      <div className="py-4 md:px-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {providers.map((provider) => (
            <Link
              key={provider.id}
              to={provider.path}
              className="bg-white rounded-xl p-4 flex flex-col items-center shadow-md shadow-gray-500 cursor-pointer hover:scale-105 transition duration-300"
            >
              <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center">
                <span className="text-white">{provider.icon}</span>
              </div>

              <h3 className="mt-2 text-sm font-semibold">
                {provider.name}
              </h3>

              <p className="text-xs text-gray-500">
                {provider.role}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}