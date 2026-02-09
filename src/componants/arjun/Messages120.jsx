import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigate hook

const Messages = ({ title = "Messages", items = [
    {
      name: "Arjun",
      time: "2 min ago",
      text: "Hey, is the booking confirmed?",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Rahul",
      time: "10 min ago",
      text: "Please update me on the status.",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Asha",
      time: "1 hr ago",
      text: "Thank you for the quick response!",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "Kiran",
      time: "Yesterday",
      text: "Can we reschedule the meeting?",
      avatar: "https://i.pravatar.cc/100?img=4",
    },
    {
      name: "Meera",
      time: "Yesterday",
      text: "The payment has been processed.",
      avatar: "https://i.pravatar.cc/100?img=45",
    }
  ], onViewMore }) => {
  
  const navigate = useNavigate();

  const handleViewMore = () => {
    // If a custom function was passed as a prop, run it
    if (onViewMore) {
      onViewMore();
    }
    // Redirect to the /Mfv page
    navigate("/adminmessages");
  };

  return (
    <div className="w-full bg-white rounded-[30px] p-6 shadow-xl shadow-gray-100 font-sans min-h-[450px] flex flex-col justify-between">
      <div>
        {/* Title */}
        <h2 className="text-xl font-bold text-[#2d2d6e] mb-6">
          {title}
        </h2>

        {/* Message List */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index}>
              <div className="flex items-center gap-4 group cursor-pointer">
                {/* Avatar Container */}
                <div className="relative flex-shrink-0">
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover shadow-sm group-hover:ring-2 ring-indigo-100 transition-all"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#C9C6F5] flex items-center justify-center text-white font-bold">
                      {item.name.charAt(0)}
                    </div>
                  )}
                  {/* Status Indicator */}
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                </div>

                {/* Content Area */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <h3 className="text-[15px] font-bold text-[#2E2E5F] truncate pr-2">
                      {item.name}
                    </h3>
                    <span className="text-[11px] text-gray-400 whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 truncate">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Subtle Divider - Only show if not the last item */}
              {index !== items.length - 1 && (
                  <div className="border-b border-gray-50 mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6">
        <button 
          type="button"
          onClick={handleViewMore}
          className="w-full py-3.5 rounded-2xl bg-[#F4F4FF] text-[#4F46B5] font-bold text-sm hover:bg-[#E8E8FF] transition-all duration-200 active:scale-[0.98]"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Messages;