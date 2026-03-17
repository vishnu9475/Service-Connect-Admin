import React from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "../componants_user/Component4";
import SecuritySettings111 from "../componants_user/SecuritySettings111";

export default function PageU44() {
  const navigate = useNavigate();
  return (
    <div>
      <Component4
        title={"Security"}
        theme="black"
        onBack={() => navigate(-1)}
      />
      <SecuritySettings111 />
    </div>
  );
}
