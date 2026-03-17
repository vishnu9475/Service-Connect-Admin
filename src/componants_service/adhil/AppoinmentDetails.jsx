import { FaRegTrashCan } from "react-icons/fa6";
import { TbAlertCircle } from "react-icons/tb";
import { Link } from "react-router-dom";



const AppoinmentDetails = () => {
  return (
        <div className="w-full h-full p-1 bg-gray-300 item-center">

    <div className="w-full h-full flex p-1 bg-gray-300 item-center justify-center">
      <div className="w-[95%] md:[85%] bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <h2 className="text-gray-800 font-semibold text-sm md:text-lg">Appointment</h2>
    
      <div className="flex gap-3 ml-8 md:ml-10">
        <div className="bg-gray-100 rounded-lg px-4 py-2 text-xs md:text-sm font-small md:font-medium  text-gray-700 ">
          Jun 10, 2024
        </div>
        <div className="bg-gray-100 rounded-lg px-4 py-2 text-xs md:text-sm font-small md:font-medium text-gray-700">
          9:41 AM
        </div>
      </div>
    
      <div className="space-y-2">
        <h3 className="text-gray-800 font-semibold text-xs md:text-sm">Invoice</h3>
    
        <div className="overflow-x-auto border-collapse">
          <table className="w-full text-xs md:text-sm border border-gray-300 border-collapse">
  <thead>
    <tr className="text-gray-600 text-xs bg-gray-50">
      <th className="text-left font-medium p-2 border border-gray-300">Sl.no</th>
      <th className="text-left font-medium p-2 border border-gray-300">Description</th>
      <th className="text-left font-medium p-2 border border-gray-300">Qty</th>
      <th className="text-right font-medium p-2 border border-gray-300">Price</th>
      <th className="text-right font-medium p-2 border border-gray-300">Total</th>
    </tr>
  </thead>

  <tbody>
    <tr className="text-gray-700">
      <td className="p-2 border border-gray-300">-</td>
      <td className="p-2 border border-gray-300">Bulb Change</td>
      <td className="p-2 border border-gray-300">-</td>
      <td className="p-2 border border-gray-300 text-right">300</td>

      <td className="p-2 border border-gray-300 text-right">
        <div className="flex justify-end items-center gap-2">
          <span>300</span>
          <button className="text-gray-400 hover:text-red-500">
            <FaRegTrashCan className="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
        </div>

    
        
      </div>
    
     <div className="flex justify-end gap-2 text-xs md:text-sm font-semibold">
              <p className="text-gray-600 text-xs md:text-sm">Grand Total</p>
              <p className="text-xs md:text-sm">300</p>
            </div>




            <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="text-gray-800 text-xs md:text-sm font-semibold">
            Terms and conditions
          </h3>
        </div>
    
        <p className="text-gray-700 text-sm space-y-1 ml-4 md:ml-5">
          Valid up to 1 month
        </p>
      </div>



    
      <div className="space-y-2 bg-orange-50 border border-orange-200 rounded-xl p-4">
        <div className="flex items-center gap-1">
          <h3 className="text-red-500 text-xs md:text-sm font-semibold">
            Additional Requirements
          </h3>
          <TbAlertCircle size={23} className=" text-red-500" />
        </div>
    
        <ul className="text-gray-700 text-sm space-y-1 ml-4 md:ml-5 list-disc list-inside">
          <li>Provide Ladder</li>
          <li>Bulb should be provided</li>
        </ul>
      </div>
    </div>
    </div>



    
    <div className="w-[100%] flex flex-col justify-center mt-4 gap-2">
             <Link to="/74" className="w-full flex justify-center">

      <button className="w-[95%] md:[85%] h-10 md:h-12 self-center bg-green-900 text-white rounded-full font-semibold py-2 cursor-pointer hover:bg-red-950">
          Complete
        </button>
      </Link>

       <Link to="/76" className="w-full flex justify-center">
  <button className="w-[95%] md:[85%] h-10 md:h-12 bg-red-900 text-white rounded-full font-semibold py-2 cursor-pointer hover:bg-red-950">
    Register Complaint
  </button>
</Link>

       <Link to="/74" className="w-full flex justify-center">
        <button className="w-[95%] md:[85%] h-10 md:h-12 self-center bg-red-900 text-white rounded-full font-semibold py-2 cursor-pointer hover:bg-red-950">
          Declain
        </button>
        </Link>

    </div>
    </div>
  );
};
export default AppoinmentDetails;