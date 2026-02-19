import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FaTrash, FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import { CiMail } from "react-icons/ci"; 
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const UserList = ({ users, onDelete, selectedUsers, setSelectedUsers }) => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  // --- PAGINATION LOGIC ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const totalUsers = users.length;
  const totalPages = Math.ceil(totalUsers / itemsPerPage);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  const currentData = users.slice(indexOfFirstItem, indexOfLastItem);

  const startRange = totalUsers === 0 ? 0 : indexOfFirstItem + 1;
  const endRange = Math.min(indexOfLastItem, totalUsers);

  const toggleUser = (id) => {
    setSelectedUsers(prev =>
      prev.includes(id) ? prev.filter(userId => userId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelectedUsers(
      selectedUsers.length === currentData.length ? [] : currentData.map(u => u.id)
    );
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[1000px]">
          <thead>
            <tr className="border-b border-gray-100 text-left">
              <th className="px-3 py-5 text-center w-10">
                <input
                  type="checkbox"
                  className="accent-[#4D44B5] h-3 w-3 rounded cursor-pointer transition-all"
                  onChange={toggleAll}
                  checked={currentData.length > 0 && currentData.every(u => selectedUsers.includes(u.id))}
                />
              </th>
              <th className="text-[#303972] font-bold px-4">Name</th>
              <th className="text-[#303972] font-bold text-center">User ID</th>
              <th className="text-[#303972] font-bold text-center">Date Joined</th>
              <th className="text-[#303972] font-bold text-center">Services</th>
              <th className="text-[#303972] font-bold text-center">Location</th>
              <th className="text-[#303972] font-bold text-center">Chat</th>
              <th className="text-[#303972] font-bold text-center">Status</th>
              <th className="text-[#303972] font-bold text-center px-6">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {currentData.map((u, index) => (
              <tr
                key={u.id}
                className={`transition-colors ${
                  selectedUsers.includes(u.id) ? "bg-[#F5F6FF]" : "hover:bg-gray-50"
                }`}
              >
                <td className="px-3 py-4 text-center">
                  <input
                    type="checkbox"
                    className="accent-[#4D44B5] h-3 w-3 rounded cursor-pointer transition-all"
                    checked={selectedUsers.includes(u.id)}
                    onChange={() => toggleUser(u.id)}
                  />
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full w-10 h-10 bg-[#C5C2E9] shrink-0" />
                    <span className="text-[#303972] font-bold">{u.name}</span>
                  </div>
                </td>
                <td className="text-[#4D44B5] font-bold text-center whitespace-nowrap">{u.id}</td>
                <td className="text-[#A098AE] text-center whitespace-nowrap">{u.date}</td>
                <td className="text-[#303972] text-center font-bold whitespace-nowrap">{u.services}</td>
                <td className="text-[#303972] text-center whitespace-nowrap">{u.location}</td>
                <td>
                  <div className="flex justify-center">
                    <button onClick={() => navigate("/chats")} className="p-2.5 rounded-full bg-[#F5F6FF] text-[#4D44B5] hover:bg-[#4D44B5] hover:text-white transition-all">
                      <CiMail size={22} />
                    </button>
                  </div>
                </td>
                <td className="text-center px-4 whitespace-nowrap">
                  <span className={`inline-flex items-center justify-center px-4 py-1.5 min-w-[40px] rounded-full text-xs font-normal text-white ${
                      u.status.toLowerCase() === "active" ? "bg-[#0EAB56]" : "bg-[#FF5B22]"
                  }`}>
                    {u.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="relative inline-block" ref={activeMenu === index ? menuRef : null}>
                    <button onClick={() => setActiveMenu(activeMenu === index ? null : index)} className="p-2 hover:bg-gray-100 rounded-full">
                      <BsThreeDotsVertical size={20} className="text-[#A098AE]" />
                    </button>
                    {activeMenu === index && (
                      <div className={`absolute right-0 w-44 bg-white rounded-xl shadow-xl border border-gray-100 z-50 py-2 ${
                        index >= currentData.length - 2 ? "bottom-full mb-2" : "mt-2"
                      }`}>
                        <button onClick={() => navigate("/userdetails")} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#303972] hover:bg-gray-50 font-semibold">
                          <FiUser size={16} /> Profile
                        </button>
                        <button onClick={() => { onDelete(u.id); setActiveMenu(null); }} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 font-semibold">
                          <FaTrash size={14} /> Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-6 flex items-center justify-between bg-white border-t border-gray-100">
        <p className="text-[#A098AE] text-sm font-medium">
          Showing <span className="text-[#303972] font-bold">{startRange}-{endRange}</span> from <span className="text-[#303972] font-bold">{totalUsers}</span> users
        </p>

        <div className="flex items-center gap-2">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#4D44B5] disabled:opacity-20 transition-all"
          >
            <FaChevronLeft size={12} />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold transition-all ${
                currentPage === i + 1 
                ? "bg-[#4D44B5] text-white shadow-md shadow-indigo-100" 
                : "border border-gray-200 text-[#303972] hover:bg-gray-50"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#4D44B5] disabled:opacity-20 transition-all"
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;