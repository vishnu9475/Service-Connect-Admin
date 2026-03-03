import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const mockUsers = [
  { id: 1, name: "Arjun Kumar", email: "arjun@mail.com", role: "Service Provider" },
  { id: 2, name: "Meera Das", email: "meera@mail.com", role: "Dealer" },
  { id: 3, name: "Rahul Nair", email: "rahul@mail.com", role: "Franchise" },
  { id: 4, name: "Sneha Roy", email: "sneha@mail.com", role: "Service Provider" },
  { id: 5, name: "Aman Verma", email: "aman@mail.com", role: "Dealer" },
  { id: 6, name: "Priya Menon", email: "priya@mail.com", role: "Franchise" },
  { id: 7, name: "Kiran Das", email: "kiran@mail.com", role: "Service Provider" },
  { id: 8, name: "Anita Roy", email: "anita@mail.com", role: "Dealer" },
];

const ROWS_PER_PAGE = 5;

const SelectMember = ({ onSave }) => {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole =
      roleFilter === "All" || user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  // Reset to page 1 when filtering/searching
  useEffect(() => {
    setCurrentPage(1);
  }, [search, roleFilter]);

  const totalPages = Math.ceil(filteredUsers.length / ROWS_PER_PAGE);

  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;

  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  const handleSave = () => {
    if (!selectedUser) return;

    alert(`Proceed to assign Super Admin access to ${selectedUser.name}`);
    onSave && onSave(selectedUser);
  };

  return (
    <div className="w-full bg-[#F4F5FF] p-4 sm:p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-4 sm:p-8 shadow-sm">

        <h2 className="text-lg sm:text-xl font-semibold text-[#2D2D6E] mb-6">
          Select Member
        </h2>

        {/* SEARCH + FILTER */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#4D44B5]"
          />

          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="w-full md:w-60 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#4D44B5]"
          >
            <option value="All">All Roles</option>
            <option value="Service Provider">Service Provider</option>
            <option value="Dealer">Dealer</option>
            <option value="Franchise">Franchise</option>
          </select>
        </div>

        {/* TABLE */}
        <div className="border border-gray-200 rounded-lg overflow-x-auto">
          <table className="min-w-[700px] w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3 text-left">Select</th>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
              </tr>
            </thead>

            <tbody>
              {paginatedUsers.map((user) => {
                const isSelected = selectedUser?.id === user.id;

                return (
                  <tr
                    key={user.id}
                    onClick={() => setSelectedUser(user)}
                    className={`border-t cursor-pointer transition duration-200
                      ${isSelected
                        ? "bg-[#F4F5FF] border-l-4 border-[#4D44B5]"
                        : "hover:bg-gray-50"
                      }`}
                  >
                    <td className="p-3">
                      <input
                        type="radio"
                        name="selectedUser"
                        checked={isSelected}
                        onChange={() => setSelectedUser(user)}
                      />
                    </td>
                    <td className="p-3 font-medium text-gray-600">#{user.id}</td>
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.role}</td>
                  </tr>
                );
              })}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-6 text-center text-gray-400">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        {filteredUsers.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-3">

            <p className="text-sm text-gray-500">
              Showing {startIndex + 1}–
              {Math.min(endIndex, filteredUsers.length)} of{" "}
              {filteredUsers.length}
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
        {/* SAVE BUTTON */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSave }
            disabled={!selectedUser}
            className={`px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm font-medium transition ${
              selectedUser
                ? "bg-[#4D44B5] text-white hover:opacity-90"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Add
          </button>
        </div>

      </div>
    </div>
  );
};

export default SelectMember;