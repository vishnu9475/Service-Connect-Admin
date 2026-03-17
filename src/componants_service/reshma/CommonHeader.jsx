import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CommonHeader({
  title = "",
  backTo = -1,     // default: go back
}) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 h-24 text-white px-6 py-4 flex items-center gap-4">
      <ArrowLeft
        size={20}
        className="cursor-pointer"
        onClick={() => navigate(backTo)}
      />
      <h1 className="text-sm font-semibold uppercase">
        {title}
      </h1>
    </div>
  );
}
