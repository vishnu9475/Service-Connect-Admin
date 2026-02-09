import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from  "../componants/neja/AdminMain114";
import DataTable from "../componants/arjun/dataTable";

const DeclinedBookingPage = () => {
  const navigate = useNavigate();
  const [openMenuId, setOpenMenuId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Manage data in state for deletions and re-renders
  const [declinedBookings, setDeclinedBookings] = useState([
    { uniqueId: 1, name: "Samanta William", id: "#123456781", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", reason: "Provider Unavailable" },
    { uniqueId: 2, name: "Samanta William", id: "#123456782", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", reason: "Emergency Reason" },
    { uniqueId: 3, name: "Samanta William", id: "#123456783", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", reason: "Provider Unavailable" },
    { uniqueId: 4, name: "Samanta William", id: "#123456784", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", reason: "Emergency Reason" },
    { uniqueId: 5, name: "Samanta William", id: "#123456785", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", reason: "Provider Unavailable" },
    { uniqueId: 6, name: "Samanta William", id: "#123456786", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", reason: "Emergency Reason" },
    { uniqueId: 7, name: "Tony Stark", id: "#123456787", service: "Suit Repair", category: "Tech", provider: "Jarvis", reason: "Out of Power" },
    { uniqueId: 8, name: "Steve Rogers", id: "#123456788", service: "Shield Polish", category: "Maintenance", provider: "Howard Stark", reason: "Missing Vibranium" },
    { uniqueId: 9, name: "Bruce Banner", id: "#123456789", service: "Lab Cleaning", category: "Janitorial", provider: "Stan Lee", reason: "Radiation Leak" },
    { uniqueId: 10, name: "Natasha Romanoff", id: "#123456790", service: "Interrogation", category: "Security", provider: "Nick Fury", reason: "Red in Ledger" },
    { uniqueId: 11, name: "Peter Parker", id: "#123456791", service: "Camera Repair", category: "Tech", provider: "Uncle Ben", reason: "Out of Webbing" },
    { uniqueId: 12, name: "Wanda Maximoff", id: "#123456792", service: "Reality Fix", category: "Magic", provider: "Agatha", reason: "Hex Error" },
  ]);

  // 2. Handle deletion logic (targeting uniqueId)
  const handleDeleteSelected = (idsToDelete) => {
    const updatedData = declinedBookings.filter((item) => !idsToDelete.includes(item.uniqueId));
    setDeclinedBookings(updatedData);
    
    // Auto-adjust page if current page becomes empty
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
    { 
      header: 'Reason', 
      render: (row) => (
        <span className="text-[#303972] text-sm italic whitespace-nowrap lg:whitespace-normal">
          {row.reason}
        </span>
      ) 
    },
    {
      header: 'Action',
      render: (row) => (
        <div className="relative flex justify-center">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setOpenMenuId(openMenuId === row.uniqueId ? null : row.uniqueId);
            }}
            className="text-gray-400 hover:text-[#4D44B5] font-bold text-xl tracking-tighter p-2"
          >
            ...
          </button>

          {openMenuId === row.uniqueId && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setOpenMenuId(null)}></div>
              <div className="absolute right-0 top-8 w-32 bg-white border border-gray-100 rounded-lg shadow-xl z-20 overflow-hidden text-left">
                <button 
                  onClick={() => navigate("/decbookingdetails")} 
                  className="w-full px-4 py-2 text-sm text-[#303972] hover:bg-gray-50 flex items-center gap-2"
                >
                  <span>📄</span> Details
                </button>
                <button 
                  onClick={() => {
                    if(window.confirm("Are you sure you want to delete this declined record?")) {
                      handleDeleteSelected([row.uniqueId]);
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
            title="Declined Bookings" 
            userName="Nabila" 
            userRole="Admin" 
            showSearch={true}
          >
            <div className="p-4 sm:p-6 lg:p-8 flex-1">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="min-w-[1000px] lg:min-w-full">
                    <DataTable 
                      columns={columns} 
                      data={declinedBookings} 
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                      onDeleteSelected={handleDeleteSelected}
                      rowIdKey="uniqueId" // Explicitly telling the table to use uniqueId
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

export default DeclinedBookingPage;