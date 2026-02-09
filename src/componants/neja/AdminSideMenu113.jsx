// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaAd } from "react-icons/fa";
// import {
//   FiHome,
//   FiUsers,
//   FiUserCheck,
//   FiBriefcase,
//   FiDollarSign,
//   FiLayers,
//   FiUser,
//   FiMessageSquare,
//   FiSettings,
//   FiBell,
//   FiGrid,
//   FiMenu,
//   FiX,
//   FiChevronDown,
// } from "react-icons/fi";

// const menuData = [
//   { id: 1, label: "Dashboard", icon: FiHome, path: "/dashboard" },
//   { id: 2, label: "Users", icon: FiUsers, path: "/users" },

//   {
//     id: 3,
//     label: "Booking",
//     icon: FiBriefcase,
//     children: [
//       { id: "3-1", label: "Accepted", path: "/accbookings" },
//       { id: "3-2", label: "Ongoing", path: "/ongbookings" },
//       { id: "3-3", label: "Completed", path: "/combookings" },
//       { id: "3-4", label: "Incomplete", path: "/incbookings" },
//       { id: "3-5", label: "Declined", path: "/decbookings" },
//       { id: "3-6", label: "All Bookings", path: "/allbookings" },
//     ],
//   },

//   { id: 4, label: "Service Providers", icon: FiUserCheck, path: "/serviceproviderlist" },
//   { id: 5, label: "Franchisee", icon: FiBriefcase, path: "/franchisee" },
//   { id: 6, label: "Finance", icon: FiDollarSign, path: "/financial" },
//   { id: 7, label: "Accounts", icon: FiLayers, path: "/accounts" },
//   { id: 8, label: "Profile", icon: FiUser, path: "/adminprofile" },
//   { id: 9, label: "Chat", icon: FiMessageSquare, path: "/adminmessages" },
//   { id: 10, label: "Settings", icon: FiSettings, path: "/generalsettings" },

//   {
//     id: 11,
//     label: "Service Management",
//     icon: FiGrid,
//     children: [
//       { id: "11-1", label: "Service Type", path: "/servicetypedetails" },
//       {
//         id: "11-2",
//         label: "Category",
//         children: [
//           { id: "11-2-1", label: "Sub Category", path: "/category" },
//           { id: "11-2-2", label: "Sub Sub Category", path: "/subcategory" },
//         ],
//       },
//     ],
//   },

//   { id: 12, label: "Ads Management", icon: FaAd, path: "/adsmanagement" },
//   { id: 13, label: "Notifications", icon: FiBell, path: "/notification" },
// ];

// const AdminSideMenu113 = () => {
//   const [open, setOpen] = useState(false);
//   const [openMenus, setOpenMenus] = useState({});

//   const toggleMenu = (id) => {
//     setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   const renderSubMenu = (items, level = 1) =>
//     items.map((sub) => {
//       const hasChildren = sub.children?.length > 0;
//       const isOpen = openMenus[sub.id];

//       return (
//         <div key={sub.id}>
//           {sub.path && !hasChildren ? (
//             <NavLink
//               to={sub.path}
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 `
//                 px-3 py-2 rounded-md text-sm cursor-pointer transition
//                 flex items-center
//                 ${
//                   isActive
//                     ? "bg-white text-[#4F46B5] font-medium"
//                     : "text-white/80 hover:bg-white/10"
//                 }
//               `
//               }
//               style={{ marginLeft: level * 12 }}
//             >
//               {sub.label}
//             </NavLink>
//           ) : (
//             <div
//               onClick={() => toggleMenu(sub.id)}
//               className="px-3 py-2 rounded-md text-sm cursor-pointer transition
//                          flex justify-between items-center text-white/80 hover:bg-white/10"
//               style={{ marginLeft: level * 12 }}
//             >
//               <span>{sub.label}</span>
//               <FiChevronDown
//                 size={14}
//                 className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
//               />
//             </div>
//           )}

