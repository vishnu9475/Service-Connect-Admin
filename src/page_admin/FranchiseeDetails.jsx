import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from "../componants/neja/AdminMain114";
import FranchiseDetails133 from "../componants/neja/FranchiseDetails133";

const Page113 = () => {
  const navigate = useNavigate();
  const handleEdit = () => {
  navigate("/franchiseeForm", {
    state: {
      mode: "edit",
      franchise: location.state, 
     },
   });
  };
  const handleDashboard = () => {
    navigate("/franchiseeDashboard");
  };
  return (
    <div className="flex min-h-screen bg-[#f5f6ff]">

      {/* SIDEBAR */}
      <AdminSideMenu113/>

      {/* MAIN AREA */}
      <div className="flex-1 lg:ml-64 w-full">
   
        <AdminMain114
          title="Franchisee Details"
          showSearch={true}
          userName="Nabila"
          userRole="Admin"
        >

          {/* CONTENT */}
          <FranchiseDetails133
            onEdit={handleEdit}
            onViewDashboard={handleDashboard}
          />

        </AdminMain114>
     
      </div>
    </div>
  );
};

export default Page113;
