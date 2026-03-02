// import React from 'react'

// const SubscribeEditPage = () => {
//   return (
//     <div>SubscribeEditPage</div>
//   )
// }

// export default SubscribeEditPage

import React from "react";
import { useNavigate,useLocation } from "react-router-dom";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from "../componants/neja/AdminMain114";
import SubscribeEditComp from "../componants/midhun/SubscribeEditComp";

const SubscribeEditPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mode = location.state?.mode || "new";
  const franchise = location.state?.franchise || null;

  const handlePay = () => {
    if (mode === "edit") {
      navigate("/franchiseeDetails", { state: franchise });
    } else {
      navigate("/payoutschedule");
    }
  };
  
  return (
    <div className="flex min-h-screen bg-[#F5F6FF]  w-full overflow-x-hidden">

      {/* SIDEBAR */}
      <AdminSideMenu113 />

      {/* MAIN CONTENT */}
      <div className="flex-1 lg:ml-64">
        <AdminMain114
          title="Edit"
          userName="Nabila"
          userRole="Admin"
          showSearch={false}
        >
          {/* CONTENT GRID */}
          <div className="flex flex-col xl:flex-row gap-3 xl:gap-4">

            {/* LEFT : TYPE CARD */}
           

            {/* RIGHT : FORM CARD */}
            <div className="flex-1 bg-white rounded-[20px] min-w-0 overflow-hidden">
              <SubscribeEditComp
              mode={mode}
              onPay={handlePay}
              
              />
            </div>

          </div>
        </AdminMain114>
      </div>

    </div>
  );
};

export default SubscribeEditPage;
