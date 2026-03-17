import React from "react";
import BottomNavBar from "../componants_user/BottomNavBar";
import Chat from "../componants_user/Chat";
import Component4 from "../componants_user/Component4";

export default function PageU45() {
  return (
    <div>
      <Component4 title={"Chat"} theme="black" showSearch={true} />
      <Chat />
      <BottomNavBar />
    </div>
  );
}
