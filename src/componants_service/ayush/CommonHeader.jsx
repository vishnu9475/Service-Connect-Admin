// import { ArrowLeft, } from "lucide-react";
import { CircleChevronLeft } from 'lucide-react'
import { useNavigate } from "react-router-dom";

export default function CommonHeader({
  title = "",
  backTo = -1,     // default: go back
}) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 h-24 text-white px-6 py-4 flex items-center gap-4">
      <CircleChevronLeft
        size={26}
        className="cursor-pointer"
        onClick={() => navigate(backTo)}
      />
      <h1 className="text-lg font-semibold uppercase">
        {title}
      </h1>
    </div>
  );
}
