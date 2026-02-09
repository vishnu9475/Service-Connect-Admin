import { FiEdit } from "react-icons/fi";

const TYPE_LIST = [
  "Daily work",
  "One Time Lead",
];

const ServiceType139 = ({
  title = "Type",
  types = TYPE_LIST,
  onAddNew = () => {},
  onEdit = () => {},
  showEdit = true,
  showAdd = true,
}) => {
  return (
    <div className="w-full bg-white rounded-[20px] p-4 sm:p-5 pb-8 sm:pb-14 relative">


      {/* HEADER */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <h2 className="text-[#303972] text-base sm:text-lg font-semibold">
          {title}
        </h2>

        {showEdit && (
          <button
            onClick={onEdit}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <FiEdit className="text-[#303972]" size={18} />
          </button>
        )}
      </div>

      {/* TYPE LIST */}
      <div className="flex flex-col gap-3">
        {types.map((item, index) => (
          <div
            key={index}
            className="w-full bg-[#F3F4FF] text-[#303972] text-sm py-2.5 sm:py-3 rounded-full text-center"
          >
            {item}
          </div>
        ))}

        {showAdd && (
          <button
            onClick={onAddNew}
            className="w-full bg-[#F3F4FF] text-[#303972] text-sm py-2.5 sm:py-3 rounded-full hover:bg-[#E6E8FF]"
          >
            + Add new
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceType139;
