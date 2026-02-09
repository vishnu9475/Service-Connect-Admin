import React from "react";
import { useNavigate } from "react-router-dom";
import { FiUsers, FiUserCheck, FiUserX } from "react-icons/fi";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from "../componants/neja/AdminMain114";
import StatCard115 from "../componants/neja/StatCard115";
import FranchiseList132 from "../componants/neja/FranchiseList132";

const Page112 = () => {
  const navigate = useNavigate();
  const handleView = (item) => {
    navigate("/franchiseeDetails", { state: item });
  };

  const handleEdit = (item) => {
  navigate("/franchiseeForm", {
    state: {
      mode: "edit",
      franchise: item,
    },
  });
};

  const handleAdd = () => {
    navigate("/franchiseeForm");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this franchisee?")) {
      alert("Delete logic here for ID: " + id);
    }
  };

  const handleAddFranchiseType = () => {
    navigate("/franchiseeCategory");
  };
  
  return (
    <div className="flex min-h-screen bg-[#f5f6ff]">

      <AdminSideMenu113/>

      <div className="flex-1 lg:ml-64 w-full overflow-x-hidden">
      
        <AdminMain114
          title="Franchisee"
          userName="Nabila"
          userRole="Admin"
          showSearch={false}
        >

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
            <StatCard115
              title="Total Franchisees"
              value={932}
              Icon={FiUsers}
              changeValue="+10%"
              changeColor="text-green-600"
            />

            <StatCard115
              title="Active Franchisees"
              value={754}
              Icon={FiUserCheck}
              iconBg="bg-green-100"
              iconColor="text-green-600"
              changeValue="-0.5%"
              changeColor="text-red-600"
            />

            <StatCard115
              title="Inactive Franchisees"
              value={754}
              Icon={FiUserX}
              iconBg="bg-orange-100"
              iconColor="text-orange-600"
              changeValue="-0.5%"
              changeColor="text-red-600"
            />
          </div>

          <div className="bg-white rounded-xl overflow-hidden">
            <FranchiseList132
              onView={handleView}
              onEdit={handleEdit}
              onAdd={handleAdd}
              onDelete={handleDelete}
              onAddFranchiseType={handleAddFranchiseType} 
            />
          </div>

        </AdminMain114>
        
      </div>
    </div>
  );
};


export default Page112;
