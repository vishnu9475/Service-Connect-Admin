import { FiEdit } from "react-icons/fi";

const TYPE_LIST = [
  "Grama panchayat",
  "Municipality",
  "Cooperation",
];

const FranchiseType134 = ({
  title = "Type",
  types = TYPE_LIST,
  onAddNew = () => {},
  onSelect = () => {},
  activeType = "",
  showAdd = true,
}) => {
  return (
    <div className="w-full bg-white rounded-[20px] p-4 md:p-5 pb-16 md:pb-20 relative">


      {/* HEADER */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <h2 className="text-[#303972] text-base sm:text-lg font-semibold">
          {title}
        </h2>

        
      </div>

      {/* TYPE LIST */}
      <div className="flex flex-col gap-3 md:max-w-md md:mx-auto w-full">
        {types.map((item, index) => (
  <button
    key={index}
    onClick={() => onSelect(item)}
    className={`w-full text-sm py-2.5 sm:py-3 rounded-full text-center
      ${
        activeType === item
          ? "bg-[#4F46B5] text-white"
          : "bg-[#F3F4FF] text-[#303972] hover:bg-[#E6E8FF]"
      }`}
  >
    {item}
  </button>
))}

        {showAdd && (
          <button
            onClick={onAddNew}
            className="w-full bg-[#F3F4FF] text-[#303972] text-sm py-2.5 sm:py-3 rounded-full hover:bg-[#E6E8FF] mt-5"
          >
            + Add new
          </button>
        )}
      </div>
    </div>
  );
};

export default FranchiseType134;
