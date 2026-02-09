import { FiTrash2 } from "react-icons/fi";

const FranchiseeTypeForm136 = () => {
  return (
    <div className="w-full">

      {/* CARD */}
      <div className="bg-white rounded-[20px] px-5 sm:px-8 lg:px-10 py-6 sm:py-8">
        <h2 className="text-[#303972] text-base sm:text-lg font-semibold mb-6">
          Franchisee Type
        </h2>

        {/* INPUTS */}
        <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
          
          <input
            type="text"
            placeholder="Grama panchayat"
            className="w-full h-12 bg-[#F3F4FF] rounded-md px-4 text-sm text-[#303972]
              placeholder:text-[#8A8FB3] outline-none
              focus:ring-2 focus:ring-[#5B5AD6]"
          />

          <input
            type="text"
            placeholder="Details"
            className="w-full h-12 bg-[#F3F4FF] rounded-md px-4 text-sm text-[#303972]
              placeholder:text-[#8A8FB3] outline-none
              focus:ring-2 focus:ring-[#5B5AD6]"
          />

          <input
            type="text"
            placeholder="Rate"
            className="w-full h-12 bg-[#F3F4FF] rounded-md px-4 text-sm text-[#303972]
              placeholder:text-[#8A8FB3] outline-none
              focus:ring-2 focus:ring-[#5B5AD6]"
          />

          <input
            type="text"
            placeholder="Currency"
            className="w-full h-12 bg-[#F3F4FF] rounded-md px-4 text-sm text-[#303972]
              placeholder:text-[#8A8FB3] outline-none
              focus:ring-2 focus:ring-[#5B5AD6]"
          />
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="
        flex flex-col sm:flex-row
        gap-3 sm:gap-4
        items-stretch sm:items-center
        justify-center sm:justify-end
        mt-6 sm:mt-8
      ">
        <button className="
          w-full sm:w-auto
          px-10 py-3
          rounded-full
          bg-red-600 text-white font-medium
          hover:bg-red-700 transition
        "onClick={() => {
      alert("Deleted!");
    }}>
          Delete
        </button>

        <button className="
          w-full sm:w-auto
          px-8 py-3
          rounded-full
          border-2 border-[#5B5AD6]
          text-[#5B5AD6] font-medium
          hover:bg-[#EEF0FF] transition 
        "onClick={() => {
      alert("Saved as draft!");
    }}>
          Save as Draft
        </button>

        <button className="
          w-full sm:w-auto
          px-14 py-3
          rounded-full
          bg-[#5B5AD6] text-white font-medium
          hover:bg-[#4A49C4] transition
        "onClick={() => {
      alert("Saved");
    }}>
          Save
        </button>
      </div>
    </div>
  );
};

export default FranchiseeTypeForm136;
