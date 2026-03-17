import React from "react";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();

  const chats = [
    { name: "Virginia M. Patterson", msg: "Hi, Good Evening Bro" },
    { name: "Dominick S. Jenkins", msg: "I Just Finished it!" },
    { name: "Duncan E. Hoffman", msg: "How Are You?" },
  ];

  return (
    <section className="min-h-screen bg-gray-200 px-4 py-4">

      {/* 🔹 TOGGLE */}
      <div className="max-w-md mx-auto my-4">
        <div className="relative bg-gray-300 rounded-full p-1 flex">
          <div className="absolute top-1 bottom-1 left-1 w-1/2 bg-white rounded-full transition-all" />

          <button className="relative z-10 w-1/2 py-2 text-black font-medium">
            Chat
          </button>

          <button
            onClick={() => navigate("/pageu47")}
            className="relative z-10 w-1/2 py-2 text-gray-700 font-medium"
          >
            Call
          </button>
        </div>
      </div>

      {/* 🔹 CHAT LIST */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow">
        {chats.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-3 border-b last:border-b-0"
          >
            <div className="w-10 h-10 bg-black rounded-full" />
            <div>
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-sm text-gray-500">{c.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
