import React from "react";

function TeamMemPerTop() {
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
      <div className="grid grid-cols-2 border-b border-gray-400">
        <div className="bg-gray-200 text-indigo-700 font-medium text-center py-3">
          All Users
        </div>
        <div className="bg-indigo-600 text-white font-medium text-center py-3">
          User Role Management
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-sm whitespace-nowrap">

          {/* TABLE HEADER */}
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
      </div>

    </div>
  );
}

export default TeamMemPerTop;
