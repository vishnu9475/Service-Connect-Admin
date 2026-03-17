 // import React from 'react'

// const invitationData = [
//     {
//         id: 1,
//         name: "Virginia M. Patterson",
//         phone: "(+1) 702-897-7965",
//         image: "https://i.pravatar.cc/150?img=1",
//     },
//     {
//         id: 2,
//         name: "Jonathan K. Nix",
//         phone: "(+1) 845-332-1984",
//         image: "https://i.pravatar.cc/150?img=2",
//     },
//     {
//         id: 3,
//         name: "Emily R. Watson",
//         phone: "(+1) 601-778-5402",
//         image: "https://i.pravatar.cc/150?img=3",
//     },
//     {
//         id: 4,
//         name: "Michael T. Brown",
//         phone: "(+1) 919-225-4410",
//         image: "https://i.pravatar.cc/150?img=4",
//     },
//     {
//         id: 5,
//         name: "Sophia L. Carter",
//         phone: "(+1) 310-889-7621",
//         image: "https://i.pravatar.cc/150?img=5",
//     },
//     {
//         id: 6,
//         name: "Daniel J. Miller",
//         phone: "(+1) 503-674-9920",
//         image: "https://i.pravatar.cc/150?img=6",
//     },
// ]

// const InvitationItem_57 = () => {
//     return (
        

//         <div className="bg-gray-300 py-2">
//             {invitationData.map((item) => (
//                 <div
//                     key={item.id}
//                     className="flex items-center justify-between
//                     bg-white rounded-2xl px-4 py-3
//                     shadow-[0_4px_10px_rgba(0,0,0,0.15)]
//                     w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl
//                     mx-auto mt-2"
//                 >
//                     {/* Left */}
//                     <div className="flex items-center gap-3">
//                         {/* Avatar */}
//                         <img
//                             src={item.image}
//                             alt={item.name}
//                             className="w-12 h-12 rounded-full object-cover
//                             border-2 border-gray-300"
//                         />

//                         <div>
//                             <p className="text-sm font-semibold text-gray-900">
//                                 {item.name}
//                             </p>
//                             <p className="text-xs text-gray-500">
//                                 {item.phone}
//                             </p>
//                         </div>
//                     </div>

//                     {/* Invite Button */}
//                     <button
//                         className="bg-[#1E2235] text-white text-xs font-medium
//                         px-4 py-2 rounded-full shadow cursor-pointer
//                         hover:bg-[#E8F1FF] hover:text-[#1E2235]
//                         transition-colors duration-200"
//                     >
//                         Invite
//                     </button>
//                 </div>
//             ))}
//         </div>

//     )
// }

// export default InvitationItem_57;

import React from "react";

const invitationData = [
  {
    id: 1,
    name: "Virginia M. Patterson",
    phone: "(+1) 702-897-7965",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Jonathan K. Nix",
    phone: "(+1) 845-332-1984",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Emily R. Watson",
    phone: "(+1) 601-778-5402",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Michael T. Brown",
    phone: "(+1) 919-225-4410",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Sophia L. Carter",
    phone: "(+1) 310-889-7621",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Daniel J. Miller",
    phone: "(+1) 503-674-9920",
    image: "https://i.pravatar.cc/150?img=6",
  },
];

const InvitationItem_57 = () => {
  return (
    <div className="bg-gray-300 py-9">
      {/* ONE MAIN CARD */}
      <div
        className="bg-white
        w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl
        mx-auto
        rounded-2xl
        shadow-[0_4px_10px_rgba(0,0,0,0.15)]
        overflow-hidden"
      >
        {invitationData.map((item, index) => (
          <div key={item.id}>
            {/* Row */}
            <div className="flex items-center justify-between px-4 py-3">
              {/* Left */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
                />

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.phone}</p>
                </div>
              </div>

              {/* Invite Button */}
              <button
                className="bg-[#1E2235] text-white text-xs font-medium
                px-4 py-2 rounded-full shadow
                hover:bg-[#E8F1FF] hover:text-[#1E2235]
                transition-colors duration-200"
              >
                Invite
              </button>
            </div>

            {/* FULL WIDTH HR */}
            {index !== invitationData.length - 1 && (
              <hr className="border-gray-200 w-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvitationItem_57;