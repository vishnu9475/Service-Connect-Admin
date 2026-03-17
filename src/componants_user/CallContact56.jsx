// import { PhoneIncoming } from 'lucide-react';
// import React from 'react'

// const CallContact56 = () => {
//   return (
//   <div className="bg-gray-300 min-h-screen p-4">
//       <div
//         className="flex items-center justify-between
//                    bg-white rounded-xl px-4 py-3
//                    shadow-[0_6px_10px_-4px_rgba(0,0,0,0.25)]
//                    w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl
//                    mx-auto"
//       >
//         {/* Left: Avatar + Details */}
//         <div className="flex items-center gap-3">
//           {/* Avatar */}
//           <div className="w-10 h-10 rounded-full bg-black border-2 border-gray-300" />

//           {/* Name + Call Info */}
//           <div>
//             <p className="text-sm font-semibold text-gray-900 leading-tight">
//               Jonathon K. Nix
//             </p>

//             <div className="flex items-center gap-2 text-xs text-gray-500">
//               <PhoneIncoming size={12} className="text-gray-500" />
//               <span>Incoming</span>
//               <span>|</span>
//               <span>Nov 05, 2023</span>
//             </div>
//           </div>
//         </div>

//         {/* Right: Call Icon */}
//         <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
//           📞
//         </button>
//       </div>
//     </div>  )
// }

// export default CallContact56;


// import { PhoneIncoming } from 'lucide-react';
// import React from 'react'

// const CallContact56 = () => {
//   return (
//   <div className="bg-gray-300 min-h-screen p-5">
//       <div
//         className="flex items-center justify-between
//                    bg-white rounded-xl px-4 py-3
//                    shadow-[0_6px_10px_-4px_rgba(0,0,0,0.25)]
//                    w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl
//                    mx-auto"
//       >
//         {/* Left: Avatar + Details */}
//         <div className="flex items-center gap-3">
//           {/* Avatar */}
//           <div className="w-10 h-10 rounded-full bg-black border-2 border-gray-300" />

//           {/* Name + Call Info */}
//           <div>
//             <p className="text-sm font-semibold text-gray-900 leading-tight">
//               Jonathon K. Nix
//             </p>

//             <div className="flex items-center gap-2 text-xs text-gray-500">
//               <PhoneIncoming size={12} className="text-gray-500" />
//               <span>Incoming</span>
//               <span>|</span>
//               <span>Nov 05, 2023</span>
//             </div>
//           </div>
//         </div>

//         {/* Right: Call Icon */}
//         <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
//           📞
//         </button>
//       </div>
//     </div>  )
// }

// export default CallContact56;

import React from "react";
import { PhoneIncoming, PhoneOutgoing, PhoneMissed } from "lucide-react";
// import { BsFillPhoneLandscapeFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

const callList = [
  {
    id: 1,
    name: "Jonathon K. Nix",
    type: "Incoming",
    date: "Nov 05, 2023",
    icon: <PhoneIncoming size={12} />,
  },
  {
    id: 2,
    name: "Virginia M. Patterson",
    type: "Outgoing",
    date: "Nov 04, 2023",
    icon: <PhoneOutgoing size={12} />,
  },
  {
    id: 3,
    name: "Dominick S. Jenkins",
    type: "Missed",
    date: "Nov 03, 2023",
    icon: <PhoneMissed size={12} />,
  },
  {
    id: 4,
    name: "Duncan E. Hoffman",
    type: "Incoming",
    date: "Nov 02, 2023",
    icon: <PhoneIncoming size={12} />,
  },
];

const CallContact56 = () => {
  return (
    <div className="bg-gray-300 min-h-screen p-5">
      {/* Outer Card */}
      <div
        className="
          bg-white rounded-xl
          border border-gray-200
          shadow-[0_6px_10px_-4px_rgba(0,0,0,0.25)]
          w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl
          mx-auto
          overflow-hidden
        "
      >
        {callList.map((call, index) => (
          <React.Fragment key={call.id}>
            {/* Row */}
            <div
              className="
                flex items-center justify-between
                px-4 py-3
                hover:bg-gray-50
                cursor-pointer
              "
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black border-2 border-gray-300" />

                <div>
                  <p className="text-sm font-semibold text-gray-900 leading-tight">
                    {call.name}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    {call.icon}
                    <span>{call.type}</span>
                    <span>|</span>
                    <span>{call.date}</span>
                  </div>
                </div>
              </div>

              {/* Right */}
              <button className="p-2 rounded-full hover:bg-gray-100">
               <FiPhoneCall />
              </button>
            </div>

            {/* HR Divider */}
            {index !== callList.length - 1 && (
              <hr className="border-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CallContact56;
