import React, { useState } from "react";
import UserProfileMenuBar_47 from "../componants_user/UserProfileMenuBar_47";


export default function PageU37({onClose}) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div onClick={onClose} className="h-screen  ">

      {/* Profile Menu Drawer */}
      <UserProfileMenuBar_47
        
        setShow={setShowProfile}
      />
    </div>
  );
}
