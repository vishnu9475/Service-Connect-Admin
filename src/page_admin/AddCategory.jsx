import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from "../componants/neja/AdminMain114";
import AddCategoryForm143 from "../componants/neja/AddCategoryForm143";

const Page120 = () => {
  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/category");
  };
  return (
    <div className="flex min-h-screen bg-[#f5f6ff] overflow-x-hidden">

      {/* SIDEBAR */}
      <AdminSideMenu113 />

      {/* MAIN CONTENT */}
      <div className="flex-1 lg:ml-64">

        <AdminMain114
          title="Category"
          userName="Nabila"
          userRole="Admin"
          showSearch={true}
        >
          {/* PAGE CONTENT */}
         
            <div className="justify-start">
              <AddCategoryForm143
              onSave={handleSave}
               />
          </div>
       

        </AdminMain114>

      </div>
    </div>
  );
};

export default Page120;
