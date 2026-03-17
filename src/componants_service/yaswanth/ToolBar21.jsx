
import React from "react";
import { LayoutGrid, Bookmark, History, NotebookPen, Plus, HelpCircle } from "lucide-react";

export default function BottomNavBar() {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] max-w-[420px] bg-[#6C625C] rounded-full px-6 py-3 shadow-2xl flex items-center justify-between">
      <button className="text-white"><LayoutGrid size={22} /></button>
      <button className="text-white"><Bookmark size={22} /></button>
      <button className="text-white"><History size={22} /></button>
      <button className="text-white"><NotebookPen size={22} /></button>
      <button className="text-white"><Plus size={26} /></button>
      <button className="text-white"><HelpCircle size={22} /></button>
    </div>
  );
}
