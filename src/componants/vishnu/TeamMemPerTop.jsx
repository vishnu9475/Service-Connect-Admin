
// import React, { useState } from "react";

// function TeamMemPerTop() {
//   const actions = [
//     "Create a user",
//     "Edit a user",
//     "Update a user",
//     "Delete a user",
//     "Verify a user",
//   ];

//   const [activeTab, setActiveTab] = useState("users");

//   return (
//     <div className="bg-white border border-gray-400 mx-auto w-full max-w-[1100px]">

//       {/* TABS */}
//       <div className="relative grid grid-cols-2 border-b border-gray-400">

//         {/* TAB 1 */}
//         <div
//           onClick={() => setActiveTab("users")}
//           className={`text-center py-3 font-medium cursor-pointer transition-colors duration-300 ${
//             activeTab === "users"
//               ? "bg-indigo-600 text-white"
//               : "bg-white text-gray-700"
//           }`}
//         >
//           All Users
//         </div>

//         {/* TAB 2 */}
//         <div
//           onClick={() => setActiveTab("roles")}
//           className={`text-center py-3 font-medium cursor-pointer transition-colors duration-300 ${
//             activeTab === "roles"
//               ? "bg-indigo-600 text-white"
//               : "bg-white text-gray-700"
//           }`}
//         >
//           User Role Management
//         </div>

//         {/* 🔵 Sliding Blue Indicator */}
//         <div
//           className="absolute bottom-0 left-0 h-1 bg-indigo-600 transition-all duration-300"
//           style={{
//             width: "50%",
//             transform:
//               activeTab === "users"
//                 ? "translateX(0%)"
//                 : "translateX(100%)",
//           }}
//         />
//       </div>

//       {/* TABLE / CONTENT */}
//       <div className="overflow-x-auto">
//         {activeTab === "roles" && (
//           <table className="w-full min-w-[900px] text-sm whitespace-nowrap">
//             <thead>
//               <tr className="border-b border-gray-400">
//                 <th className="text-left px-6 py-3 w-[300px]">Actions</th>
//                 <th className="text-center py-3">User</th>
//                 <th className="text-center py-3">Service Provider</th>
//                 <th className="text-center py-3">Dealer</th>
//                 <th className="text-center py-3">Franchisee</th>
//                 <th className="text-center py-3">Admin</th>
//               </tr>
//             </thead>
//           </table>
//         )}
//       </div>

//     </div>
//   );
// }

// export default TeamMemPerTop;

import React, { useState } from "react";

function TeamMemPerTop({ activeTab, setActiveTab }) {
  const actions = [
    "Create a user",
    "Edit a user",
    "Update a user",
    "Delete a user",
    "Verify a user",
  ];

  return (
    <div className="bg-white border border-gray-400 mx-auto w-full max-w-[1100px]">

      {/* TABS */}
      <div className="relative grid grid-cols-2 border-b border-gray-400">

        {/* TAB 1 */}
        <div
          onClick={() => setActiveTab("users")}
          className={`text-center py-3 font-medium cursor-pointer transition-colors duration-300 ${
            activeTab === "users"
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          All Users
        </div>

        {/* TAB 2 */}
        <div
          onClick={() => setActiveTab("roles")}
          className={`text-center py-3 font-medium cursor-pointer transition-colors duration-300 ${
            activeTab === "roles"
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          User Role Management
        </div>

        {/* 🔵 Sliding Blue Indicator */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-indigo-600 transition-all duration-300"
          style={{
            width: "50%",
            transform:
              activeTab === "users"
                ? "translateX(0%)"
                : "translateX(100%)",
          }}
        />
      </div>

      {/* TABLE / CONTENT */}
      <div className="overflow-x-auto">
        {activeTab === "roles" && (
          <table className="w-full min-w-[900px] text-sm whitespace-nowrap">
            <thead>
              <tr className="border-b border-gray-400">
                <th className="text-left px-6 py-3 w-[300px]">Actions</th>
                <th className="text-center py-3">User</th>
                <th className="text-center py-3">Service Provider</th>
                <th className="text-center py-3">Dealer</th>
                <th className="text-center py-3">Franchisee</th>
                <th className="text-center py-3">Admin</th>
              </tr>
            </thead>
          </table>
        )}
      </div>

    </div>
  );
}

export default TeamMemPerTop;