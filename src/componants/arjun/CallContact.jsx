import React from "react";
import { LuPhone, LuArrowDownLeft, LuArrowUpRight, LuX } from "react-icons/lu";

function CallList() {
  const calls = [
    { id: 1, name: "Patricia D. Regalado", type: "Incoming", time: "14:59", status: "incoming" },
    { id: 2, name: "Jonathon K. Nix", type: "Incoming", time: "06:35", status: "incoming" },
    { id: 3, name: "Ellen N. Cranford", type: "Outgoing", time: "08:10", status: "outgoing" },
    { id: 4, name: "William W. Spicer", type: "Missed", time: "21:07", status: "missed" },
    { id: 5, name: "Scott D. Chambers", type: "Outgoing", time: "09:15", status: "outgoing" },
  ];

  return (
    <div
      style={{
        width: "100%",           // Stretch to fill parent container
        margin: "0",             // Eliminate centering side margins
        backgroundColor: "transparent",
        padding: "20px",
        boxSizing: "border-box",
        fontFamily: "Arial",
      }}
    >
      {calls.map((call) => (
        <CallItem key={call.id} {...call} />
      ))}
    </div>
  );
}

function CallItem({ name, type, time, status }) {
  const getIcon = (status) => {
    if (status === "incoming") return <LuArrowDownLeft />;
    if (status === "outgoing") return <LuArrowUpRight />;
    return <LuX />;
  };

  const color = status === "missed" ? "#ef5350" : "#555";

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      backgroundColor: "#ffffff",
      borderRadius: "18px",
      padding: "16px",
      marginBottom: "14px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>
      <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#000", marginRight: "18px", flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "16px", fontWeight: "700", marginBottom: "4px" }}>{name}</div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color }}>
          {getIcon(status)} <span>{type}</span>
        </div>
      </div>
      <div style={{ textAlign: "right", marginLeft: "16px" }}>
        <div style={{ fontSize: "13px", color: "#555", marginBottom: "8px" }}>{time}</div>
        <LuPhone style={{ cursor: "pointer", fontSize: "18px", color: "#7f8c8d" }} />
      </div>
    </div>
  );
}

export default CallList;