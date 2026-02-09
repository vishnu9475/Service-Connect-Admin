import React from "react";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from "../componants/neja/AdminMain114";
import FranchiseType134 from "../componants/neja/FranchiseType134";
import EditFranchiseForm136 from "../componants/neja/EditFranchiseForm136";

const Page115 = () => {
  const [selectedType, setSelectedType] = React.useState("");
  const [isAddMode, setIsAddMode] = React.useState(true);

  const handleSelectType = (type) => {
    setSelectedType(type);
    setIsAddMode(false); 
  };

  const handleAddNew = () => {
    setSelectedType("");
    setIsAddMode(true); 
  };

  return (
    <div className="flex min-h-screen bg-[#F5F6FF] overflow-x-hidden">

      {/* SIDEBAR */}
      <AdminSideMenu113 />

      {/* MAIN CONTENT */}
      <div className="flex-1 lg:ml-64">
        <AdminMain114
          title="Edit / Add Franchisee Type"
          userName="Nabila"
          userRole="Admin"
          showSearch={false}
        >
          {/* PAGE GRID */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">

            {/* LEFT — TYPE LIST */}
            <div className="w-full lg:w-75 shrink-0">
              <FranchiseType134
                 onSelect={handleSelectType}
                 onAddNew={handleAddNew}
                 activeType={selectedType}
               />
            </div>

            {/* RIGHT — FORM */}
            <div className="flex-1">
                <EditFranchiseForm136
                  key={selectedType + isAddMode}
                  mode={isAddMode ? "add" : "view"}
                  typeName={selectedType}
                />
            </div>

          </div>
        </AdminMain114>
      </div>
    </div>
  );
};

export default Page115;
