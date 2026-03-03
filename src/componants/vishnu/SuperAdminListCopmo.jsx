// import React, { useState } from "react";
// import { Trash2 } from "lucide-react";

// const initialSuperAdmins = [
//   { id: 1, name: "Arjun Kumar", email: "arjun@mail.com", role: "Dealer" },
//   { id: 3, name: "Rahul Nair", email: "rahul@mail.com", role: "Franchise" },
// ];

// const SuperAdminList = () => {
//   const [superAdmins, setSuperAdmins] = useState(initialSuperAdmins);
//   const [search, setSearch] = useState("");

//   const filteredAdmins = superAdmins.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleRemove = (id, name) => {
//     const confirmRemove = window.confirm(
//       `Remove Super Admin access from ${name}?`
//     );

//     if (!confirmRemove) return;

//     setSuperAdmins(superAdmins.filter((user) => user.id !== id));

//     alert(`${name} removed from Super Admin`);
//   };

//   return (
//     <div className="w-full bg-[#F4F5FF] p-4 sm:p-6">
//       <div className="max-w-6xl mx-auto bg-white rounded-2xl p-4 sm:p-8 shadow-sm">

//         <h2 className="text-lg sm:text-xl font-semibold text-[#2D2D6E] mb-6">
//           Super Admin Members
//         </h2>

//         {/* SEARCH */}
//         <input
//           type="text"
//           placeholder="Search Super Admin..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="mb-6 w-full md:w-80 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#4D44B5]"
//         />

//         {/* TABLE */}
//         <div className="border border-gray-200 rounded-lg overflow-x-auto">
//           <table className="min-w-[600px] w-full text-sm">
//             <thead className="bg-gray-100 text-gray-600">
//               <tr>
//                 <th className="p-3 text-left">ID</th>
//                 <th className="p-3 text-left">Name</th>
//                 <th className="p-3 text-left">Email</th>
//                 <th className="p-3 text-left">Role</th>
//                 <th className="p-3 text-left">Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredAdmins.map((user) => (
//                 <tr key={user.id} className="border-t hover:bg-gray-50">
//                   <td className="p-3">#{user.id}</td>
//                   <td className="p-3">{user.name}</td>
//                   <td className="p-3">{user.email}</td>
//                   <td className="p-3">{user.role}</td>
//                   <td className="p-3">
//                     <button
//                       onClick={() => handleRemove(user.id, user.name)}
//                       className="flex items-center gap-1 text-red-600 hover:text-red-700"
//                     >
//                       <Trash2 size={16} />
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}

//               {filteredAdmins.length === 0 && (
//                 <tr>
//                   <td colSpan="5" className="p-6 text-center text-gray-400">
//                     No Super Admin members found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default SuperAdminList;

import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ROWS_PER_PAGE = 5;

const initialSuperAdmins = [
  { id: 1, name: "Arjun Kumar", email: "arjun@mail.com", role: "Dealer" },
  { id: 2, name: "Rahul Nair", email: "rahul@mail.com", role: "Franchise" },
  { id: 3, name: "Sneha Roy", email: "sneha@mail.com", role: "Service Provider" },
  { id: 4, name: "Meera Das", email: "meera@mail.com", role: "Dealer" },
  { id: 5, name: "Anita Roy", email: "anita@mail.com", role: "Franchise" },
  { id: 6, name: "Kiran Das", email: "kiran@mail.com", role: "Service Provider" },
];

const SuperAdminList = () => {
  const [superAdmins, setSuperAdmins] = useState(initialSuperAdmins);
  const [auditLogs, setAuditLogs] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAdmins = superAdmins.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAdmins.length / ROWS_PER_PAGE);
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;
  const paginatedAdmins = filteredAdmins.slice(startIndex, endIndex);

  const handleRemove = (id, name) => {
    const confirmRemove = window.confirm(
      `Remove Super Admin access from ${name}?`
    );
    if (!confirmRemove) return;

    // Remove user
    setSuperAdmins((prev) => prev.filter((user) => user.id !== id));

    // Add audit log
    const newLog = {
      action: "Removed Super Admin",
      targetUser: name,
      performedBy: "Super Admin", // replace with logged-in user later
      timestamp: new Date().toLocaleString(),
    };

    setAuditLogs((prev) => [newLog, ...prev]);
  };

  return (
    <div className="w-full p-4 sm:p-6">

        <h2 className="text-lg sm:text-xl font-semibold text-[#2D2D6E] mb-6">
          Super Admin Members
        </h2>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search Super Admin..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="mb-6 w-full md:w-80 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#4D44B5]"
        />

        {/* TABLE */}
        <div className="border border-gray-200 rounded-lg overflow-x-auto">
          <table className="min-w-[700px] w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedAdmins.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">#{user.id}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleRemove(user.id, user.name)}
                      className="flex items-center gap-1 text-red-600 hover:text-red-700 cursor-pointer"
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              {filteredAdmins.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-6 text-center text-gray-400">
                    No Super Admin members found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

       {/* PAGINATION */}
{filteredAdmins.length > 0 && (
  <div className="flex justify-between items-center mt-4 flex-col sm:flex-row gap-3">

    <p className="text-sm text-gray-500">
      Showing {startIndex + 1}–
      {Math.min(endIndex, filteredAdmins.length)} of{" "}
      {filteredAdmins.length}
    </p>

    <div className="flex items-center gap-2">
      {/* PREV */}
      <button
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 1}
        className={`w-9 h-9 flex items-center justify-center rounded-full border transition
          ${currentPage === 1
            ? "opacity-40 cursor-not-allowed border-gray-300"
            : "hover:bg-[#4D44B5] hover:text-white border-gray-300"
          }`}
      >
        <ChevronLeft size={18} />
      </button>

      {/* PAGE NUMBERS */}
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-9 h-9 flex items-center justify-center rounded-full border text-sm transition
              ${currentPage === page
                ? "bg-[#4D44B5] text-white border-[#4D44B5]"
                : "border-gray-300 hover:bg-gray-100"
              }`}
          >
            {page}
          </button>
        );
      })}

      {/* NEXT */}
      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage === totalPages}
        className={`w-9 h-9 flex items-center justify-center rounded-full border transition
          ${currentPage === totalPages
            ? "opacity-40 cursor-not-allowed border-gray-300"
            : "hover:bg-[#4D44B5] hover:text-white border-gray-300"
          }`}
      >
        <ChevronRight size={18} />
      </button>
    </div>

  </div>
)}

        {/* AUDIT LOG SECTION */}
        <div className="mt-10">
          <h3 className="text-md font-semibold text-[#2D2D6E] mb-4">
            Audit Log
          </h3>

          <div className="border border-gray-200 rounded-lg p-4 max-h-60 overflow-y-auto">
            {auditLogs.length === 0 ? (
              <p className="text-sm text-gray-400">
                No actions recorded yet.
              </p>
            ) : (
              auditLogs.map((log, index) => (
                <div key={index} className="border-b py-2 text-sm">
                  <p>
                    <b>{log.action}</b> — {log.targetUser}
                  </p>
                  <p className="text-gray-500 text-xs">
                    By {log.performedBy} on {log.timestamp}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
    </div>
  );
};

export default SuperAdminList;