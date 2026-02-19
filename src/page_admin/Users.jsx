import React, { useState, useRef, useEffect } from "react";
import { LuTrash2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom"; 
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from "../componants/neja/AdminMain114";
import StatCard115 from "../componants/arjun/StatCard115"; 
import UserList from "../componants/arjun/UserList";

import { 
  Users as UsersIcon, UserCheck, ClipboardList, Headphones, 
  RotateCw, AlertCircle 
} from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Users = () => {
  const navigate = useNavigate();
  
  const [allUsers, setAllUsers] = useState([
  { name: "Samanta William", id: "#123456781", date: "March 25, 2021", services: 2, location: "Jakarta", status: "Inactive" },
  { name: "Tony Soap", id: "#123456782", date: "March 25, 2022", services: 8, location: "Jakarta", status: "active" },
  { name: "Karen Hope", id: "#123456783", date: "March 25, 2023", services: 10, location: "Jakarta", status: "active" },
  { name: "Jordan Nico", id: "#123456784", date: "March 25, 2020", services: 0, location: "Jakarta", status: "active" },
  { name: "Nadila Adani", id: "#123456785", date: "April 12, 2023", services: 5, location: "Jakarta", status: "active" },
  { name: "Dandi Setyawan", id: "#123456786", date: "April 15, 2023", services: 3, location: "Jakarta", status: "Inactive" },
  { name: "Bella Simatupang", id: "#123456787", date: "May 02, 2023", services: 12, location: "Jakarta", status: "active" },
  { name: "Rizky Ramadhan", id: "#123456788", date: "May 10, 2023", services: 1, location: "Jakarta", status: "active" },
  { name: "Eka Wijaya", id: "#123456789", date: "June 18, 2023", services: 7, location: "Jakarta", status: "Inactive" },
  { name: "Fanya Putri", id: "#123456790", date: "June 22, 2023", services: 4, location: "Jakarta", status: "active" },
  { name: "Gilang Pratama", id: "#123456791", date: "July 01, 2023", services: 9, location: "Jakarta", status: "active" },
  { name: "Hana Lestari", id: "#123456792", date: "July 14, 2023", services: 2, location: "Jakarta", status: "active" },
  { name: "Indra Kusuma", id: "#123456793", date: "August 05, 2023", services: 15, location: "Jakarta", status: "Inactive" },
  { name: "Joko Anwar", id: "#123456794", date: "August 20, 2023", services: 6, location: "Jakarta", status: "active" },
  { name: "Kiki Amalia", id: "#123456795", date: "September 03, 2023", services: 0, location: "Jakarta", status: "active" },
  { name: "Lucky Hakim", id: "#123456796", date: "September 12, 2023", services: 11, location: "Jakarta", status: "active" },
  { name: "Maya Sofia", id: "#123456797", date: "October 05, 2023", services: 3, location: "Jakarta", status: "Inactive" },
  { name: "Nanda Persada", id: "#123456798", date: "October 22, 2023", services: 8, location: "Jakarta", status: "active" },
  { name: "Olivia Zalianty", id: "#123456799", date: "November 10, 2023", services: 4, location: "Jakarta", status: "active" },
  { name: "Putu Gede", id: "#123456800", date: "December 01, 2023", services: 5, location: "Jakarta", status: "active" },
]);
  const [filterStatus, setFilterStatus] = useState("All Status");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [selectedUsers, setSelectedUsers] = useState([]);
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  const filterRef = useRef(null);
  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) setIsFilterOpen(false);
      if (sortRef.current && !sortRef.current.contains(event.target)) setIsSortOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDeleteSingle = (id) => {
    setAllUsers(allUsers.filter(u => u.id !== id));
    setSelectedUsers(selectedUsers.filter(sid => sid !== id));
  };

  const handleBulkDelete = () => {
    if (selectedUsers.length === 0) return;
    if (window.confirm(`Delete ${selectedUsers.length} selected users?`)) {
      setAllUsers(allUsers.filter(u => !selectedUsers.includes(u.id)));
      setSelectedUsers([]);
    }
  };

  const processedData = allUsers
    .filter(u => {
      const matchesFilter = filterStatus === "All Status" || u.status === filterStatus;
      const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
    });

  const stats = [
    { title: "Total Users", value: "24K", Icon: UsersIcon, bg: "bg-[#4D44B5]" },
    { title: "Online", value: "82K", Icon: UserCheck, bg: "bg-[#4ADE80]" },
    { title: "Service Request", value: "200", Icon: ClipboardList, bg: "bg-[#FACC15]" },
    { title: "Lead Request", value: "89", Icon: Headphones, bg: "bg-[#22D3EE]" },
    { title: "Active Service", value: "89", Icon: RotateCw, bg: "bg-[#0D9488]" },
    { title: "Complaints", value: "89", Icon: AlertCircle, bg: "bg-[#F87171]" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f5f6ff] w-full">
      <AdminSideMenu113 />
      
      <div className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen relative">
        <AdminMain114 title="USER LIST" userName="Nabila" userRole="Admin">
          
          <div className="p-4 md:p-8 space-y-8 flex-1">
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {stats.map((s, i) => <StatCard115 key={i} {...s} iconBg={s.bg} />)}
            </div>

            <div className="flex flex-col xl:flex-row justify-between gap-6 items-center">
              {/* --- SEARCH BAR --- */}
              <div className="relative w-full xl:w-96 group">
                <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[#4D44B5] transition-transform" />
                <input 
                  type="text" 
                  className="w-full pl-14 pr-6 py-3 rounded-full bg-white border-none shadow-sm focus:ring-1 focus:ring-[#4D44B5] text-sm outline-none"
                  placeholder="Search here..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* --- ACTION BUTTONS GROUP --- */}
              <div className="flex flex-wrap items-center justify-end gap-3 w-full xl:w-auto">
                
                {/* FILTER: Text Only */}
                <div ref={filterRef} className="relative">
                  <button 
                    onClick={() => setIsFilterOpen(!isFilterOpen)} 
                    className="flex items-center justify-between gap-2 px-5 py-2.5 border border-[#4D44B5] text-[#4D44B5] rounded-full bg-white text-sm font-medium hover:bg-indigo-50 transition-all min-w-[130px]"
                  >
                    <span>{filterStatus}</span>
                    <IoMdArrowDropdown size={18} className={`transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isFilterOpen && (
                    <div className="absolute right-0 mt-2 w-44 bg-white shadow-xl rounded-2xl z-50 border border-gray-500 overflow-hidden">
                      <div className="flex flex-col">
                        {["All Status", "active", "Inactive"].map((st, index, array) => (
                          <button 
                            key={st} 
                            className={`w-full text-left px-5 py-3 text-sm hover:bg-gray-50 font-medium transition-colors ${
                              filterStatus === st ? "text-[#4D44B5]" : "text-[#303972]"
                            } ${
                              index !== array.length - 1 ? "border-b border-gray-100" : ""
                            }`} 
                            onClick={() => {setFilterStatus(st); setIsFilterOpen(false);}}
                          >
                            {st}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* SORT: Text Only */}
                <div ref={sortRef} className="relative">
                  <button 
                    onClick={() => setIsSortOpen(!isSortOpen)} 
                    className="flex items-center justify-between gap-2 px-5 py-2.5 border border-[#4D44B5] text-[#4D44B5] rounded-full bg-white text-sm font-medium hover:bg-indigo-50 transition-all min-w-[110px]"
                  >
                    <span>{sortOrder}</span>
                    <IoMdArrowDropdown size={18} className={`transition-transform ${isSortOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isSortOpen && (
                    <div className="absolute right-0 mt-2 w-44 bg-white shadow-xl rounded-2xl z-50 border border-gray-500 overflow-hidden">
                      <div className="flex flex-col">
                        {["Newest", "Oldest", "Last Updated"].map((opt, index, array) => (
                          <button 
                            key={opt} 
                            className={`w-full text-left px-5 py-3 text-sm hover:bg-gray-50 font-medium transition-colors ${
                              sortOrder === opt ? "text-[#4D44B5]" : "text-[#303972]"
                            } ${
                              index !== array.length - 1 ? "border-b border-gray-100" : ""
                            }`} 
                            onClick={() => {setSortOrder(opt); setIsSortOpen(false);}}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => navigate("/addnewuser")} 
                  className="px-6 py-2.5 bg-[#4D44B5] text-white rounded-full font-medium text-sm hover:bg-[#3b348a] transition-all whitespace-nowrap"
                >
                  + New User
                </button>

                {/* CLEAN TRASH ICON */}
                <button 
                    onClick={handleBulkDelete} 
                    disabled={selectedUsers.length === 0} 
                    className={`p-2 transition-all flex items-center justify-center ${
                    selectedUsers.length > 0 
                     ? "text-[#4D44B5] hover:scale-110 active:scale-95" 
                    : "text-gray-300 cursor-not-allowed"
                     }`}
                 >
                  <LuTrash2 size={24} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* --- TABLE SECTION --- */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
              <UserList 
                users={processedData} 
                onDelete={handleDeleteSingle} 
                selectedUsers={selectedUsers} 
                setSelectedUsers={setSelectedUsers} 
              />
            </div>
            
          </div>
        </AdminMain114>
      </div>
    </div>
  );
};

export default Users;