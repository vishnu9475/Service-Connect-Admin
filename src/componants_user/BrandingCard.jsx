import { useNavigate } from "react-router-dom";

export default function BrandingCard() {

  const navigate = useNavigate()

  const cards = [
  {
    id: 0,
    title: "Build Personal Branding",
    role: "Web Designer",
    status: "Paid"
  },
  {
    id: 1,
    title: "Landing Page Design",
    role: "UI Designer",
    status: "paid",
  },
  {
    id: 2,
    title: "Landing Page Design",
    role: "UI Designer",
    status: "paid",
  },
  {
    id: 3,
    title: "Landing Page Design",
    role: "UI Designer",
    status: "paid",
  },
];
    const handleClick = (id) => {
        navigate(`/page24`);
      };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:mx-10">
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={()=>handleClick(card.id)}
          className="w-full bg-white rounded-md shadow-[0_4px_6px_rgba(75,75,75,0.45)] px-4 py-4 flex items-center gap-4 hover:shadow-lg hover:shadow-gray-400"
        >
          {/* Image Placeholder */}
          <div className="bg-black w-20 py-8 rounded-xl" />

          {/* Text Content */}
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
              {card.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              {card.role}
            </p>

            <span className="mt-2 px-4 py-0.5 text-xs font-medium bg-green-700 text-white">
              {card.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}