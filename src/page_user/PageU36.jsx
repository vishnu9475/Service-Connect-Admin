import React from "react";

import UserProfileEditForm_46 from "../componants_user/UserProfileEditForm_46";
import { useNavigate } from "react-router-dom";
import Component4 from "../componants_user/Component4";

export default function PageU36() {
  const navigate = useNavigate();
  return (
    <div>
      <Component4
        title={"Edit Profile"}
        theme="black"
        onBack={() => navigate(-1)}
      />
      <UserProfileEditForm_46 />
    </div>
  );
}
