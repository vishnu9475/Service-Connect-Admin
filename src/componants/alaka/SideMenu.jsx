// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
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

// const AdminSideMenu113 = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [open, setOpen] = useState(false);
//   const [openAccounts, setOpenAccounts] = useState(false);
//   const [openServiceAccounts, setOpenServiceAccounts] = useState(false);
//   const [openPaymentMgmt, setOpenPaymentMgmt] = useState(false);

//   const menuData = [
//     { label: "Dashboard", icon: FiHome, path: "/dashboard" },
//     { label: "Users", icon: FiUsers, path: "/users" },
//     { label: "Service Providers", icon: FiUserCheck, path: "/providers" },
//     { label: "Franchisee", icon: FiBriefcase, path: "/franchisee" },
//     { label: "Finance", icon: FiDollarSign, path: "/finance" },
//     { label: "Accounts", icon: FiLayers },
//     { label: "Profile", icon: FiUser, path: "/profile" },
//     { label: "Chat", icon: FiMessageSquare, path: "/chat" },
//     { label: "Settings", icon: FiSettings, path: "/settings" },
//     { label: "Service Management", icon: FiGrid, path: "/services" },
//     { label: "Ads Management", icon: FaAd, path: "/ads" },
//     { label: "Notifications", icon: FiBell, path: "/notifications" },
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       {/* Mobile Toggle */}
//       <button
//         className="lg:hidden fixed top-4 left-4 z-50 text-white"
//         onClick={() => setOpen(true)}
//       >
//         <FiMenu size={22} />
//       </button>

//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 lg:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       <aside
//         className={`fixed top-0 left-0 z-50 h-full w-64 bg-[#4F46B5] text-white
//         transform transition-transform duration-300
//         ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
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
//           {menuData.map((item, index) => {
//             const Icon = item.icon;

//             if (item.label === "Accounts") {
//               return (
//                 <div key={index}>
//                   <div
//                     onClick={() => setOpenAccounts(!openAccounts)}
//                     className="flex items-center justify-between px-4 py-2.5 rounded-md cursor-pointer text-white/80 hover:bg-white/10"
//                   >
//                     <div className="flex items-center gap-3">
//                       <Icon size={16} />
//                       <span>Accounts</span>
//                     </div>
//                     <FiChevronDown size={16} />
//                   </div>

//                   {openAccounts && (
//                     <div className="ml-6 mt-1">
//                       <div
//                         onClick={() =>
//                           setOpenServiceAccounts(!openServiceAccounts)
//                         }
//                         className="flex justify-between px-3 py-2 text-sm text-white/70 hover:bg-white/10 rounded-md cursor-pointer"
//                       >
//                         Service Provider Accounts
//                         <FiChevronDown size={14} />
//                       </div>

//                       {openServiceAccounts && (
//                         <div className="ml-4">
//                           <div
//                             onClick={() => {
//                               navigate("/accounts/bank-details");
//                               setOpen(false);
//                             }}
//                             className="px-3 py-2 text-sm text-white/60 hover:bg-white/10 rounded-md cursor-pointer"
//                           >
//                             Bank Details
//                           </div>

//                           <div
//                             onClick={() => {
//                               navigate("/accounts/billing-cycle");
//                               setOpen(false);
//                             }}
//                             className="px-3 py-2 text-sm text-white/60 hover:bg-white/10 rounded-md cursor-pointer"
//                           >
//                             Billing Cycle
//                           </div>

//                           <div
//                             onClick={() =>
//                               setOpenPaymentMgmt(!openPaymentMgmt)
//                             }
//                             className="flex justify-between mt-1 px-3 py-2 text-sm text-white/70 hover:bg-white/10 rounded-md cursor-pointer"
//                           >
//                             Payment Management
//                             <FiChevronDown size={14} />
//                           </div>

