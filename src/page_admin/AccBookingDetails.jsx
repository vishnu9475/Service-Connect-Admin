import React from "react";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from   "../componants/neja/AdminMain114";
import BookingCard from "../componants/arjun/book";

const Book3 = () => {
  // Move all hardcoded data here. 
  // This makes it easy to replace with an API call (e.g., fetch('/api/bookings/123'))
  const acceptedBookingData = {
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
    rightStatus: { text: "Accepted", bg: "bg-[#1B61F2]" }, // Blue for Accepted
    details: {
      title: "Bulb Change",
      description: "Bulb Change required for the main hallway and kitchen. Standard LED bulbs.",
      location: "North Paravoor, Eravam",
      media: [
        "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=100",
        "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=100"
      ]
    },
    availability: {
      fromDate: "Jun 10, 2024", fromTime: "9:41 AM",
      toDate: "Jun 10, 2024", toTime: "5:00 PM"
    },
    appointment: { date: "Jun 12, 2024", time: "10:30 AM" },
    invoice: {
      items: [{ desc: "Bulb Change Service", qty: 1, price: 300 }],
      grandTotal: 300,
      terms: "Valid up to 1 month"
    },
    requirements: ["Provide Ladder"],
    isDeclined: false // Since this is Accepted
  };

  return (
    /* Added overflow control and full width for 4K stability */
    <div className="flex min-h-screen bg-[#f5f6ff] w-full overflow-x-hidden">
      <AdminSideMenu113 />

      {/* Main Content: Responsive margin and relative positioning */}
      <div className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen relative">
        
        {/* 4K Limit Wrapper: Centers the dashboard on ultra-wide displays */}
        <div className="mx-auto w-full max-w-[2560px] flex flex-col flex-1">
          <AdminMain114
            title="ACCEPTED BOOKING"
            userName="Nabila"
            userRole="Admin"
            showSearch={false}
          >
            {/* 1. p-4 (mobile) -> lg:p-10 (4K) for better visual balance.
               2. flex-1 and items-center to keep the card perfectly centered.
            */}
            <div className="p-4 sm:p-6 lg:p-10 flex flex-col items-center flex-1">
              
              {/* 3. The Card Container:
                    - max-w-[1100px] ensures the details stay easy to read.
                    - w-full ensures it doesn't break on small iPhone screens.
              */}
              <div className="w-full max-w-[1100px] transition-all duration-300">
                 {/* Spread the data object as props */}
                 <BookingCard {...acceptedBookingData} />
              </div>

            </div>
          </AdminMain114>
        </div>
      </div>
    </div>
  );
};

export default Book3;