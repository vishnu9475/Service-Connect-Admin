import React from "react";

import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from "../componants/neja/AdminMain114";
import ServiceType139 from "../componants/neja/ServiceType139";
import DailyWorkForm140 from "../componants/neja/DailyWorkForm140";

const Page118 = () => {

  const [types] = React.useState([
  "Daily work",
  "One Time Lead",
]);

const [selectedType, setSelectedType] = React.useState("Add New Service");

const handleSelectType = (type) => {
  setSelectedType(type);
};

const handleAddNewType = () => {
  setSelectedType("Add New Service");
};

  return (
    <div className="flex min-h-screen bg-[#F5F6FF] overflow-y-auto">

      {/* SIDEBAR */}
      <AdminSideMenu113 />

      {/* MAIN CONTENT */}
      <div className="flex-1 lg:ml-64 px-3 sm:px-6 overflow-y-auto">

        <AdminMain114
          title="Service Type"
          userName="Nabila"
          userRole="Admin"
          showSearch={false}
        >

          {/* PAGE GRID */}
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">

            {/* LEFT : SERVICE TYPE CARD */}
            <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:w-70 xl:w-75 shrink-0 mx-auto lg:mx-0">
              <ServiceType139
              types={types}
                onSelect={handleSelectType}
                onAddNew={handleAddNewType}
                activeType={selectedType} 
              />
            </div>

            {/* RIGHT : FORM */}
            <div className="w-full flex-1 min-w-0 mx-auto lg:mx-0">
              <DailyWorkForm140
              key={selectedType}  
              title={selectedType}
              />
            </div>

          </div>

        </AdminMain114>
      </div>
    </div>
  );
};

export default Page118;
