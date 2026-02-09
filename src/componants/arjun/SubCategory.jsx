import React from "react";
import AdminSideMenu from "../components/AdminSideMenu";
import Header from "../components/Header";
import SubCategoryList from "../components/SubCategoryList";

const Page121 = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSideMenu />

      {/* Main Content (starts AFTER sidebar) */}
      <div className="flex-1 ml-0 lg:ml-[260px]">
        <Header
        title="Sub Categories"/>
        <SubCategoryList />
      </div>
    </div>
  );
};

export default Page121;
