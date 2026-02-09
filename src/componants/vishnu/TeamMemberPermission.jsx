import React from "react";

function TeamMemberPermission({ title = "User Management" }) {
  const actions = [
    "Create a user",
    "Edit a user",
    "Update a user",
    "Delete a user",
    "Verify a user",
  ];

  return (
    <div className="bg-white border border-gray-400 mx-auto w-full max-w-[1100px] mb-6">

      {/* SECTION HEADER */}
      <div className="border-b border-gray-400 bg-gray-100 px-4 sm:px-6 py-3 font-semibold">
        {title}
      </div>

      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-sm whitespace-nowrap">
          <tbody>
            {actions.map((action) => (
              <tr key={action} className="border-b last:border-none">

                <td className="px-4 sm:px-6 py-3 w-[300px]">
                  {action}
                </td>

                <td className="text-center px-4 py-3">
                  <input type="checkbox" defaultChecked />
                </td>

                <td className="text-center px-4 py-3">
                  <input type="checkbox" />
                </td>

                <td className="text-center px-4 py-3">
                  <input type="checkbox" />
                </td>

                <td className="text-center px-4 py-3">
                  <input type="checkbox" />
                </td>

                <td className="text-center px-4 py-3">
                  <input type="checkbox" defaultChecked />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default TeamMemberPermission;
