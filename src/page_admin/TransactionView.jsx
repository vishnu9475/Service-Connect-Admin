import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from "../componants/neja/AdminMain114";
import TransactionView from "../componants/neja/TransactionView";

const TransactionViewPage = () => {
const navigate = useNavigate();
 const handleBack = () => {
    navigate(-1); 
  };
  
  return (
    <div className="flex min-h-screen bg-[#f5f6ff]">

      {/* SIDEBAR */}
      <AdminSideMenu113/>

      {/* MAIN AREA */}
      <div className="flex-1 lg:ml-64 w-full">
   
        <AdminMain114
          title="Transaction Details"
          showSearch={true}
          userName="Nabila"
          userRole="Admin"
        >

          {/* CONTENT */}
          <TransactionView
          onBack={handleBack}
          />

        </AdminMain114>
     
      </div>
    </div>
  );
};

export default TransactionViewPage;
