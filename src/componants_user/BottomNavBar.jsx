import React from "react";
import {
  LayoutGrid,
  Bookmark,
  History,
  NotebookPen,
  Plus,
  HelpCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BottomNavBar() {
  const navigate = useNavigate();

  const navItems = [
    { icon: <LayoutGrid size={22} />, path: "/page11" },
    { icon: <Bookmark size={22} />, path: "/bookmark" },
    { icon: <History size={22} />, path: "/history" },
    { icon: <NotebookPen size={22} />, path: "/page12" },
    // { icon: <Plus size={26} />, path: "/create" },
    { icon: <HelpCircle size={22} />, path: "/Page_41" },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] max-w-[420px] bg-[#6C625C] rounded-xl px-6 py-3 shadow-xl flex items-center justify-between">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => navigate(item.path)}
          className="text-white hover:scale-110 transition-transform duration-200"
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
}