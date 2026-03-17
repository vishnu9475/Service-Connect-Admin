import React from "react";

const activities = [
  {
    name: "Papaya",
    message: "Booking status changed",
    time: "12 mins ago",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Papaya",
    message: "Booking status changed",
    time: "12 mins ago",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Papaya",
    message: "Booking status changed",
    time: "12 mins ago",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Papaya",
    message: "Booking status changed",
    time: "12 mins ago",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Papaya",
    message: "Booking status changed",
    time: "12 mins ago",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

const RecentActivityList = () => {
  return (
    <div className="px-7  md:px-10 lg:px-10 ">
      <div className="bg-white rounded-2xl shadow-md p-4 my-2 mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800">Recent Activity</h3>
          <button className="text-blue-600 text-sm font-medium">
            See more
          </button>
        </div>

        {/* Activity List */}
        <div className="space-y-3">
          {activities.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-600 text-white rounded-xl p-3 flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />

                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs opacity-90">{item.message}</p>
                </div>
              </div>

              <p className="text-xs opacity-80">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivityList;
