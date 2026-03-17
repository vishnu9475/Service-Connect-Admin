import { IoMdClose } from "react-icons/io";

export default function LeadAlertModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[320px] bg-white rounded-xl shadow-lg p-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <IoMdClose size={22} />
        </button>

        <h2 className="text-lg font-semibold mb-6">
          By Attenting Your Lead <br />
            Balance Will Be Deducted By Once
        </h2>

        <button
          className="w-full bg-gray-900 text-white py-3 rounded-md font-semibold cursor-pointer"
          onClick={() => {
            onClose();
          }}
        >
          Okey
        </button>
      </div>
    </div>
  );
}



