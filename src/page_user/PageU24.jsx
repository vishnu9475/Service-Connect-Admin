import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "../componants_user/Component";
import Ereciept from "../componants_user/Ereciept";
import HeaderDropDown from "../componants_user/HeaderDropDown";


export default function PageU24() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 font-sans relative">
      <div>
        <Component4
          title="Ereciept"
          theme="black"
          showBack={false}
          showMenu={true}
          BackClick={true}
          onMenuClick={() => setShowDropdown(prev => !prev)}
          onBackClick={() => navigate("/Page11")}
        />
        {showDropdown && <HeaderDropDown onClose={() => setShowDropdown(false)} />}
      </div>  
      <div id="pdf-content"  className="min-h-screen mx-auto bg-gray-100 text-black my-4">
        <Ereciept />
      </div>  
    </div>
  );
}
