import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from "../componants/neja/AdminMain114";
import StatCard115 from "../componants/neja/StatCard115";
import ItemCard142 from "../componants/neja/ItemCard142";
import { FiGrid, FiLayers } from "react-icons/fi";

const Page119 = () => {
  const navigate = useNavigate();
  const handleView = () => {
    navigate("/subCategory");
  };

  const handleEdit = () => {
    navigate("/addCategory");
  };

  const handleAdd = () => {
    navigate("/addCategory");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this franchisee?")) {
      alert("Delete logic here for ID: " + id);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F5F6FF] overflow-x-hidden">

      <AdminSideMenu113 />

      <div className="flex-1 lg:ml-64">
        <AdminMain114
          title="Categories"
          userName="Nabila A"
          userRole="Admin"
          showSearch={true}
        >
          {/* STATS */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="w-full sm:w-65">
              <StatCard115
                title="Categories"
                value={932}
                Icon={FiGrid}
                iconBg="bg-indigo-100"
                iconColor="text-indigo-600"
              />
            </div>

            <div className="w-full sm:w-65">
              <StatCard115
                title="Sub Categories"
                value={754}
                Icon={FiLayers}
                iconBg="bg-orange-100"
                iconColor="text-orange-500"
              />
            </div>
          </div>

          {/* ITEMS */}
          <ItemCard142
              onView={handleView}
              onEdit={handleEdit}
              onAdd={handleAdd}
              onDelete={handleDelete}
           />
        </AdminMain114>
      </div>
    </div>
  );
};

export default Page119;
