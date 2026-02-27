import React from "react";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from  "../componants/neja/AdminMain114";
import BookingCard from "../componants/arjun/book2";

const declinedBookings = [
  {
    bookingId: "12aa21w",
    franchiseName: "SNS SOLUTIONS",

    user: {
      name: "Karan Hope",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop",
      location: "North Paravoor, Eravam",
    },

    provider: {
      name: "Nazrul Islam",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&fit=crop",
      skill: "Electrification 💪",
    },

    leftStatus: {
      text: "Requested",
      bg: "bg-[#1B61F2]",
    },

    rightStatus: {
      text: "Declined",
      bg: "bg-[#E11D48]",
    },

    service: {
      title: "Bulb Change",
      description:
        "Bulb change required for the main hallway and kitchen.",
    },

    media: [
      {
        type: "image",
        thumbnail:
          "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=100&h=100&fit=crop",
      },
      {
        type: "image",
        thumbnail:
          "https://images.unsplash.com/photo-1581091870627-3a2c1f0f3f0a?q=80&w=100&h=100&fit=crop",
      },
      {
        type: "video",
        thumbnail:
          "https://images.unsplash.com/photo-1602526219049-8a3d0b5a2c71?q=80&w=100&h=100&fit=crop",
      },
    ],

    availability: [
      {
        label: "From",
        date: "Jun 10, 2024",
        time: "9:41 AM",
      },
      {
        label: "To",
        date: "Jun 10, 2024",
        time: "12:30 PM",
      },
      
    ],
  },
];

const Book2 = () => {
  return (
    /* Added overflow-x-hidden and w-full for cross-device stability */
    <div className="flex min-h-screen bg-[#f5f6ff] w-full overflow-x-hidden">
      {/* Sidebar */}
      <AdminSideMenu113 />

      {/* Main Content: Ensure relative positioning and min-height */}
      <div className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen relative">
        
        {/* 4K Limit Wrapper: Centers everything on ultra-wide screens */}
        <div className="mx-auto w-full max-w-[2560px] flex flex-col flex-1">
          <AdminMain114
            title="DECLINED BOOKINGS"
            userName="Nabila"
            userRole="Admin"
            showSearch={false}
          >
            {/* - Fluid padding for better spacing on 4K (lg:p-8, 2xl:p-12)
              - items-center keeps the card stack centered
            */}
            <div className="p-4 sm:p-6 lg:p-8 2xl:p-12 flex flex-col items-center gap-6 flex-1">
              
              {/* - max-w-[1100px] maintains the card's visual integrity
                - w-full allows it to shrink for mobile
              */}
              <div className="w-full max-w-[1100px] space-y-6 lg:space-y-10">
                {declinedBookings.map((booking) => (
                  <div key={booking.bookingId} className="w-full transition-transform duration-300">
                    <BookingCard {...booking} />
                  </div>
                ))}
              </div>

            </div>
          </AdminMain114>
        </div>
      </div>
    </div>
  );
};

export default Book2;