//                           {openPaymentMgmt && (
//                             <div className="ml-4">
//                               <div
//                                 onClick={() => {
//                                   navigate("/accounts/payment-requests");
//                                   setOpen(false);
//                                 }}
//                                 className="px-3 py-2 text-sm text-white/60 hover:bg-white/10 rounded-md cursor-pointer"
//                               >
//                                 Payment Requests
//                               </div>

//                               <div
//                                 onClick={() => {
//                                   navigate("/accounts/payout-history");
//                                   setOpen(false);
//                                 }}
//                                 className="px-3 py-2 text-sm text-white/60 hover:bg-white/10 rounded-md cursor-pointer"
//                               >
//                                 Payout History
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               );
//             }

//             return (
//               <div
//                 key={index}
//                 onClick={() => {
//                   navigate(item.path);
//                   setOpen(false);
//                 }}
//                 className={`flex items-center gap-3 px-4 py-2.5 rounded-md text-sm cursor-pointer transition
//                 ${
//                   isActive(item.path)
//                     ? "bg-white text-[#4F46B5] font-medium"
//                     : "text-white/80 hover:bg-white/10"
//                 }`}
//               >
//                 <Icon size={16} />
//                 <span>{item.label}</span>
//               </div>
//             );
//           })}
//         </nav>

//         {/* Footer */}
//         <div className="absolute bottom-4 left-4">
//           <p className="text-sm font-semibold">Service Connect</p>
//           <p className="text-xs text-white/70">Let’s Grow Together</p>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default AdminSideMenu113;
// // import React, { useState } from "react";
// // import { FaAd } from "react-icons/fa";
// // import { NavLink } from "react-router-dom";

// // import {
// //   FiHome,
// //   FiUsers,
// //   FiUserCheck,
// //   FiBriefcase,
// //   FiDollarSign,
// //   FiLayers,
// //   FiUser,
// //   FiMessageSquare,
// //   FiSettings,
// //   FiBell,
// //   FiGrid,
// //   FiMenu,
// //   FiX,
// // } from "react-icons/fi";

// // const menuData = [
// //   { id: 1, label: "Dashboard", icon: FiHome, path: "/dashboard" },
// //   { id: 2, label: "Users", icon: FiUsers, path: "/users" },
// //   { id: 3, label: "Service Providers", icon: FiUserCheck, path: "/providers" },
// //   { id: 4, label: "Franchisee", icon: FiBriefcase, path: "/franchisee" },
// //   { id: 5, label: "Finance", icon: FiDollarSign, path: "/finance" },
// //   { id: 6, label: "Accounts", icon: FiLayers, path: "/accounts" },
// //   { id: 7, label: "Profile", icon: FiUser, path: "/profile" },
// //   { id: 8, label: "Chat", icon: FiMessageSquare, path: "/chat" },
// //   { id: 9, label: "Settings", icon: FiSettings, path: "/settings" },
// //   { id: 10, label: "Service Management", icon: FiGrid, path: "/services" },
// //   { id: 11, label: "Ads Management", icon: FaAd, path: "/ads" },
// //   { id: 12, label: "Notifications", icon: FiBell, path: "/notifications" },
// // ];

// // const SideMenu = () => {
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <>
// //       {/* MOBILE TOGGLE */}
// //       <button
// //         className="lg:hidden fixed top-4 left-4 z-50 text-white"
// //         onClick={() => setOpen(true)}
// //       >
// //         <FiMenu size={22} />
// //       </button>

// //       {/* MOBILE OVERLAY */}
// //       {open && (
// //         <div
// //           className="fixed inset-0 bg-black/40 z-40 lg:hidden"
// //           onClick={() => setOpen(false)}
// //         />
// //       )}

// //       {/* SIDEBAR */}
// //       <aside
// //         className={`
// //           fixed top-0 left-0 z-50
// //           h-full w-64
// //           bg-[#4F46B5]
// //           text-white
// //           transform transition-transform duration-300
// //           ${open ? "translate-x-0" : "-translate-x-full"}
// //           lg:translate-x-0
// //         `}
// //       >
// //         {/* HEADER */}
// //         <div className="flex items-center gap-3 px-5 py-4 border-b border-white/20">
// //           <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center font-bold">
// //             S
// //           </div>
// //           <span className="text-lg font-semibold">SC</span>

