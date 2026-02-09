import React, { useState } from "react"; // Fixes 'useState' is not defined
import { Outlet } from "react-router-dom"; // Fixes 'Outlet' is not defined
import AdminSideMenu113 from "./AdminSideMenu113"; // Fixes 'AdminSideMenu113' is not defined
import AdminMain114 from "./AdminMain114"; // Fixes 'AdminMain114' is not defined

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("Dashboard");
  
  // Icon Control States
  const [showSearch, setShowSearch] = useState(true);
  const [showBell, setShowBell] = useState(true);
  const [showSettings, setShowSettings] = useState(true);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div className="flex h-screen bg-[#F3F4FF] overflow-hidden w-full">
      {/* LEFT: Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 lg:relative lg:translate-x-0 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <AdminSideMenu113 onClose={() => setIsSidebarOpen(false)} />
      </aside>

      {/* RIGHT: Content Area */}
      <div className="flex-1 flex flex-col min-0 overflow-hidden">
        <div className="px-2 pt-2">
          <AdminMain114 
            title={headerTitle} 
            showSearch={showSearch}
            showNotifications={showBell} 
            showSettings={showSettings}
            showProfile={showProfile}
            toggleSidebar={() => setIsSidebarOpen(true)} 
          />
        </div>

        <main className="flex-1 overflow-y-auto px-2 pb-2 mt-2">
          {/* We pass all controllers through the context so pages can use them */}
          <Outlet context={{ 
            setHeaderTitle, 
            setShowSearch, 
            setShowBell, 
            setShowSettings, 
            setShowProfile 
          }} /> 
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; // Fixes 'export default not found'