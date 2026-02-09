import React from "react";

function ChatList() {
  return (
    <div
      style={{
        width: "100%",           // Spans the full dashboard width
        margin: "0",             // Removed 'auto' to eliminate side gaps
        backgroundColor: "transparent", 
        padding: "20px",
        fontFamily: "Arial",
        boxSizing: "border-box"
      }}
    >
      <ChatItem name="Virginia M. Patterson" message="Hi, Good Evening Bro.!" time="14:59" unread="03" />
      <ChatItem name="Dominick S. Jenkins" message="I Just Finished it.!" time="06:35" unread="02" />
      <ChatItem name="Duncan E. Hoffman" message="How are you?" time="08:10" />
      <ChatItem name="Roy R. McCraney" message="OMG, This is Amazing..." time="21:07" unread="05" />
      <ChatItem name="Janice R. Norris" message="Wow, This is Really Epic" time="09:15" />
      <ChatItem name="Marilyn C. Amerson" message="Hi, Good Evening Bro.!" time="14:59" unread="03" />
    </div>
  );
}

function ChatItem({ name, message, time, unread }) {
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
        <div style={{ fontSize: "14px", color: "#777" }}>{message}</div>
      </div>
      <div style={{ textAlign: "right", marginLeft: "16px" }}>
        {unread && (
          <div style={{ backgroundColor: "#000", color: "#fff", fontSize: "12px", borderRadius: "50%", width: "26px", height: "26px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "4px", marginLeft: "auto" }}>
            {unread}
          </div>
        )}
        <div style={{ fontSize: "13px", color: "#555" }}>{time}</div>
      </div>
    </div>
  );
}

export default ChatList;