// //           {/* CLOSE (MOBILE) */}
// //           <button
// //             className="ml-auto lg:hidden"
// //             onClick={() => setOpen(false)}
// //           >
// //             <FiX size={18} />
// //           </button>
// //         </div>

// //         {/* MENU */}
// //         <nav className="mt-4 flex flex-col gap-1 px-3">
// //           {menuData.map((item) => {
// //             const Icon = item.icon;

// //             return (
// //               <NavLink
// //                 key={item.id}
// //                 to={item.path}
// //                 onClick={() => setOpen(false)}
// //                 className={({ isActive }) =>
// //                   `
// //                     flex items-center gap-3
// //                     px-4 py-2.5
// //                     rounded-md
// //                     text-sm
// //                     cursor-pointer
// //                     transition
// //                     ${
// //                       isActive
// //                         ? "bg-white text-[#4F46B5] font-medium"
// //                         : "text-white/80 hover:bg-white/10"
// //                     }
// //                   `
// //                 }
// //               >
// //                 <Icon size={16} />
// //                 <span className="truncate">{item.label}</span>
// //               </NavLink>
// //             );
// //           })}
// //         </nav>

// //         {/* FOOTER */}
// //         <div className="absolute bottom-5 left-0 w-full px-5 text-xs text-white/70">
// //           <p className="font-semibold">Service Connect</p>
// //           <p>Lets Grow Together</p>
// //         </div>
// //       </aside>
// //     </>
// //   );
// // };

// // export default SideMenu;
import React, { useState } from "react";
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

