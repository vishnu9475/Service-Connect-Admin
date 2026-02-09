import React from "react";
import AdminSideMenu113 from "../componants/arjun/AdminSideMenu113";
import AdminMain114 from  "../componants/neja/AdminMain114";
import BookingCard from "../componants/arjun/book3";

const Book4 = () => {
  return (
    /* Added overflow-x-hidden to prevent horizontal scroll on mobile */
    <div className="flex min-h-screen bg-[#f5f6ff] w-full overflow-x-hidden">
      {/* Sidebar */}
      <AdminSideMenu113 />

      {/* Main Content Area: flex-col and relative ensure the dashboard stays grounded */}
      <div className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen relative">
        
        {/* 4K Limit Wrapper: Centers the entire dashboard on ultra-wide monitors */}
        <div className="mx-auto w-full max-w-[2560px] flex flex-col flex-1">
          
          {/* Header */}
          <AdminMain114
            title="INCOMPLETE BOOKING"
            userName="Nabila"
            userRole="Admin"
            showSearch={false}
          >
            {/* Content Body:
                - p-4 (mobile) -> 2xl:p-12 (4K) for dynamic spacing.
                - items-center keeps the BookingCard centered on the page.
            */}
            <div className="p-4 sm:p-6 lg:p-8 2xl:p-12 flex flex-col items-center flex-1">
              
              {/* - max-w-[1100px] ensures the card doesn't look stretched on high-res monitors.
                  - w-full ensures it takes up 100% of the space on mobile devices.
              */}
              <div className="w-full max-w-[1100px] transition-all duration-300">
                 <BookingCard 
                   rightStatusText="Accepted" 
                   rightStatusBg="bg-[#1B61F2]"
                 />
              </div>

            </div>
          </AdminMain114>
        </div>
      </div>
    </div>
  );
};

export default Book4;