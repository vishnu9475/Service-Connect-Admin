import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from "../componants/neja/AdminMain114";
import StatCard115 from "../componants/neja/StatCard115";
import ServiceHistory137 from "../componants/neja/ServiceHistory137";

import {
  FiBriefcase,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const Page116 = () => {
  const navigate = useNavigate();
    const handleView = (item) => {
      navigate("/combookingsdetails", { state: item });
    };
  
    const handleEdit = (item) => {
      navigate("/combookingsdetails", { state: item });
    };
  
  
    const handleDelete = (id) => {
      if (window.confirm("Are you sure you want to delete this franchisee?")) {
        alert("Delete logic here for ID: " + id);
      }
    };

  

  return (
    <div className="flex min-h-screen bg-[#f5f6ff]">

      {/* SIDEBAR */}
      <AdminSideMenu113 />

      {/* MAIN CONTENT */}
      <div className="flex-1 lg:ml-64 w-full overflow-x-hidden">

        <AdminMain114
          title="Service History"
          userName="Nabila"
          userRole="Admin"
          showSearch={false}
        >

          {/* STAT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">

            <StatCard115
              title="Total Jobs"
              value={932}
              Icon={FiBriefcase}
              iconBg="bg-indigo-100"
              iconColor="text-indigo-600"
              changeValue="+10%"
              changeColor="text-green-600"
            />

            <StatCard115
              title="Active Jobs"
              value={754}
              Icon={FiClock}
              iconBg="bg-orange-100"
              iconColor="text-orange-500"
              changeValue="-0.5%"
              changeColor="text-red-500"
            />

            <StatCard115
              title="Completed Jobs"
              value={754}
              Icon={FiCheckCircle}
              iconBg="bg-green-100"
              iconColor="text-green-600"
              changeValue="-0.5%"
              changeColor="text-red-500"
            />

          </div>

          {/* TABLE */}
          <div className="bg-white rounded-xl overflow-hidden">
            <ServiceHistory137 
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}

            />
          </div>

        </AdminMain114>

      </div>
    </div>
  );
};

export default Page116;
