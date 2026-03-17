import React from "react";
import Component4 from "../componants_user/Component4";
import UserProfile from "../componants_user/UserProfile";

export default function Profile() {
  return (
    <div>
      <Component4 theme="black" title={"Profile"} />
      <UserProfile />
    </div>
  );
}
