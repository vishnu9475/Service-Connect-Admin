import React from "react";
import Component1 from "../componants_user/first";
import Component2 from "../componants_user/Component2";
import Component3 from "../componants_user/Component3";

function Page1() {
  return (
    <div className="w-full min-h-screen bg-gray-200 ">
      <Component1 />
      <Component2 mode="signup" />
      <Component3 type="signup" />
    </div>
  );
}

export default Page1;