//           {hasChildren && isOpen && (
//             <div className="flex flex-col gap-1">
//               {renderSubMenu(sub.children, level + 1)}
//             </div>
//           )}
//         </div>
//       );
//     });

//   return (
//     <>
//       {/* Mobile toggle */}
//       <button
//         className="lg:hidden fixed top-4 left-4 z-50 text-[#e6e6f0]"
//         onClick={() => setOpen(true)}
//       >
//         <FiMenu size={22} />
//       </button>

//       {/* Overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 lg:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed top-0 left-0 z-50 h-full w-64
//           bg-[#4F46B5] text-white
//           transform transition-transform duration-300
//           overflow-y-auto no-scrollbar
//           ${open ? "translate-x-0" : "-translate-x-full"}
//           lg:translate-x-0
//         `}
//       >
//         {/* Header */}
//         <div className="flex items-center gap-3 px-5 py-4 border-b border-white/20">
//           <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center font-bold">
//             S
//           </div>
//           <span className="text-lg font-semibold">SC</span>

//           <button className="ml-auto lg:hidden" onClick={() => setOpen(false)}>
//             <FiX size={18} />
//           </button>
//         </div>

//         {/* Menu */}
//         <nav className="mt-4 flex flex-col gap-1 px-3">
//           {menuData.map((item) => {
//             const Icon = item.icon;
//             const hasChildren = item.children?.length > 0;
//             const isOpen = openMenus[item.id];

//             return (
//               <div key={item.id}>
//                 {item.path && !hasChildren ? (
//                   <NavLink
//                     to={item.path}
//                     onClick={() => setOpen(false)}
//                     className={({ isActive }) =>
//                       `
//                       flex items-center gap-3
//                       px-4 py-2.5 rounded-md text-sm cursor-pointer transition
//                       ${
//                         isActive
//                           ? "bg-white text-[#4F46B5] font-medium"
//                           : "text-white/80 hover:bg-white/10"
//                       }
//                     `
//                     }
//                   >
//                     <Icon size={16} />
//                     <span className="truncate">{item.label}</span>
//                   </NavLink>
//                 ) : (
//                   <div
//                     onClick={() => toggleMenu(item.id)}
//                     className="flex items-center justify-between
//                                px-4 py-2.5 rounded-md text-sm cursor-pointer
//                                text-white/80 hover:bg-white/10"
//                   >
//                     <div className="flex items-center gap-3">
//                       <Icon size={16} />
//                       <span>{item.label}</span>
//                     </div>
//                     <FiChevronDown
//                       size={16}
//                       className={`transition-transform ${
//                         isOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </div>
//                 )}

//                 {hasChildren && isOpen && (
//                   <div className="mt-1 flex flex-col gap-1">
//                     {renderSubMenu(item.children)}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </nav>

