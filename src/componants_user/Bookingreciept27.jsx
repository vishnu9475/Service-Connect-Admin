import React from "react";
import { AlertCircle,ArrowRight } from "lucide-react";

const AppointmentInvoiceCard = () => {
  return (
    <div className="flex items-center justify-center p-6 flex-col ">
      <div className="w-[360px] bg-white rounded-2xl shadow-md p-4 text-sm">

        {/* Header */}
        <h2 className="font-semibold text-gray-800 mb-2">Appointment</h2>

        {/* Date & Time */}
        <div className="flex gap-3 mb-4 items-center justify-center">
          <span className="px-3 py-1 bg-gray-100 rounded-lg shadow-sm shadow-gray-500" >
            Jun 10, 2024
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-lg shadow-sm shadow-gray-500">
            9:41 AM
          </span>
        </div>

        {/* Invoice Title */}
        <h3 className="font-semibold text-blue-700 mb-2">Invoice</h3>

        {/* Table Header */}
        <div className="grid grid-cols-5 text-xs text-gray-500 border-b pb-1">
          <span>Sl.no</span>
          <span className="col-span-2">Description</span>
          <span className="text-center">Qty</span>
          <span className="text-right">Price</span>
        </div>

        {/* Table Row */}
        <div className="grid grid-cols-5 text-sm py-2">
          <span>1</span>
          <span className="col-span-2">Bulb Change</span>
          <span className="text-center">1</span>
          <span className="text-right">300</span>
        </div>

        {/* Divider */}
        <div className="border-t my-3"></div>

        {/* Grand Total */}
        <div className="flex justify-between font-semibold text-sm">
          <span>Grand Total</span>
          <span>300</span>
        </div>

        {/* Terms */}
        <div className="mt-4 text-xs text-gray-600">
          <p className="font-semibold">Terms and conditions</p>
          <p>Valid up to 1 month</p>
        </div>

        {/* Additional Requirement */}
        <div className="mt-4 flex gap-2 items-start text-xs text-red-600">
          <AlertCircle size={16} className="mt-0.5" />
          <div>
            <p className="font-semibold">Additional Requirement</p>
            <p className="text-gray-700">Provide Ladder</p>
            <p className="text-gray-700">Bulb should be provided</p>
          </div>
        </div>
      </div>
      <div className="w-[320px] mt-4">
     <button className="  hover:bg-gray-500  w-full h-16 bg-gray-900 text-white py-4 rounded-full flex items-center justify-between gap-3 font-semibold">
                  <div className="w-3/4 px-15 flex items-center justify-end">
                    <h3 className="font-semibold text-[15px]">Accept & PayFull </h3>
                  </div>
                   <div className="px-3">
                <span className="bg-white  text-gray-900 w-10 h-10 rounded-full flex items-center justify-center">
                  <ArrowRight />
                </span>
                </div>
              </button>
        </div>
    </div>
  );
};

export default AppointmentInvoiceCard;
