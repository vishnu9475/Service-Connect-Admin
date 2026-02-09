import React from "react";

function AddTeamMember() {
  return (
    <div className=" py-6 px-4">

      {/* ===== TOP HEADER ===== */}
      <div className="flex justify-center mb-6">
        <div
          className="
            w-full max-w-[1100px]
            border border-gray-400 bg-white
            px-4 sm:px-8 py-4
            flex flex-col sm:flex-row
            items-start sm:items-center
            justify-between gap-4
          "
        >
          <h2 className="text-lg font-semibold text-gray-900">
            Team Members
          </h2>

          <button
            className="
              flex items-center gap-2
              bg-blue-600 text-white
              text-sm font-medium
              px-5 py-2
            "
          >
            <span className="text-lg leading-none">+</span>
            ADD MEMBER
          </button>
        </div>
      </div>

    </div>
  );
}

export default AddTeamMember;
