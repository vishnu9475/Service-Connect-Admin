import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from "../componants/neja/AdminMain114";
import DataTable from "../componants/arjun/dataTable";

const ALLBookingPage = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  /* ✅ UPDATED DUMMY DATA */
  const [bookings, setBookings] = useState([
    { id: "1", name: "Samanta William", service: "Tap Repair", provider: "Karen Hope", location: "Jakarta", status: "Incomplete" },
    { id: "2", name: "Tony Stark", service: "Electrical", provider: "Nazrul Islam", location: "Mumbai", status: "Ongoing" },
    { id: "3", name: "Steve Rogers", service: "Bulb Change", provider: "Karan Hope", location: "Kerala", status: "Completed" },
    { id: "4", name: "Bruce Banner", service: "Plumbing", provider: "Karen Hope", location: "Jakarta", status: "Accepted" },
    { id: "5", name: "Natasha Romanoff", service: "Painting", provider: "Nazrul Islam", location: "Jakarta", status: "Declined" },
    { id: "6", name: "Wanda Maximoff", service: "Cleaning", provider: "Karan Hope", location: "Jakarta", status: "Accepted" },
    { id: "7", name: "Peter Parker", service: "Network", provider: "Queens", location: "Queens", status: "Ongoing" },
    { id: "8", name: "Clinton Barton", service: "Security", provider: "Nazrul Islam", location: "Iowa", status: "Completed" },
  ]);

  /* ✅ STATUS → PAGE ROUTER */
  const getDetailsRoute = (status) => {
    switch (status) {
      case "Accepted":
        return "/accbookingdetails";

      case "Ongoing":
        return "/ongbookingdetails";

      case "Completed":
        return "/combookingsdetails";

      case "Declined":
        return "/decbookingdetails";

      case "Incomplete":
      default:
        return "/incbookingdetails";
    }
  };

  /* ✅ DELETE LOGIC */
  const handleDeleteSelected = (idsToDelete) => {
    const updatedData = bookings.filter(
      (item) => !idsToDelete.includes(item.id)
    );

    setBookings(updatedData);

    if (updatedData.length <= (currentPage - 1) * 10) {
      setCurrentPage(1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  /* ✅ STATUS BADGE COLORS */
  const getStatusStyles = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-600 text-green-50";

      case "Ongoing":
        return "bg-blue-600 text-blue-50";

      case "Accepted":
        return "bg-purple-600 text-purple-50";

      case "Declined":
        return "bg-red-600 text-red-50";

      default:
        return "bg-orange-600 text-orange-50"; // Incomplete
    }
  };

  const columns = [
    {
      header: "Customer",
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#C5C2E9]" />
          <span className="font-bold text-[#303972] whitespace-nowrap">
            {row.name}
          </span>
        </div>
      ),
    },
    {
      header: "Booking Id",
      render: (row) => (
        <span className="text-[#4D44B5] font-bold">#{row.id}</span>
      ),
    },
    { header: "Service", key: "service" },
    { header: "Provider", key: "provider" },
    { header: "Location", key: "location" },
    {
      header: "Status",
      render: (row) => (
        <span
          className={`${getStatusStyles(
            row.status
          )} px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap`}
        >
          {row.status}
        </span>
      ),
    },
    {
      header: "Action",
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
              <div
                className="fixed inset-0 z-10"
                onClick={() => setActiveMenu(null)}
              ></div>

              <div className="absolute right-0 top-8 w-32 bg-white border border-gray-100 rounded-lg shadow-xl z-20 overflow-hidden text-left">
                
                {/* ✅ SMART STATUS NAVIGATION */}
                <button
                  onClick={() =>
                    navigate(getDetailsRoute(row.status), { state: row })
                  }
                  className="w-full px-4 py-2 text-sm text-[#303972] hover:bg-gray-50 flex items-center gap-2"
                >
                  <span>📄</span> Details
                </button>

                <button
                  onClick={() => handleDeleteSelected([row.id])}
                  className="w-full px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-2"
                >
                  <span>🗑️</span> Delete
                </button>
              </div>
            </>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#f5f6ff] w-full overflow-x-hidden">
      <AdminSideMenu113 />

      <div className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen relative">
        <div className="mx-auto w-full max-w-[2560px] flex flex-col flex-1">
          
          <AdminMain114
            title="All Bookings"
            userName="Nabila"
            userRole="Admin"
          >
            <div className="p-4 sm:p-6 lg:p-8 flex-1">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="min-w-[900px] lg:min-w-full">
                    
                    <DataTable
                      columns={columns}
                      data={bookings}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                      onDeleteSelected={handleDeleteSelected}
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

export default ALLBookingPage;