//         {/* Footer */}
//         <div className="mt-6 px-5 pb-5 text-xs text-white/70">
//           <p className="font-semibold">Service Connect</p>
//           <p>Lets Grow Together</p>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default AdminSideMenu113;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaAd } from "react-icons/fa";
import {
  FiHome,
  FiUsers,
  FiUserCheck,
  FiBriefcase,
  FiDollarSign,
  FiLayers,
  FiUser,
  FiMessageSquare,
  FiSettings,
  FiBell,
  FiGrid,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";

/* ================= MENU DATA ================= */

const menuData = [
  { id: 1, label: "Dashboard", icon: FiHome, path: "/dashboard" },
  { id: 2, label: "Users", icon: FiUsers, path: "/users" },

  {
    id: 3,
    label: "Booking",
    icon: FiBriefcase,
    children: [
      { id: "3-1", label: "Accepted", path: "/accbookings" },
      { id: "3-2", label: "Ongoing", path: "/ongbookings" },
      { id: "3-3", label: "Completed", path: "/combookings" },
      { id: "3-4", label: "Incomplete", path: "/incbookings" },
      { id: "3-5", label: "Declined", path: "/decbookings" },
      { id: "3-6", label: "All Bookings", path: "/allbookings" },
    ],
  },

  { id: 4, label: "Service Providers", icon: FiUserCheck, path: "/serviceproviderlist" },
  { id: 5, label: "Franchisee", icon: FiBriefcase, path: "/franchisee" },
  { id: 6, label: "Finance", icon: FiDollarSign, path: "/financial" },

  /* 🔥 ACCOUNTS WITH POPUPS */
  {
    id: 7,
    label: "Accounts",
    icon: FiLayers,
    children: [
      {
        id: "7-1",
        label: "Service Provider Accounts",
        children: [
          { id: "7-1-1", label: "Bank Details", popup: "Bank Details" },
          { id: "7-1-2", label: "Billing Cycle", popup: "Billing Cycle" },
          {
            id: "7-1-3",
            label: "Payment Management",
            children: [
              { id: "7-1-3-1", label: "Payment Requests", popup: "Payment Requests" },
              { id: "7-1-3-2", label: "Payout History", popup: "Payout History" },
            ],
          },
        ],
      },
    ],
  },

  { id: 8, label: "Profile", icon: FiUser, path: "/adminprofile" },
  { id: 9, label: "Chat", icon: FiMessageSquare, path: "/adminmessages" },
  { id: 10, label: "Settings", icon: FiSettings, path: "/generalsettings" },

  {
    id: 11,
    label: "Service Management",
    icon: FiGrid,
    children: [
      { id: "11-1", label: "Service Type", path: "/servicetypedetails" },
      {
        id: "11-2",
        label: "Category",
        children: [
          { id: "11-2-1", label: "Categories", path: "/category" },
          { id: "11-2-2", label: "Sub Category", path: "/subcategory" },
        ],
      },
    ],
  },

  { id: 12, label: "Ads Management", icon: FaAd, path: "/adsmanagement" },
  { id: 13, label: "Notifications", icon: FiBell, path: "/notification" },
];

const AdminSideMenu113 = () => {
  const [open, setOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const [popup, setPopup] = useState(null);
  const [action, setAction] = useState(null);
  const location = useLocation();

  const closeSidebar = () => {
    setOpen(false);
  };
React.useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  React.useEffect(() => {
  const openMap = {};
  const walkMenu = (items, parents = []) => {
    items.forEach((item) => {
      const nextParents = [...parents, item.id];

      // If this item matches current route
      if (item.path && item.path === location.pathname) {
        parents.forEach((pid) => {
          openMap[pid] = true;
        });
      }

      // Go deeper
      if (item.children) {
        walkMenu(item.children, nextParents);
      }
    });
  };

  walkMenu(menuData);
  setOpenMenus((prev) => ({ ...prev, ...openMap }));
}, [location.pathname]);

  const toggleMenu = (id) =>
    setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));

  const renderSubMenu = (items, level = 1) =>
    items.map((item) => {
      const hasChildren = item.children?.length;
      const isOpen = openMenus[item.id];

      if (item.popup) {
        return (
          <div
            key={item.id}
            onClick={() => setPopup(item.popup)}
            style={{ marginLeft: level * 12 }}
            className="px-3 py-2 text-sm text-white/70 hover:bg-white/10 rounded-md cursor-pointer"
          >
            {item.label}
          </div>
        );
      }

      if (item.path && !hasChildren) {
        return (
          <NavLink
            key={item.id}
            to={item.path}
            onClick={() => {
              if (window.innerWidth < 1024) {
                closeSidebar();
              }
            }}
            style={{ marginLeft: level * 12 }}
            className={({ isActive }) =>
              `px-3 py-2 text-sm rounded-md transition block
              ${isActive ? "bg-white text-[#4F46B5]" : "text-white/80 hover:bg-white/10"}`
            }
          >
            {item.label}
          </NavLink>
        );
      }

      return (
        <div key={item.id}>
          <div
            onClick={() => toggleMenu(item.id)}
            style={{ marginLeft: level * 12 }}
            className="px-3 py-2 flex justify-between text-sm text-white/80 hover:bg-white/10 rounded-md cursor-pointer"
          >
            {item.label}
            <FiChevronDown
              size={14}
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </div>

          {hasChildren && isOpen && renderSubMenu(item.children, level + 2)}
        </div>
      );
    });

  return (
    <>
      {/* Mobile Toggle */}
      <button className="lg:hidden fixed top-4 left-4 z-[60] text-white" onClick={() => setOpen(true)}>
        <FiMenu size={22} />
      </button>

        {open && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={closeSidebar}
          />
        )}

      {/* Sidebar */}
      <aside
  className={`
    fixed top-0 left-0 h-full w-64
    bg-[#4F46B5] text-white
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0
    flex flex-col
    z-50
  `}
>
        <div className="flex items-center px-5 py-4 border-b border-white/20">
          <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center font-bold">S</div>
          <span className="ml-3 font-semibold">SC</span>
          <button className="ml-auto lg:hidden" onClick={closeSidebar}>
            <FiX />
          </button>
        </div>

        <nav className="mt-4 flex-1 overflow-y-auto px-3 no-scrollbar">
          {menuData.map((item) => {
            const Icon = item.icon;
            const hasChildren = item.children?.length;
            const isOpen = openMenus[item.id];

            return (
              <div key={item.id}>
                {!hasChildren && item.path ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-2.5 rounded-md
                      ${isActive ? "bg-white text-[#4F46B5]" : "text-white/80 hover:bg-white/10"}`
                    }
                  >
                    <Icon size={16} />
                    {item.label}
                  </NavLink>
                ) : (
                  <div
                    onClick={() => toggleMenu(item.id)}
                    className="flex justify-between items-center px-4 py-2.5 rounded-md cursor-pointer text-white/80 hover:bg-white/10"
                  >

                    <div className="flex items-center gap-3">
                      <Icon size={16} />
                      {item.label}
                    </div>
                    <FiChevronDown className={isOpen ? "rotate-180" : ""} />
                  </div>
                )}

                {hasChildren && isOpen && renderSubMenu(item.children,4)}
              </div>
            );
          })}
        </nav>
        {/* Footer */}
        <div className="px-5 py-4 text-xs text-white/70 border-t border-white/20 shrink-0">
           <p className="font-semibold">Service Connect</p>
           <p>Lets Grow Together</p>
        </div>
      </aside>

      {/* ================= POPUP ================= */}
      {popup && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white w-[460px] rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">{popup}</h2>

            {popup === "Payment Requests" && (
              <>
                <p><b>Provider:</b> John Services</p>
                <p><b>Amount:</b> ₹15,000</p>
                <div className="flex gap-3 mt-4">
                  <button onClick={() => setAction("approve")} className="flex-1 bg-green-600 text-white py-2 rounded">Approve</button>
                  <button onClick={() => setAction("reject")} className="flex-1 bg-red-600 text-white py-2 rounded">Reject</button>
                </div>
                {action === "reject" && <textarea className="w-full mt-3 border p-2 rounded" placeholder="Reject reason" />}
              </>
            )}

            {popup === "Payout History" && (
              <div className="border p-3 rounded text-sm">
                <p><b>Txn:</b> TXN1023</p>
                <p><b>Amount:</b> ₹12,000</p>
                <p><b>Status:</b> Paid</p>
              </div>
            )}

            {popup === "Bank Details" && (
              <div className="space-y-2">
                <input className="w-full border p-2 rounded" placeholder="Account Holder Name" />
                <input className="w-full border p-2 rounded" placeholder="Bank Name" />
                <input className="w-full border p-2 rounded" placeholder="Account Number" />
                <input className="w-full border p-2 rounded" placeholder="IFSC Code" />
                <button className="w-full bg-[#4F46B5] text-white py-2 rounded">Save</button>
              </div>
            )}

            {popup === "Billing Cycle" && (
              <>
                <select className="w-full border p-2 rounded">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
                <button className="w-full mt-3 bg-[#4F46B5] text-white py-2 rounded">Save</button>
              </>
            )}

            <button onClick={() => setPopup(null)} className="mt-6 px-4 py-2 bg-gray-200 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminSideMenu113;

