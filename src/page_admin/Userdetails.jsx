import React from "react";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from  "../componants/neja/AdminMain114";
import UserDetailBanner from "../componants/arjun/UserDetailBanner";
import Pyment from "../componants/arjun/Pyement";
import RecentService from "../componants/arjun/RecentService";

const User_Details = () => {
  return (
    <div className="flex min-h-screen bg-[#f5f6ff] w-full overflow-x-hidden">
      
      {/* Sidebar */}
      <AdminSideMenu113 />

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen relative">
        
       
        <div className="mx-auto w-full max-w-[2560px] flex flex-col flex-1">
          
          <AdminMain114
            title="User Details"
            userName="Nabila"
            userRole="Admin"
            showSearch={true}
          >
           
            <div className="flex-1 min-h-screen bg-[#F8F9FD] p-4 sm:p-6 lg:p-8 2xl:p-12 transition-all duration-300">
              
              {/* MAIN LAYOUT GRID: 
                  Capped at 1800px for optimal readability of the payment table 
              */}
              <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 w-full items-start">
                
                {/* LEFT COLUMN: Profile and Payment (Occupies 2/3 of space) */}
                <div className="lg:col-span-2 flex flex-col gap-6 xl:gap-8 w-full">
                  <div className="w-full bg-white rounded-[24px] sm:rounded-[32px] shadow-sm overflow-hidden">
                    <UserDetailBanner />
                  </div>

                  {/* PAYMENT SECTION: 
                      Ensuring horizontal scroll is possible for the table on mobile 
                  */}
                  <div className="w-full bg-white rounded-[24px] sm:rounded-[32px] shadow-sm p-4 sm:p-8 border border-gray-50 h-auto">
                    <div className="w-full overflow-x-auto scrollbar-hide">
                      <Pyment />
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Recent Services (Occupies 1/3 of space) */}
                <div className="lg:col-span-1 w-full lg:sticky lg:top-24">
                  <div className="bg-white rounded-[24px] sm:rounded-[32px] shadow-sm overflow-hidden">
                    <RecentService />
                  </div>
                </div>
                
              </div>
            </div>
          </AdminMain114>
        </div>
      </div>
    </div>
  );
};

export default User_Details;