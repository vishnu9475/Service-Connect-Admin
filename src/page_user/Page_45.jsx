import React from 'react'
import ChatContact_52 from '../componants_user/ChatContact_52';
import Component4 from '../componants_user/Component';
import BottomNavBar from '../componants_user/BottomNavBar';

const Page_45 = () => {
  return (
    <div className="h-screen flex flex-col bg-[#D9D9DB]">
      <Component4
        title="CHAT"
        theme="black"
        showBack
        showSearch
        showFilter
      />

      {/* Content area */}
      <div className="flex-1 ">
        <ChatContact_52 />
        <BottomNavBar/>
      </div>
    </div>)
}

export default Page_45;
