import React from "react";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import Header114 from "../componants/neja/AdminMain114";
import SubCategoryList from "../componants/midhun/SubCategoryList";

const Page121 = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSideMenu113 />

      {/* Main Content (starts AFTER sidebar) */}
      <div className="flex-1 ml-0 lg:ml-[260px]">
        <Header114
        title="Sub Categories">
        <SubCategoryList />
        </Header114>
      </div>
    </div>
  );
};

export default Page121;