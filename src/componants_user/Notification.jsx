import React from "react";
import {
  LayoutGrid,
  Feather,
  Zap,
  CreditCard,
  User,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const notifications = [
  {
    date: "Today",
    items: [
      {
        title: "New Category Course.!",
        desc: "New the 3D Design Course is Available.",
        icon: <LayoutGrid size={18} />,
      },
      {
        title: "New Category Course.!",
        desc: "New the 3D Design Course is Available.",
        icon: <Feather size={18} />,
      },
      {
        title: "Today's Special Offers",
        desc: "You have made a Course Payment.",
        icon: <Zap size={18} />,
      },
    ],
  },
  {
    date: "Yesterday",
    items: [
      {
        title: "Credit Card Connected.!",
        desc: "Credit Card has been Linked.!",
        icon: <CreditCard size={18} />,
      },
    ],
  },
  {
    date: "Nov 20, 2022",
    items: [
      {
        title: "Account Setup Successful.!",
        desc: "Your Account has been Created.",
        icon: <User size={18} />,
      },
    ],
  },
];

const Notifications = () => {


  return (
    <div className="min-h-screen bg-gray-200 md:px-8">
      <div className="p-4 space-y-6">
        {notifications.map((section, idx) => (
          <div key={idx}>
            <p className="text-sm font-semibold text-gray-600 mb-3">
              {section.date}
            </p>

            <div className="space-y-3">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex items-center gap-3
                    p-4 rounded-xl
                    bg-white
                    shadow-md shadow-gray-400
                    hover:shadow-lg
                    transition cursor-pointer
                  "
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
