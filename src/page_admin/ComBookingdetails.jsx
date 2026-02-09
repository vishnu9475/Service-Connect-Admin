import React from "react";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from "../componants/neja/AdminMain114";
import BookingDetails from "../componants/arjun/BookingDetails";
import BookingDetails128 from "../componants/arjun/BookingDetails128"; 

const ComBookingsDetails = () => {
  return (
    <div className="flex min-h-screen bg-[#f5f6ff] w-full overflow-x-hidden">
      
      <AdminSideMenu113 />

      <div className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen relative">
        
        <div className="mx-auto w-full max-w-[2560px] flex flex-col flex-1">
          
          <AdminMain114
            title="COMPLETED DETAILS"
            userName="Nabila"
            userRole="Admin"
            showSearch={true} 
          >
            <div className="p-4 sm:p-6 lg:p-8 2xl:p-12 flex-1">
              {/* White background container for both columns */}
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-10 mx-auto max-w-[1600px] flex flex-col lg:flex-row gap-8 items-start justify-start">
                
                {/* Left Component (Review/Availability) */}
                <div className="flex-1 w-full lg:border-r border-gray-100 lg:pr-8">
                  <BookingDetails />
                </div>

                {/* Right Component (User info, Invoice, Complaint, and ALL Status Selects) */}
                <div className="flex-1 w-full">
                  {/* Keep ONLY this. 
                    The dropdowns are now INSIDE BookingDetails128 
                  */}
                  <BookingDetails128 />
                </div>

              </div>
            </div>
          </AdminMain114>
        </div>
      </div>
    </div>
  );
};

export default ComBookingsDetails;