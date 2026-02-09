import React from "react";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaFileAlt, FaBell } from "react-icons/fa";

// IMPORT IMAGES
import pic1 from "../../assets/Dummy.jpg";
import pic2 from "../../assets/Dummy.jpg";
import pic3 from "../../assets/Dummy.jpg";

export default function AdminNotifications() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Aldrich&display=swap";
    document.head.appendChild(link);
  }, []);

  const aldrich = { fontFamily: "'Aldrich', sans-serif" };

  const [notifications, setNotifications] = useState([
    {
      title: "Distribution",
      subtitle: "Bende Rodriguez · DesignDrops · Mar 4",
      unread: true,
      avatar: pic1,
    },
    {
      title: "Assignments: 5 items overdue",
      subtitle: "Basecamp · Mar 3",
      unread: true,
      avatar: pic3,
    },
    {
      title:
        "Overdue by a week: Schedule first meeting between CS, Product, and Engineering",
      subtitle: "Basecamp · DesignDrops · Feb 24",
      unread: true,
      avatar: pic3,
    },
    {
      title:
        "Overdue by a week: Create schedule for meetings and deadlines",
      subtitle: "Basecamp · DesignDrops · Feb 24",
      unread: true,
      avatar: pic3,
    },
    {
      title: "Overdue by a week: Date Range Pickers",
      subtitle: "Basecamp · DesignDrops · Feb 24",
      unread: true,
      avatar: pic3,
    },
    {
      title: "Overdue by a week: Landing Page",
      subtitle: "Basecamp · DesignDrops · Feb 22",
      unread: true,
      avatar: pic3,
    },
    {
      title: "New in Basecamp: Steps",
      subtitle: "Announcement from Basecamp · Feb 15",
      unread: true,
      avatar: pic2,
    },
    {
      title: "Due soon: Sign In Page",
      subtitle: "Basecamp · DesignDrops · Feb 10",
      unread: true,
      avatar: pic3,
    },
    {
      title: "Overdue: Create list of UI components",
      subtitle: "Basecamp · DesignDrops · Feb 9",
      unread: true,
      avatar: pic3,
    },
  ]);

  const markAsRead = (index) => {
    setNotifications((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, unread: false } : item
      )
    );
  };

  const deleteNotification = (index) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  const editNotification = (item) => {
    alert(`Edit clicked for:\n${item.title}`);
  };

  return (
    <div className=" bg-gray-100 flex  sm:px-4 sm:py-6">
      
      {/* CARD */}
      <div className="w-full max-w-[760px] bg-white rounded-md p-6">

        {/* Header */}
        <div
          className="px-4 sm:px-6 py-4 text-sm font-semibold text-orange-500"
          style={aldrich}
        >
          Notifications
        </div>

        {/* Notification List */}
        {notifications.map((item, index) => (
          <div
            key={index}
            onClick={() => markAsRead(index)}
            className="
              flex justify-between gap-4
              px-4 sm:px-6 py-4
              hover:bg-gray-50 cursor-pointer
            "
          >
            {/* LEFT */}
            <div className="flex gap-3 flex-1 min-w-0">
              {/* AVATAR */}
              <div className="relative flex-shrink-0">
                <img
                  src={item.avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />

                {index === 0 ? (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                    <FaFileAlt className="text-white text-[9px]" />
                  </div>
                ) : (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#5856D6] rounded-full flex items-center justify-center">
                    <FaBell className="text-white text-[9px]" />
                  </div>
                )}
              </div>

              {/* TEXT */}
              <div className="min-w-0">
                <p
                  className="text-sm font-medium text-gray-800 leading-snug truncate"
                  style={aldrich}
                >
                  {item.title}
                </p>
                <p
                  className="text-xs text-gray-500 mt-1 truncate"
                  style={aldrich}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="flex items-center gap-3 flex-shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              {item.unread && (
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              )}

              <FaEdit
                onClick={() => editNotification(item)}
                className="text-gray-400 cursor-pointer hover:text-gray-600"
              />

              <FaTrash
                onClick={() => deleteNotification(index)}
                className="text-gray-400 cursor-pointer hover:text-gray-600"
              />
            </div>
          </div>
        ))}

        {/* Footer */}
        <div
          className="flex items-center justify-between px-4 sm:px-6 py-4 text-sm text-gray-500"
          style={aldrich}
        >
          <span>Previous notifications</span>
          <button className="text-blue-600 hover:underline">
            Show More
          </button>
        </div>

      </div>
    </div>
  );
}
