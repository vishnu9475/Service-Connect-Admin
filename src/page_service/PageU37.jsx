import React, { useState } from "react";
import UserProfileMenuBar_47 from "../componants_service/yaswanth/UserProfileMenuBar_47";

export default function PageU37() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="   bg-[#1e2028]/90relative overflow-hidden">
      
      {/* Header */}
     
<div className="flex justify-end">
        <button
          onClick={() => setShowProfile(true)}
          className="px-3 py-1.5 rounded-md  bg-black/50 text-white text-sm
                     hover:bg-gray-400 transition"
        >
          Open Profile
        </button>
        </div>
     
     

      {/* Profile Menu Drawer */}
      <UserProfileMenuBar_47
        show={showProfile}
        setShow={setShowProfile}
      />
    </div>
  );
}
