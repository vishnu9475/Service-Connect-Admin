import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { TbAlertCircle } from "react-icons/tb";

export default function RequestInfo() {
  return (
    <div className="mt-1 flex justify-center items-center bg-gray-300">
      <div className="flex flex-col  w-[100%] md:w-[95%] p-4">

        <div className="flex items-start p-2 gap-3">
          <img
            className="w-20 h-20 rounded-2xl object-cover shadow"
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt=""
          />
          <div className="flex flex-col mt-3 gap-1">
            <h3 className="text-sm font-semibold text-gray-900">
              Nazari Isac
            </h3>
            <p className="text-sm font-medium text-gray-700">
              Electrification 💪
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5 space-y-6">

          <p className="text-sm font-semibold text-gray-800 tracking-wide">
            Booking id : 12aa21w
          </p>

          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
              Title
            </p>
            <p className="text-sm font-medium text-gray-900 ml-4">
              Bulb Change
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
              Description
            </p>
            <p className="text-sm font-medium text-gray-900 ml-4 leading-snug">
              Bulb Change standard assistance <br />
              additional details added <br />
              resolved tasks added
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm md:text-base font-semibold text-gray-800">
              Appointment
            </h2>

            <div className="flex gap-3 ml-6">
              <div className="bg-gray-100 rounded-lg px-4 py-2 text-xs font-medium text-gray-700">
                Jun 10, 2024
              </div>
              <div className="bg-gray-100 rounded-lg px-4 py-2 text-xs font-medium text-gray-700">
                9:41 AM
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm md:text-base font-semibold text-gray-800">
              Invoice
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs md:text-sm border border-gray-300 border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-600">
                    <th className="p-2 border border-gray-300 text-left font-semibold">Sl.no</th>
                    <th className="p-2 border border-gray-300 text-left font-semibold">Description</th>
                    <th className="p-2 border border-gray-300 text-left font-semibold">Qty</th>
                    <th className="p-2 border border-gray-300 text-right font-semibold">Price</th>
                    <th className="p-2 border border-gray-300 text-right font-semibold">Total</th>
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
                        <span className="font-semibold text-gray-900">
                          300
                        </span>
                        <button className="text-gray-400 hover:text-red-500">
                          <FaRegTrashCan className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-end gap-2 text-sm font-semibold">
            <p className="text-gray-600">Grand Total</p>
            <p className="text-gray-900">300</p>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold text-gray-800">
              Terms and conditions
            </h3>
            <p className="text-sm font-medium text-gray-700 ml-4 mt-1">
              Valid up to 1 month
            </p>
          </div>

          <div className="space-y-2 bg-orange-50 border border-orange-200 rounded-xl p-4">
            <div className="flex items-center gap-1">
              <h3 className="text-sm md:text-base font-semibold text-red-600">
                Additional Requirements
              </h3>
              <TbAlertCircle size={20} className="text-red-500" />
            </div>

            <ul className="text-sm font-medium text-gray-700 ml-5 list-disc">
              <li>Provide Ladder</li>
              <li>Bulb should be provided</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
