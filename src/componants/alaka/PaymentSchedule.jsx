import { useState, useEffect } from "react";
import {
  FaEdit,
  FaFileAlt,
  FaBell,
  FaBullhorn,
} from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

// AVATARS
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";

function PaymentSchedule() {
  /* LOAD ALDRICH FONT */
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Aldrich&display=swap";
    document.head.appendChild(link);
  }, []);

  const aldrich = { fontFamily: "'Aldrich', sans-serif" };

  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);

  const [schedules, setSchedules] = useState([
    {
      id: 1,
      name: "All Dealers",
      subtitle: "Monthly",
      type: "file",
      avatar: pic1,
      status: "active",
      startDate: "01 Jan",
      endDate: "31 Jan",
    },
    {
      id: 2,
      name: "All Franchisee",
      subtitle: "Monthly",
      type: "bell",
      avatar: pic3,
      status: "active",
      startDate: "01 Jan",
      endDate: "31 Jan",
    },
    {
      id: 3,
      name: "All Service Providers",
      subtitle: "Weekly",
      type: "bell",
      avatar: pic3,
      status: "active",
      startDate: "01 Jan",
      endDate: "7 Jan",
    },
    {
      id: 4,
      name: "Thomas",
      subtitle: "Service Provider",
      type: "bell",
      avatar: pic3,
      status: "inactive",
      startDate: "01 Jan",
      endDate: "31 Jan",
    },
    {
      id: 5,
      name: "Banu - Service Provider",
      subtitle: "Service Provider",
      type: "announce",
      avatar: pic2,
      status: "inactive",
      startDate: "01 Jan",
      endDate: "31 Jan",
    },
  ]);

  /* TOGGLE ACTIVE / INACTIVE */
  const toggleStatus = (id) => {
    setSchedules((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "active" ? "inactive" : "active",
            }
          : item
      )
    );

    setHistory((prev) => [
      ...prev,
      `Status changed for schedule ID ${id}`,
    ]);
  };

  const deleteItem = (id) => {
    setSchedules((prev) => prev.filter((item) => item.id !== id));
    setHistory((prev) => [...prev, `Deleted schedule ID ${id}`]);
  };

  const editItem = (item) => {
    setHistory((prev) => [...prev, `Edited ${item.name}`]);
    alert(`Edit clicked for ${item.name}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 max-w-3xl mx-auto">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-orange-500 text-sm" style={aldrich}>
          Payment Schedules
        </h2>

        <button
          onClick={() => setShowHistory(true)}
          className="flex items-center gap-2 border px-3 py-1 rounded-md text-blue-600 text-xs"
        >
          <span className="text-lg">⟳</span>
          View History
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {schedules.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between"
          >
            {/* LEFT */}
            <div className="flex items-start gap-3">
              {/* AVATAR + BADGE */}
              <div className="relative flex-shrink-0">
                <img
                  src={item.avatar}
                  alt="avatar"
                  className="w-9 h-9 rounded-full object-cover"
                />

                {item.type === "file" && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                    <FaFileAlt className="text-white text-[9px]" />
                  </div>
                )}

                {item.type === "bell" && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#5856D6] rounded-full flex items-center justify-center">
                    <FaBell className="text-white text-[9px]" />
                  </div>
                )}

                {item.type === "announce" && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#5856D6] rounded-full flex items-center justify-center">
                    <FaBullhorn className="text-white text-[9px]" />
                  </div>
                )}
              </div>

              {/* TEXT */}
              <div>
                <p className="text-sm text-gray-800" style={aldrich}>
                  {item.name}
                </p>
                <p className="text-xs text-gray-400" style={aldrich}>
                  {item.subtitle}
                </p>
                <p className="text-xs text-gray-400 mt-1" style={aldrich}>
                  Start Date: {item.startDate} – End Date: {item.endDate}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3 text-xs">
             
              <button
                onClick={() => toggleStatus(item.id)}
                className={`flex items-center gap-1 px-2 py-1 rounded-full border ${
                  item.status === "active"
                    ? "bg-green-50 text-green-600 border-green-400"
                    : "bg-gray-50 text-gray-500 border-gray-400"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.status === "active"
                      ? "bg-green-500"
                      : "border border-gray-400"
                  }`}
                ></span>
                {item.status === "active" ? "Active" : "Inactive"}
              </button>

              <FaEdit
                onClick={() => editItem(item)}
                className="text-gray-400 cursor-pointer hover:text-gray-600"
              />

              <RiDeleteBin6Line
                onClick={() => deleteItem(item.id)}
                className="text-gray-400 cursor-pointer hover:text-red-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* VIEW HISTORY MODAL */}
      {showHistory && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 w-80">
            <h3 className="text-sm font-semibold mb-2">
              Payment Schedule History
            </h3>

            {history.length === 0 ? (
              <p className="text-xs text-gray-400">
                No history available
              </p>
            ) : (
              <ul className="text-xs space-y-1">
                {history.map((h, i) => (
                  <li key={i}>• {h}</li>
                ))}
              </ul>
            )}

            <button
              onClick={() => setShowHistory(false)}
              className="mt-3 text-xs text-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentSchedule;
