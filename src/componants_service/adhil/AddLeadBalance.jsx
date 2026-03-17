import { IoMdClose } from "react-icons/io";

export default function AddLeadBalance({ onClose }) {
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
          ADD LEAD BALANCE
        </h2>

        <p className="text-3xl font-bold mb-1">50</p>
        <p className="text-sm mb-4">
          Leads will be added to your account
        </p>

        <p className="text-2xl font-bold mb-6">₹ 300</p>

        <button
          className="w-full bg-gray-900 text-white py-3 rounded-md font-semibold cursor-pointer"
          onClick={() => {
            // alert("Payment flow (dummy)");
            onClose();
          }}
        >
          CONFIRM & PAY
        </button>
      </div>
    </div>
  );
}











// import { useState } from "react";
// import { IoMdClose } from "react-icons/io";

// const LEAD_PACKAGES = [
//   { leads: 25, price: 150 },
//   { leads: 50, price: 300 },
//   { leads: 100, price: 550 },
// ];

// export default function AddLeadBalance({ onClose }) {
//   const [selectedPackage, setSelectedPackage] = useState(LEAD_PACKAGES[1]); 

//   return (
//     <div
//       className="fixed inset-0 z-50 flex justify-center items-center bg-black/30 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <div
//         className="relative w-[320px] bg-white rounded-xl shadow-lg p-6 text-center"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-black"
//         >
//           <IoMdClose size={22} />
//         </button>

//         <h2 className="text-lg font-semibold mb-4">
//           ADD LEAD BALANCE
//         </h2>

//         <div className="flex flex-col gap-3 mb-6">
//           {LEAD_PACKAGES.map((pkg) => (
//             <button
//               key={pkg.leads}
//               onClick={() => setSelectedPackage(pkg)}
//               className={`border rounded-lg py-2 font-semibold transition
//                 ${
//                   selectedPackage.leads === pkg.leads
//                     ? "border-black bg-black text-white"
//                     : "border-gray-300"
//                 }
//               `}
//             >
//               {pkg.leads} Leads — ₹{pkg.price}
//             </button>
//           ))}
//         </div>

//         <p className="text-sm mb-1">
//           Leads will be added to your account
//         </p>

//         <p className="text-2xl font-bold mb-6">
//           ₹ {selectedPackage.price}
//         </p>

//         <button
//           className="w-full bg-gray-900 text-white py-3 rounded-md font-semibold"
//           onClick={() => {
//             alert(
//               `Selected: ${selectedPackage.leads} leads for ₹${selectedPackage.price}`
//             );
//             onClose();
//           }}
//         >
//           CONFIRM & PAY
//         </button>
//       </div>
//     </div>
//   );
// }
