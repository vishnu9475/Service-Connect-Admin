import RequestInfo from "./RequestInfo.jsx";
import ComplaintForm from "./ComplaintForm.jsx";
const     ComplaintSection = () => {
  return (
    <div className="bg-gray-300 w-[100%] h-full flex justify-center flex-col">
      <RequestInfo />
      <div className="w-[95%] flex flex-col self-center justify-center mb-4 mt- gap-2">

        <button className="w-[100%] md:w-[95%] h-10 md:h-12 self-center bg-gray-900 text-white rounded-full font-semibold py-2 cursor-pointer hover:bg-gray-950">
          Service Status
        </button>

        <button className="w-[100%] md:w-[95%] h-10 md:h-12 self-center bg-gray-900 text-white rounded-full font-semibold py-2 cursor-pointer hover:bg-gray-950">
          Payment Status
        </button>
    </div>
      <div className="absolute-center bottom-0">
        <ComplaintForm />
      </div>
    </div>
  );
};
export default ComplaintSection;