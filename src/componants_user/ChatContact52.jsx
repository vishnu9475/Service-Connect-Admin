// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const ChatContact52 = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gray-300 min-h-screen p-4"

//       onClick={() => navigate("/Page_46")}


//     >
//       {/* Card */}
//       <div
//         className="flex items-center justify-between
//              bg-white rounded-xl px-4 py-3
//              shadow-[0_6px_10px_-4px_rgba(0,0,0,0.25)]
//              w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
//       //  w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl
//       >
//         {/* Left: Avatar + Text */}
//         <div className="flex items-center gap-3">
//           {/* Avatar */}
//           <div className="w-10 h-10 rounded-full bg-black border-2 border-gray-300" />

//           {/* Name + Message */}
//           <div>
//             <p className="text-sm font-semibold text-gray-900 leading-tight">
//               Virginia M. Patterson
//             </p>
//             <p className="text-xs text-gray-500">
//               Hi, Good Evening Bro.!
//             </p>
//           </div>
//         </div>

//         {/* Right: Badge + Time */}
//         <div className="flex flex-col items-end gap-1">
//           {/* Unread Count */}
//           <div className="w-5 h-5 rounded-full bg-black text-white
//                           text-[10px] font-semibold
//                           flex items-center justify-center">
//             03
//           </div>

//           {/* Time */}
//           <span className="text-xs text-gray-500">
//             14:59
//           </span>
//         </div>
//       </div>
//     </div>)
// }

// export default ChatContact52;


import React from "react";
import { useNavigate } from "react-router-dom";

const chatList = [
  {
    id: 1,
    name: "Virginia M. Patterson",
    message: "Hi, Good Evening Bro.!",
    time: "14:59",
    unread: 3,
  },
  {
    id: 2,
    name: "Dominick S. Jenkins",
    message: "Are you available now?",
    time: "14:40",
    unread: 1,
  },
  {
    id: 3,
    name: "Duncan E. Hoffman",
    message: "Please call me back",
    time: "13:10",
    unread: 0,
  },
  {
    id: 4,
    name: "Roy R. McCraney",
    message: "Thanks for the update",
    time: "12:45",
    unread: 2,
  },
  {
    id: 5,
    name: "Janice R. Norris",
    message: "Meeting postponed",
    time: "11:30",
    unread: 0,
  },
];

const ChatContact52 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-300 min-h-screen p-5">
      {/* Outer Container (Border only here) */}
      <div
        className="
          bg-white
          rounded-xl
          border border-gray-200
          shadow-[0_6px_10px_-4px_rgba(0,0,0,0.25)]
          w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl
          mx-auto
          overflow-hidden
        "
      >
        {chatList.map((chat, index) => (
          <React.Fragment key={chat.id}>
            {/* Chat Row */}
            <div
              onClick={() => navigate("/Page_46")}
              className="
                flex items-center justify-between
                px-4 py-3
                cursor-pointer
                hover:bg-gray-50
              "
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black" />

                <div>
                  <p className="text-sm font-semibold text-gray-900 leading-tight">
                    {chat.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {chat.message}
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col items-end gap-1">
                {chat.unread > 0 && (
                  <div
                    className="
                      w-5 h-5 rounded-full bg-black text-white
                      text-[10px] font-semibold
                      flex items-center justify-center
                    "
                  >
                    {chat.unread}
                  </div>
                )}

                <span className="text-xs text-gray-500">
                  {chat.time}
                </span>
              </div>
            </div>

            {/* HR Separator (not after last item) */}
            {index !== chatList.length - 1 && (
              <hr className="border-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ChatContact52;