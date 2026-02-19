import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from  "../componants/neja/AdminMain114";
import DataTable from "../componants/arjun/dataTable";

const AcceptedBookingPage = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // 1. DATA IN STATE (Required for deletion to reflect on screen)
  const [bookingData, setBookingData] = useState([
    { id: "1", name: "Samanta William", service: "Tap Repair", provider: "Karen Hope", location: "Jakarta" },
    { id: "2", name: "Tony Stark", service: "Electrical", provider: "Nazrul Islam", location: "Mumbai" },
    { id: "3", name: "Steve Rogers", service: "Bulb Change", provider: "Karan Hope", location: "Kerala" },
    { id: "4", name: "Bruce Banner", service: "Plumbing", provider: "Karen Hope", location: "Jakarta" },
    { id: "5", name: "Natasha Romanoff", service: "Painting", provider: "Nazrul Islam", location: "Jakarta" },
    { id: "6", name: "Wanda Maximoff", service: "Cleaning", provider: "Karan Hope", location: "Jakarta" },
    { id: "7", name: "Peter Parker", service: "Camera Setup", provider: "Karen Hope", location: "Queens" },
    { id: "8", name: "Clinton Barton", service: "Security", provider: "Nazrul Islam", location: "Iowa" },
    { id: "9", name: "Scott Lang", service: "Pest Control", provider: "Karan Hope", location: "San Francisco" },
    { id: "10", name: "T'Challa", service: "Defense System", provider: "Karen Hope", location: "Wakanda" },
    { id: "11", name: "Dr. Strange", service: "Renovation", provider: "Nazrul Islam", location: "New York" },
    { id: "12", name: "Carol Danvers", service: "Power Check", provider: "Karan Hope", location: "Space Station" }
  ]);

  // 2. THE ONLY O-POP CONFIRMATION (One place for all deletes)
  const handleDelete = (idsToDelete) => {
    const isMultiple = idsToDelete.length > 1;
    const message = isMultiple 
      ? `Are you sure you want to delete ${idsToDelete.length} bookings?` 
      : "Are you sure you want to delete this booking?";

    if (window.confirm(message)) {
      setBookingData((prev) => prev.filter((item) => !idsToDelete.includes(item.id)));
      setActiveMenu(null);
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
    { header: 'Provider', key: 'provider' },
    { header: 'Location', key: 'location' },
    {
      header: 'Action',
      render: (row) => (
        <div className="relative flex justify-center">
          <button 
            onClick={(e) => {
                e.stopPropagation();
                setActiveMenu(activeMenu === row.id ? null : row.id);
            }}
            className="text-gray-400 hover:text-[#4D44B5] font-bold text-xl tracking-tighter p-2"
          >
            ...
          </button>

          {activeMenu === row.id && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setActiveMenu(null)}></div>
              <div className="absolute right-0 top-8 w-32 bg-white border border-gray-100 rounded-lg shadow-xl z-20 overflow-hidden text-left">
                <button 
                  onClick={() => navigate("/accbookingdetails")} 
                  className="w-full px-4 py-2 text-sm text-[#303972] hover:bg-gray-50 flex items-center gap-2"
                >
                  <span>📄</span> Details
                </button>
                <button 
                  onClick={() => handleDelete([row.id])} // Trigger single delete
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
          <AdminMain114 title="Accepted Bookings" userName="Nabila" userRole="Admin">
            <div className="p-4 sm:p-6 lg:p-8 flex-1">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="min-w-[800px] lg:min-w-full">
                     <DataTable 
                       columns={columns} 
                       data={bookingData} // Pass the state data
                       currentPage={currentPage}
                       onPageChange={handlePageChange}
                       onDeleteSelected={handleDelete} // Pass the single-confirmation function
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

export default AcceptedBookingPage;