// import UserProfileMenuBar from "../componants_service/UserProfileMenuBar"

// const Page94 = () => {
//   return (
//     <div>
//         <UserProfileMenuBar/>
//     </div>
//   )
// }

// export default Page94

import React, { useState } from "react";
import UserProfileMenuBar_47 from "../componants_service/yaswanth/UserProfileMenuBar_47";

export default function PageU37() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
  
      
      {/* Header */}
     
<div className="flex justify-end">
        <button
          onClick={() => setShowProfile(true)}
          className="px-3 py-1.5 rounded-md bg-black text-white text-sm
                     hover:bg-gray-800 transition"
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
