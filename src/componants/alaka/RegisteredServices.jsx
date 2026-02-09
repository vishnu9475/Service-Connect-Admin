// import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
// import { useNavigate } from "react-router-dom";

// const services = [
//   "Home Services",
//   "Health & Wellness",
//   "Automotive Services",
//   "Education & Tutoring",
//   "Business Services",
// ];

// function RegisteredServices() {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-white rounded-2xl shadow-sm w-full p-6">

//       {/* TITLE */}
//       <h2 className="text-[#303972] font-semibold mb-6">
//         Registered Services
//       </h2>

//       {/* LIST */}
//       <div className="space-y-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             onClick={() => navigate("/NewSubCategory")}
//             className="flex flex-col sm:flex-row sm:items-center gap-4 cursor-pointer"
//           >

//             {/* SERVICE */}
//             <div className="flex items-center gap-4 sm:w-[280px]">
//               <div className="w-12 h-12 bg-[#C1BBEB] rounded-xl" />
//               <p className="text-[#303972] font-medium">
//                 {service}
//               </p>
//             </div>

//             {/* TOTAL ORDER */}
//             <div className="flex items-center gap-3 sm:w-[200px]">
//               <div className="flex items-end gap-1">
//                 <span className="w-1 h-3 bg-indigo-600 rounded" />
//                 <span className="w-1 h-5 bg-indigo-600 rounded" />
//                 <span className="w-1 h-4 bg-indigo-600 rounded" />
//                 <span className="w-1 h-6 bg-indigo-600 rounded" />
//               </div>

//               <div>
//                 <p className="text-[#303972] font-semibold text-sm">
//                   1,456
//                 </p>
//                 <p className="text-xs text-gray-400">
//                   Total Order
//                 </p>
//               </div>
//             </div>

//             {/* CONVERSION */}
//             <div className="flex items-center gap-2 sm:w-[160px]">
//               <ArrowUpRightIcon className="w-5 h-5 text-indigo-600" />
//               <div>
//                 <p className="text-[#303972] font-semibold text-sm">
//                   26%
//                 </p>
//                 <p className="text-xs text-gray-400">
//                   Conversion
//                 </p>
//               </div>
//             </div>

//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default RegisteredServices;

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const services = [
  "Home Services",
  "Health & Wellness",
  "Automotive Services",
  "Education & Tutoring",
  "Business Services",
];

function RegisteredServices() {
  return (
    <div className="bg-white rounded-2xl shadow-sm w-full p-6">
      {/* TITLE */}
      <h2 className="text-[#303972] font-semibold mb-6">
        Registered Services
      </h2>

      {/* LIST */}
      <div className="space-y-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center gap-4"
          >
            {/* SERVICE */}
            <div className="flex items-center gap-4 sm:w-[280px]">
              <div className="w-12 h-12 bg-[#C1BBEB] rounded-xl" />
              <p className="text-[#303972] font-medium">
                {service}
              </p>
            </div>

            {/* TOTAL ORDER */}
            <div className="flex items-center gap-3 sm:w-[200px]">
              <div className="flex items-end gap-1">
                <span className="w-1 h-3 bg-indigo-600 rounded" />
                <span className="w-1 h-5 bg-indigo-600 rounded" />
                <span className="w-1 h-4 bg-indigo-600 rounded" />
                <span className="w-1 h-6 bg-indigo-600 rounded" />
              </div>

              <div>
                <p className="text-[#303972] font-semibold text-sm">
                  1,456
                </p>
                <p className="text-xs text-gray-400">
                  Total Order
                </p>
              </div>
            </div>

            {/* CONVERSION */}
            <div className="flex items-center gap-2 sm:w-[160px]">
              <ArrowUpRightIcon className="w-5 h-5 text-indigo-600" />
              <div>
                <p className="text-[#303972] font-semibold text-sm">
                  26%
                </p>
                <p className="text-xs text-gray-400">
                  Conversion
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegisteredServices;
