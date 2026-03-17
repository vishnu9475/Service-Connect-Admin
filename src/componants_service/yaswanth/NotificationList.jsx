import React from 'react';
// Corrected imports based on your library's specific export list
import { LuLayoutGrid, LuWallet, LuTicket, LuUser } from "react-icons/lu";

function NotificationList() {
  return (
    <div
      style={{
        // maxWidth: "900px",
        // margin: "40px auto",
        backgroundColor: "#dddddd",
        padding: "25px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      {/* TODAY SECTION */}
      <DateLabel text="Today" />

      <NotificationCard
        title="New Category Course.!"
        desc="New the 3D Design Course is Available."
        iconBg="#f1f1f1"
        icon={<LuLayoutGrid />} 
      />

      <NotificationCard
        title="New Category Course.!"
        desc="New the 3D Design Course is Available."
        iconBg="#000000"
        iconColor="#ffffff"
        icon={<LuLayoutGrid />} 
      />

      <NotificationCard
        title="Today's Special Offers"
        desc="You Have made a Course Payment."
        iconBg="#f1f1f1"
        icon={<LuTicket />} 
      />

      {/* YESTERDAY SECTION */}
      <DateLabel text="Yesterday" />

      <NotificationCard
        title="Credit Card Connected.!"
        desc="Credit Card has been Linked."
        iconBg="#f1f1f1"
        icon={<LuWallet />} 
      />

      {/* DATE SECTION */}
      <DateLabel text="Nov 20, 2022" />

      <NotificationCard
        title="Account Setup Successful.!"
        desc="Your Account has been Created."
        iconBg="#f1f1f1"
        icon={<LuUser />}  /* ✅ Fixed from LuUser2 to LuUser */
      />
    </div>
  );
}

/* ===== Date Label Component ===== */
function DateLabel({ text }) {
  return (
    <div
      style={{
        fontSize: "15px",
        fontWeight: "700",
        color: "#444",
        margin: "20px 0 12px",
        paddingLeft: "10px"
      }}
    >
      {text}
    </div>
  );
}

/* ===== Notification Card Component ===== */
function NotificationCard({ title, desc, iconBg, iconColor = "#444", icon }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        padding: "18px",
        marginBottom: "14px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        border: "1px solid #eee"
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: iconBg,
          color: iconColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center", /* ✅ Fixed: CamelCase 'justifyContent' */
          fontSize: "24px",
          marginRight: "18px",
          flexShrink: 0
        }}
      >
        {icon}
      </div>

      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "700",
            color: "#1a202c",
            marginBottom: "4px"
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: "14px", color: "#718096" }}>
          {desc}
        </div>
      </div>
    </div>
  );
}

export default NotificationList;