const AdminSideMenu113 = () => {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(1);
  const [openAccounts, setOpenAccounts] = useState(false);
  const [openServiceAccounts, setOpenServiceAccounts] = useState(false);
  const [openPaymentMgmt, setOpenPaymentMgmt] = useState(false);
  const [popup, setPopup] = useState(null);
  const [action, setAction] = useState(null); // approve / reject

  const menuData = [
    { id: 1, label: "Dashboard", icon: FiHome },
    { id: 2, label: "Users", icon: FiUsers },
    { id: 3, label: "Service Providers", icon: FiUserCheck },
    { id: 4, label: "Franchisee", icon: FiBriefcase },
    { id: 5, label: "Finance", icon: FiDollarSign },
    { id: 6, label: "Accounts", icon: FiLayers },
    { id: 7, label: "Profile", icon: FiUser },
    { id: 8, label: "Chat", icon: FiMessageSquare },
    { id: 9, label: "Settings", icon: FiSettings },
    { id: 10, label: "Service Management", icon: FiGrid },
    { id: 11, label: "Ads Management", icon: FaAd },
    { id: 12, label: "Notifications", icon: FiBell },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 text-white"
        onClick={() => setOpen(true)}
      >
        <FiMenu size={22} />
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-[#4F46B5] text-white
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/20">
          <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center font-bold">
            S
          </div>
          <span className="text-lg font-semibold">SC</span>
          <button className="ml-auto lg:hidden" onClick={() => setOpen(false)}>
            <FiX size={18} />
          </button>
        </div>

        {/* Menu */}
        <nav className="mt-4 flex flex-col gap-1 px-3">
          {menuData.map((item) => {
            const Icon = item.icon;

            if (item.label === "Accounts") {
              return (
                <div key={item.id}>
                  <div
                    onClick={() => setOpenAccounts(!openAccounts)}
                    className="flex items-center justify-between px-4 py-2.5 rounded-md cursor-pointer text-white/80 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={16} />
                      <span>Accounts</span>
                    </div>
                    <FiChevronDown size={16} />
                  </div>

                  {openAccounts && (
                    <div className="ml-6 mt-1">
                      {/* Service Provider Accounts */}
                      <div
                        onClick={() =>
                          setOpenServiceAccounts(!openServiceAccounts)
                        }
                        className="flex items-center justify-between px-3 py-2 text-sm text-white/70 hover:bg-white/10 rounded-md cursor-pointer"
                      >
                        Service Provider Accounts
                        <FiChevronDown size={14} />
                      </div>

                      {openServiceAccounts && (
                        <div className="ml-4">
                          {/* Bank & Billing */}
                          {["Bank Details", "Billing Cycle"].map((label) => (
                            <div
                              key={label}
                              onClick={() => setPopup(label)}
                              className="px-3 py-2 text-sm text-white/60 hover:bg-white/10 rounded-md cursor-pointer"
                            >
                              {label}
                            </div>
                          ))}

                          {/* Payment Management */}
                          <div
                            onClick={() =>
                              setOpenPaymentMgmt(!openPaymentMgmt)
                            }
                            className="mt-1 px-3 py-2 text-sm text-white/70 hover:bg-white/10 rounded-md cursor-pointer flex justify-between"
                          >
                            Payment Management
                            <FiChevronDown size={14} />
                          </div>

                          {openPaymentMgmt && (
                            <div className="ml-4">
                              {["Payment Requests", "Payout History"].map(
                                (label) => (
                                  <div
                                    key={label}
                                    onClick={() => {
                                      setPopup(label);
                                      setAction(null);
                                    }}
                                    className="px-3 py-2 text-sm text-white/60 hover:bg-white/10 rounded-md cursor-pointer"
                                  >
                                    {label}
                                  </div>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = activeId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-md text-sm cursor-pointer transition
                ${
                  isActive
                    ? "bg-white text-[#4F46B5] font-medium"
                    : "text-white/80 hover:bg-white/10"
                }`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* POPUP */}
      {popup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-[480px] rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">{popup}</h2>

            {/* PAYMENT REQUESTS */}
            {popup === "Payment Requests" && (
              <div className="space-y-3">
                <p><b>Provider:</b> John Services</p>
                <p><b>Requested Amount:</b> ₹15,000</p>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => setAction("approve")}
                    className="flex-1 bg-green-600 text-white py-2 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => setAction("reject")}
                    className="flex-1 bg-red-600 text-white py-2 rounded"
                  >
                    Reject
                  </button>
                </div>

                {action === "reject" && (
                  <textarea
                    className="w-full border p-2 rounded mt-3"
                    placeholder="Reject Reason (Required)"
                  />
                )}
              </div>
            )}

            {/* PAYOUT HISTORY */}
            {popup === "Payout History" && (
              <div className="space-y-2 text-sm">
                <div className="border p-3 rounded">
                  <p><b>Txn ID:</b> TXN1023</p>
                  <p><b>Amount:</b> ₹12,000</p>
                  <p><b>Status:</b> Paid</p>
                </div>
              </div>
            )}

            {/* BANK DETAILS */}
            {popup === "Bank Details" && (
              <div className="space-y-3">
                <input className="w-full border p-2 rounded" placeholder="Account Holder Name" />
                <input className="w-full border p-2 rounded" placeholder="Bank Name" />
                <input className="w-full border p-2 rounded" placeholder="Account Number" />
                <input className="w-full border p-2 rounded" placeholder="IFSC Code" />
                <button className="w-full bg-[#4F46B5] text-white py-2 rounded">
                  Save Bank Details
                </button>
              </div>
            )}

            {/* BILLING CYCLE */}
            {popup === "Billing Cycle" && (
              <div className="space-y-3">
                <select className="w-full border p-2 rounded">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
                <button className="w-full bg-[#4F46B5] text-white py-2 rounded">
                  Save Billing Cycle
                </button>
              </div>
            )}

            <button
              className="mt-6 px-4 py-2 bg-gray-200 rounded"
              onClick={() => setPopup(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminSideMenu113;


