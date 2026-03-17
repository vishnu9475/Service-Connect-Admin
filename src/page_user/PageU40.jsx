import React from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "../componants_user/Component4";
import Notifications from "../componants_user/Notification";

export default function PageU40() {
  const navigate = useNavigate();
  return (
    <div>
      <Component4
        title={"Notifications"}
        theme="black"
        onBack={() => navigate(-1)}
      />

      <Notifications />
    </div>
  );
}
