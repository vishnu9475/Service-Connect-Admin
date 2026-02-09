import React from "react";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from  "../componants/neja/AdminMain114";
import ComplaintsList from "../componants/arjun/complaintlist"; // Import the new component

const AdminComplaints = () => {
  return (
    /* Outer layout with overflow-x-hidden to ensure mobile swipes don't shake the page */
    <div className="flex min-h-screen bg-[#f5f6ff] w-full overflow-x-hidden">
      
      {/* Sidebar */}
      <AdminSideMenu113 />

      {/* Main Content Area: Responsive margin and full-height flex container */}
      <div className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen relative">
        
        {/* 4K Safety Wrapper: Limits the stretch on ultra-wide monitors (2560px cap) */}
        <div className="mx-auto w-full max-w-[2560px] flex flex-col flex-1">
          
          {/* Header */}
          <AdminMain114
            title="COMPLAINT MANAGEMENT"
            userName="Nabila"
            userRole="Admin"
            showSearch={true}
          >
            {/* Main Content Area 
                - p-4 for mobile
                - lg:p-8 for desktop
                - 2xl:p-12 for 4K to give the list breathing room
            */}
            <div className="p-4 sm:p-6 lg:p-8 2xl:p-12 flex-1">
              
              {/* max-w-[1600px] ensures the complaint list stays at a readable width 
                  while mx-auto keeps it perfectly centered
              */}
              <div className="max-w-[1600px] mx-auto w-full">
                
                {/* Calling the Complaints Component */}
                <div className="bg-white rounded-xl shadow-sm transition-all duration-300">
                  <ComplaintsList />
                </div>

              </div>
            </div>
          </AdminMain114>
        </div>
      </div>
    </div>
  );
};

export default AdminComplaints;