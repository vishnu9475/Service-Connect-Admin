import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from  "../componants/neja/AdminMain114";
import DataTable from "../componants/arjun/dataTable";

const OngoingBookingPage = () => {
  const navigate = useNavigate();
  const [openMenuId, setOpenMenuId] = useState(null); 

  // --- Pagination State ---
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Manage ongoing data in state to allow UI updates on delete
  const [ongoingData, setOngoingData] = useState([
    { id: "1", name: "Samanta William", idNum: "#123456781", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", location: "Jakarta", amount: "100$" },
    { id: "2", name: "Samanta William", idNum: "#123456782", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", location: "Jakarta", amount: "100$" },
    { id: "3", name: "Samanta William", idNum: "#123456783", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", location: "Jakarta", amount: "100$" },
    { id: "4", name: "Samanta William", idNum: "#123456784", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", location: "Jakarta", amount: "100$" },
    { id: "5", name: "Samanta William", idNum: "#123456785", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", location: "Jakarta", amount: "100$" },
    { id: "6", name: "Samanta William", idNum: "#123456786", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", location: "Jakarta", amount: "100$" },
    { id: "7", name: "Samanta William", idNum: "#123456787", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", location: "Jakarta", amount: "100$" },
    { id: "8", name: "Samanta William", idNum: "#123456788", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", location: "Jakarta", amount: "100$" },
    { id: "9", name: "Samanta William", idNum: "#123456789", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", location: "Jakarta", amount: "100$" },
    { id: "10", name: "Samanta William", idNum: "#123456790", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", location: "Jakarta", amount: "100$" },
    { id: "11", name: "Samanta William", idNum: "#123456791", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", location: "Jakarta", amount: "100$" },
    { id: "12", name: "Samanta William", idNum: "#123456792", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", location: "Jakarta", amount: "100$" },
  ]);

  // 2. Logic to delete items from state
  const handleDeleteSelected = (idsToDelete) => {
    const updatedData = ongoingData.filter((item) => !idsToDelete.includes(item.id));
    setOngoingData(updatedData);
    
    // Safety check: if current page is now empty, move back one page
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
      render: (row) => <span className="text-[#4D44B5] font-bold">{row.idNum}</span> 
    },
    { header: 'Service', key: 'service' },
    { header: 'Category', key: 'category' },
    { header: 'Provider', key: 'provider' },
    { header: 'Location', key: 'location' },
    { header: 'Amount', key: 'amount' },
    {
      header: 'Action',
      render: (row) => (
        <div className="relative flex justify-center">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setOpenMenuId(openMenuId === row.id ? null : row.id);
            }}
            className="text-gray-400 hover:text-[#4D44B5] font-bold text-xl tracking-tighter p-2"
          >
            ...
          </button>

          {openMenuId === row.id && (
            <>
              {/* Overlay for closing menu */}
              <div className="fixed inset-0 z-10" onClick={() => setOpenMenuId(null)}></div>
              <div className="absolute right-0 top-8 w-32 bg-white border border-gray-100 rounded-lg shadow-xl z-20 overflow-hidden text-left">
                <button 
                  onClick={() => navigate("/ongbookingdetails")} 
                  className="w-full px-4 py-2 text-sm text-[#303972] hover:bg-gray-50 flex items-center gap-2"
                >
                  <span>📄</span> Details
                </button>
                <button 
                  onClick={() => {
                    if(window.confirm("Delete this ongoing record?")) {
                      handleDeleteSelected([row.id]);
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
            title="Ongoing Bookings" 
            userName="Nabila" 
            userRole="Admin" 
            showSearch={true}
          >
            <div className="p-4 sm:p-6 lg:p-8 2xl:p-12 flex-1">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="min-w-[1000px] lg:min-w-full">
                    <DataTable 
                      columns={columns} 
                      data={ongoingData} 
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                      onDeleteSelected={handleDeleteSelected}
                      rowIdKey="id" // Explicitly mapping to the 'id' field
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

export default OngoingBookingPage;