import React, { forwardRef } from "react";
import barcode from "../assets/barcode.jfif";
import bill from "../assets/bill.jfif";

const Ereciept = forwardRef((props, ref) => {
  return (
    // 👇 ref is USED here
    <div ref={ref} className="p-10 sm:mx-4 sm:p-4 md:mx-6 md:p-6">
      <div className="flex justify-center mb-2 p-2 md:p-4 lg:p-4 2xl:p-4">
        <img
          src={bill}
          alt="receipt icon"
          className="w-40 h-20 object-contain"
        />
      </div>

      <div className="flex justify-center">
        <img
          src={barcode}
          alt="barcode"
          className="w-50 h-30 object-contain md:w-120 lg:w-130 2xl:w-140"
        />
      </div>

      <div className="mt-5">
        <InfoRow field="Name" field_name="Scott R. Shoemoke" />
        <InfoRow field="Email ID" field_name="shoemaker.redial@gmail.com" />
        <InfoRow
          field="Course"
          field_name="3D Character Illustration Cre..."
        />
        <InfoRow field="Category" field_name="Web Development" />
      </div>

      <div className="mt-10">
        <InfoRow field="Transaction ID" field_name="SK345680976" />
        <InfoRow field="Price" field_name="$55.00" />
        <InfoRow field="Date" field_name="Nov 20, 2023 / 15:45" />

        <div className="flex justify-between mb-4">
          <span className="font-semibold text-xs md:text-lg lg:text-lg">
            Status
          </span>
          <span>
            <button className="bg-green-800 px-4 py-0.5 text-white md:text-lg lg:text-lg">
              Paid
            </button>
          </span>
        </div>
      </div>
    </div>
  );
});

export default Ereciept;

const InfoRow = ({ field, field_name }) => {
  return (
    <div className="flex justify-between mb-4">
      <span className="font-semibold text-xs md:text-lg lg:text-lg 2xl:text-xl">
        {field}
      </span>
      <span className="text-black text-xs md:text-lg lg:text-lg 2xl:text-xl">
        {field_name}
      </span>
    </div>
  );
};
