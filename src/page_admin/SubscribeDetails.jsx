import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from "../componants/neja/AdminMain114";
import SubscribeView from "../componants/midhun/SubscribeView";
const SubscribeDetails = () => {
  const navigate = useNavigate();
  const handleEdit = () => {
  navigate("/SubscribeEditPage", {
    state: {
      mode: "edit",
      franchise: location.state, 
     },
   });
  };
 
  return (
    <div className="flex min-h-screen bg-[#f5f6ff]">

      {/* SIDEBAR */}
      <AdminSideMenu113/>

      {/* MAIN AREA */}
      <div className="flex-1 lg:ml-64 w-full">
   
        <AdminMain114
          title="Subsribe User Detail"
          showSearch={true}
          userName="Nabila"
          userRole="Admin"
        >

          {/* CONTENT */}
          <SubscribeView 
            onEdit={handleEdit}
           
          />

        </AdminMain114>
     
      </div>
    </div>
  );
};

export default SubscribeDetails;