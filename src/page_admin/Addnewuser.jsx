import React from "react";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from  "../componants/neja/AdminMain114";
import StudentDetails from "../componants/arjun/StudentDetails";

const Add_New_User = () => {
  return (
    /* 1. Added overflow-x-hidden to prevent horizontal bounce on mobile */
    <div className="flex min-h-screen bg-[#f5f6ff] w-full overflow-x-hidden">
      
      <AdminSideMenu113 />

      {/* 2. Used relative positioning and flex-1 to manage the main area layout */}
      <div className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen relative">
        
        {/* 3. Added a 4K boundary wrapper (max-width 2560px) */}
        <div className="mx-auto w-full max-w-[2560px] flex flex-col flex-1">
         
 <AdminMain114
            title="ADD NEW USER"
            userName="Nabila"
            userRole="Admin"
            showSearch={false}    // Shows the search bar
            showBell={true}      // Shows the notification bell
            showSettings={true}  // Shows the settings icon
            showProfile={true}   // Shows the profile section
            >
            {/* 4. Fluid padding: p-4 for mobile, p-6 for tablet, lg:p-8 for 4K */}
            <div className="p-4 sm:p-6 lg:p-8 flex-1">
              
              {/* 5. Main Content Card 
                  - Keep your rounded-[20px] and shadow
                  - max-width-[1475px] ensures the form stays readable 
                  - w-full ensures it shrinks for mobile
              */}
              <div className="w-full max-w-[1475px] mx-auto bg-white rounded-[20px] shadow-sm p-4 sm:p-6 lg:p-10">
                <StudentDetails />
              </div>

            </div>
          </AdminMain114>
        </div>
      </div>
    </div>
  );
};

export default Add_New_User;