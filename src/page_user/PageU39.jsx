import React from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "../componants_user/Component4";
import Terms from "../componants_user/Terms";

export default function PageU39() {
  const navigate = useNavigate();
  return (
    <div>
      <Component4
        title={"Teams and Conditions"}
        theme="black"
        onBack={() => navigate(-1)}
      />
      <Terms />
    </div>
  );
}
