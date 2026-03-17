import React, { useState } from "react";
import Component4 from "../componants_user/Component4";
import Comp10 from "../componants_user/Comp10";
import Comp11 from "../componants_user/Comp11";
import Comp12 from "../componants_user/Comp12";
import Comp13 from "../componants_user/Comp13";
import Comp14 from "../componants_user/Comp14";
import PageU37 from "./PageU37";
// import PageU35 from "./pageU35";

import PopularSirviceCard from "../componants_user/PopularSirviceCard";
import BottomNavBar from "../componants_user/BottomNavBar";
import PageU35 from "./pageU35";

const Page11 = () => {
  const [popup, setPopup] = useState(false);
  const [popup1, setPopup1] = useState(false);

  return (
    <div>
      {/* MOBILE MENU POPUP */}
      {popup && (
        <div className="fixed inset-0 z-50 flex items-start md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setPopup(false)}
          />

          {/* Drawer */}
          <div className="relative z-10 bg-white w-[80%] h-full">
            <PageU37 onClose={() => setPopup(false)} />
          </div>
        </div>
      )}

      {/* PROFILE POPUP */}
      {popup1 && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setPopup1(false)}
          />
          <div className="relative z-10 bg-white w-full md:w-[30%] h-full md:h-auto">
            <PageU35 onClose={() => setPopup1(false)} />
          </div>
        </div>
      )}

      {/* HEADER */}
      <Component4
        pop={() => setPopup(true)}
        pop1={() => setPopup1(true)}
        theme="black"
        title="SERVICE CONNECT"
        shownotification={true}
        showprofil={true}
        showBack={false}
        showMenubar={true}
      />

      {/* MAIN LAYOUT */}
      <div className="w-full flex">

        {/* SIDEBAR (Tablet + Desktop Only) */}
        <div className="hidden md:block md:w-[20%] lg:w-[15%] bg-gradient-to-t from-black to-gray-900">
          <PageU37 />
        </div>

        {/* CENTER CONTENT */}
        <div className="w-full md:w-[80%] lg:w-[70%] bg-gray-100">
          <Comp10 />
          <Comp11 />
          <Comp12 />
          <Comp13 />
          <Comp14 />
          <BottomNavBar />
        </div>

        {/* RIGHT ADS (Desktop Only) */}
        <div className="hidden lg:block lg:w-[15%] bg-gradient-to-t from-black to-gray-500 pl-6">
          <h3 className="text-white mt-4">Ads</h3>
          <PopularSirviceCard />
          <PopularSirviceCard />
          <PopularSirviceCard />
        </div>
      </div>
    </div>
  );
};

export default Page11;