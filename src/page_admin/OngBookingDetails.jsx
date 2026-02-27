import React from "react";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from  "../componants/neja/AdminMain114";
import BookingCard from "../componants/arjun/book";

const Admin_Booking = () => {
  // THIS DATA CAN NOW COME FROM AN API
  const bookingData = {
    user: {
      name: "Karan Hope",
      role: "User",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
    },
    provider: {
      name: "Nazrul Islam",
      specialty: "Electrification 💪",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
      franchise: "SNS SOLUTIONS"
    },
    bookingId: "12aa21w",
    leftStatus: { text: "Requested", bg: "bg-[#1B61F2]" },
    rightStatus: { text: "Work in Progress", bg: "bg-[#FBBF24]" },
    details: {
      title: "Bulb Change",
      description: "Bulb Change required for the main hallway. Please bring warm white LED bulbs.",
      location: "North Paravoor, Eravam",
      media: [
        "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=100",
        "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=100"
      ]
    },
    availability: {
      fromDate: "Jun 17, 2024", fromTime: "9:41 AM",
      toDate: "Jun 11, 2024", toTime: "6:00 PM"
    },
    appointment: { date: "Jun 10, 2024", time: "10:00 AM" },
    invoice: {
      items: [{ desc: "Bulb Change", qty: 1, price: 300 }],
      grandTotal: 300,
      terms: "Valid up to 1 month"
    },
    requirements: ["Provide Ladder", "Bulb should be provided"],
    isDeclined: false
  };

  return (
    /* Outer layout with overflow protection */
    <div className="flex min-h-screen bg-[#f5f6ff] w-full overflow-x-hidden">
      <AdminSideMenu113 />
      
      <div className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen relative">
        
        {/* 4K Safety Wrapper to keep content centered on ultra-wide screens */}
        <div className="mx-auto w-full max-w-[2560px] flex flex-col flex-1">
          
          <AdminMain114 title="ONGOING DETAILS" userName="Nabila" userRole="Admin" showSearch={false}>
            
            {/* 1. Increased vertical padding for large screens (2xl:py-12)
                2. items-center keeps the BookingCard centered
            */}
            <div className="p-4 sm:p-6 lg:p-8 2xl:py-12 flex flex-col items-center flex-1">
              
              {/* 3. The Card Wrapper:
                  - max-w-[1200px] ensures the card doesn't get too wide to read.
                  - w-full ensures it scales down for mobile.
              */}
              <div className="w-full max-w-[1200px] transition-all duration-300">
                 <BookingCard {...bookingData} />
              </div>

            </div>
          </AdminMain114>
        </div>
      </div>
    </div>
  );
};

export default Admin_Booking;