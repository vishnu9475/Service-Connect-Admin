import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from  "../componants/neja/AdminMain114";
import DataTable from "../componants/arjun/dataTable";

const IncompleteBookingPage = () => {
  const navigate = useNavigate();
  const [openMenuId, setOpenMenuId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Managed state for real-time deletions
  const [incompleteBookings, setIncompleteBookings] = useState([
    { internalId: 1, name: "Samanta William", id: "#123456781", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", location: "Jakarta" },
    { internalId: 2, name: "Tony Stark", id: "#123456782", service: "Suit Repair", category: "Tech", provider: "Jarvis", location: "New York" },
    { internalId: 3, name: "Steve Rogers", id: "#123456783", service: "Shield Polish", category: "Maintenance", provider: "Howard Stark", location: "Brooklyn" },
    { internalId: 4, name: "Bruce Banner", id: "#123456784", service: "Lab Cleaning", category: "Janitorial", provider: "Stan Lee", location: "Dayton" },
    { internalId: 5, name: "Natasha Romanoff", id: "#123456785", service: "Interrogation", category: "Security", provider: "Nick Fury", location: "Moscow" },
    { internalId: 6, name: "Clint Barton", id: "#123456786", service: "Archery Training", category: "Fitness", provider: "Maria Hill", location: "Los Angeles" },
    { internalId: 7, name: "Wanda Maximoff", id: "#123456787", service: "Reality Fix", category: "Magic", provider: "Agatha", location: "Sokovia" },
    { internalId: 8, name: "Vision", id: "#123456788", service: "AI Maintenance", category: "Tech", provider: "Tony Stark", location: "New York" },
    { internalId: 9, name: "Peter Parker", id: "#123456789", service: "Camera Repair", category: "Tech", provider: "Uncle Ben", location: "Queens" },
    { internalId: 10, name: "Sam Wilson", id: "#123456790", service: "Wing Repair", category: "Tech", provider: "Howard Stark", location: "Washington" },
    { internalId: 11, name: "Bucky Barnes", id: "#123456791", service: "Arm Upgrade", category: "Tech", provider: "Steve Rogers", location: "Brooklyn" },
    { internalId: 12, name: "Nick Fury", id: "#123456792", service: "Mission Brief", category: "Admin", provider: "Maria Hill", location: "New York" },
  ]);

  // 2. Logic to filter data based on internalId
  const handleDeleteSelected = (idsToDelete) => {
    const updatedData = incompleteBookings.filter((item) => !idsToDelete.includes(item.internalId));
    setIncompleteBookings(updatedData);
    
    // Safety check: Move back one page if current page becomes empty
    if (updatedData.length <= (currentPage - 1) * 10 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const columns = [
    { 
      header: 'Customer', 
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#C5C2E9]" />
          <span className="font-bold text-[#303972] whitespace-nowrap">{row.name}</span>
        </div>
      )
    },
    { 
      header: 'Booking Id', 
      render: (row) => <span className="text-[#4D44B5] font-bold">{row.id}</span> 
    },
    { header: 'Service', key: 'service' },
    { header: 'Category', key: 'category' },
    { header: 'Provider', key: 'provider' },
    { header: 'Location', key: 'location' },
    {
      header: 'Action',
      render: (row) => (
        <div className="relative flex justify-center">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setOpenMenuId(openMenuId === row.internalId ? null : row.internalId);
            }}
            className="text-gray-400 hover:text-[#4D44B5] font-bold text-xl tracking-tighter p-2"
          >
            ...
          </button>

          {openMenuId === row.internalId && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setOpenMenuId(null)}></div>
              <div className="absolute right-0 top-8 w-32 bg-white border border-gray-100 rounded-lg shadow-xl z-20 overflow-hidden text-left">
                <button 
                  onClick={() => navigate("/incbookingdetails")} 
                  className="w-full px-4 py-2 text-sm text-[#303972] hover:bg-gray-50 flex items-center gap-2"
                >
                  <span>📄</span> Details
                </button>
                <button 
                  onClick={() => {
                    if(window.confirm("Delete this incomplete booking record?")) {
                      handleDeleteSelected([row.internalId]);
                    }
                  }}
                  className="w-full px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-2"
                >
                  <span>🗑️</span> Delete
                </button>
              </div>
            </>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="flex min-h-screen bg-[#f5f6ff] w-full overflow-x-hidden">
      <AdminSideMenu113 />
      
      <div className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen relative">
        <div className="mx-auto w-full max-w-[2560px] flex flex-col flex-1">
          <AdminMain114 
            title="Incomplete Bookings" 
            userName="Nabila" 
            userRole="Admin" 
            showSearch={true}
          >
            <div className="p-4 sm:p-6 lg:p-8 flex-1">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="min-w-[900px] lg:min-w-full">
                    <DataTable 
                      columns={columns} 
                      data={incompleteBookings} 
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                      onDeleteSelected={handleDeleteSelected}
                      rowIdKey="internalId" // Map to the 'internalId' property in your data
                    />
                  </div>
                </div>
              </div>
            </div>
          </AdminMain114>
        </div>
      </div>
    </div>
  );
};

export default IncompleteBookingPage;