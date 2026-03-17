import React from "react";

const requests = [
  {
    title: "Bulb Change",
    user: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    title: "Bulb Change",
    user: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    title: "Bulb Change",
    user: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    title: "Bulb Change",
    user: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    title: "Bulb Change",
    user: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

const UserRequest = () => {
  return (
    <div className="px-7 -mt-1 md:px-10 lg:px-10 ">
      <div className="p-4 bg-white rounded-2xl shadow-md  mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 ">
          <h3 className="font-semibold text-gray-800">Requests</h3>
        </div>

        {/* Request List */}
        <div className="space-y-3">
          {requests.map((item, index) => (
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
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-xs opacity-90">{item.user}</p>
                </div>
              </div>

              <div className="text-right text-xs opacity-90">
                <p>{item.time}</p>
                <p>{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserRequest;
