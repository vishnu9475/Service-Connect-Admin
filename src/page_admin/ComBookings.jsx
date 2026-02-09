import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from  "../componants/neja/AdminMain114";
import DataTable from "../componants/arjun/dataTable";

const CompletedBookingPage = () => {
  const navigate = useNavigate();
  const [openMenuId, setOpenMenuId] = useState(null);

  // --- Pagination State ---
  // The logic is now handled inside DataTable based on this state
  const [currentPage, setCurrentPage] = useState(1);

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
    { header: 'Date', key: 'date' },
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
              <div className="fixed inset-0 z-10" onClick={() => setOpenMenuId(null)}></div>
              <div className="absolute right-0 top-8 w-32 bg-white border border-gray-100 rounded-lg shadow-xl z-20 overflow-hidden text-left">
                <button 
                  onClick={() => navigate("/combookingsdetails")} 
                  className="w-full px-4 py-2 text-sm text-[#303972] hover:bg-gray-50 flex items-center gap-2"
                >
                  <span>📄</span> Details
                </button>
                <button className="w-full px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-2">
                  <span>🗑️</span> Delete
                </button>
              </div>
            </>
          )}
        </div>
      )
    }
  ];

  // Added more records to test the 10-item page limit
  const data = [
    { id: "1", name: "Samanta William", idNum: "#123456781", service: "Tap Repair", category: "Plumbing", provider: "Karen Hope", location: "Jakarta", date: "March 25, 2021" },
    { id: "2", name: "Tony Stark", idNum: "#123456782", service: "AC Service", category: "Appliance", provider: "Nazrul Islam", location: "New York", date: "March 26, 2021" },
    { id: "3", name: "Steve Rogers", idNum: "#123456783", service: "Painting", category: "Renovation", provider: "Karan Hope", location: "Brooklyn", date: "March 27, 2021" },
    { id: "4", name: "Samanta William", idNum: "#123456784", service: "Cleaning", category: "Housekeeping", provider: "Karen Hope", location: "Jakarta", date: "March 28, 2021" },
    { id: "5", name: "Bruce Banner", idNum: "#123456785", service: "Electrical", category: "Maintenance", provider: "Nazrul Islam", location: "India", date: "March 29, 2021" },
    { id: "6", name: "Natasha Romanoff", idNum: "#123456786", service: "Security", category: "Protection", provider: "Karan Hope", location: "Russia", date: "March 30, 2021" },
    { id: "7", name: "Peter Parker", idNum: "#123456787", service: "Network", category: "IT", provider: "Karen Hope", location: "Queens", date: "April 01, 2021" },
    { id: "8", name: "Wanda Maximoff", idNum: "#123456788", service: "Interior", category: "Design", provider: "Nazrul Islam", location: "Westview", date: "April 02, 2021" },
    { id: "9", name: "Stephen Strange", idNum: "#123456789", service: "Medical", category: "Health", provider: "Karan Hope", location: "London", date: "April 03, 2021" },
    { id: "10", name: "Carol Danvers", idNum: "#123456790", service: "Energy", category: "Power", provider: "Karen Hope", location: "Space", date: "April 04, 2021" },
    { id: "11", name: "Thor Odinson", idNum: "#123456791", service: "Hammer Repair", category: "Tools", provider: "Nazrul Islam", location: "Asgard", date: "April 05, 2021" },
    { id: "12", name: "Loki Laufeyson", idNum: "#123456792", service: "Illusion", category: "Magic", provider: "Karan Hope", location: "Asgard", date: "April 06, 2021" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f5f6ff] w-full overflow-x-hidden">
      <AdminSideMenu113 />
      
      <div className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen relative">
        <div className="mx-auto w-full max-w-[2560px] flex flex-col flex-1">
          <AdminMain114 
            title="Completed Bookings" 
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
                       data={data} 
                       currentPage={currentPage}
                       onPageChange={handlePageChange}
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

export default CompletedBookingPage;