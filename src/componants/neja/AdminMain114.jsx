
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiSearch, FiBell, FiSettings } from "react-icons/fi";

// const AdminMain114 = ({
//   title = "Page Title",
//   showSearch = true,
//   userName = "Abc",
//   userRole = "Admin",
//   avatarUrl,
//   children,
// }) => {
//   const [hasNotification, setHasNotification] = useState(true);
//   const navigate = useNavigate();

//   const handleProfileClick = () => {
//     navigate("/adminprofile");
//   };

//   const handleSettingsClick = () => {
//     navigate("/generalsettings");
//   };

//   const handleNotificationClick = () => {
//     setHasNotification(false);
//     navigate("/notification");
//   };

//   return (
//     <div className="min-h-screen bg-[#f5f6ff]">

//       {/* HEADER */}
//       <div className="px-4 sm:px-6 py-3">

//         {/* TOP ROW */}
//         <div className="flex flex-wrap items-center justify-between gap-3">

//           {/* TITLE */}
//           <h1 className="text-lg font-semibold text-[#2d2d6e] mt-1">
//             {title}
//           </h1>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center gap-3 sm:gap-5">

//             {/* DESKTOP SEARCH */}
//             {showSearch && (
//               <div className="hidden sm:flex items-center bg-white rounded-full px-5 py-2 w-72 shadow-sm">
//                 <FiSearch className="text-indigo-400 mr-3" />
//                 <input
//                   placeholder="Search here..."
//                   className="w-full text-sm outline-none"
//                 />
//               </div>
//             )}

//             <div
//               className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer"
//                 onClick={handleNotificationClick}
//                 title="Notifications"
//               >
//               <FiBell className="text-gray-500 text-lg" />

//               {/* Notification dot */}
//               {hasNotification && (
//                 <span className="absolute top-1.5 right-1.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></span>
//               )}
//             </div>

//             <div 
//                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm"
//                onClick={handleSettingsClick}
//                title="Settings"
//               >
//               <FiSettings className="text-gray-500" />
//             </div>

//             {/* AVATAR */}
//             <div className="flex items-center gap-3">
//               <div className="text-right text-sm leading-tight hidden sm:block"
//                  onClick={handleProfileClick}
//                  title="Admin Profile"
//               >
//                 <p className="font-medium text-gray-700">{userName}</p>
//                 <p className="text-xs text-gray-400">{userRole}</p>
//               </div>

//               <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
//                 {avatarUrl ? (
//                   <img
//                     src={avatarUrl}
//                     alt="avatar"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center text-sm font-semibold text-gray-500">
//                     {userName.charAt(0)}
//                   </div>
//                 )}
//               </div>
//             </div>

//           </div>
//         </div>

        
//         {showSearch && (
//           <div className="mt-3 sm:hidden">
//             <div className="flex items-center bg-white rounded-full px-4 py-2 w-full shadow-sm">
//               <FiSearch className="text-indigo-400 mr-3" />
//               <input
//                 placeholder="Search here..."
//                 className="w-full text-sm outline-none"
//               />
//             </div>
//           </div>
//         )}

//       </div>

      
//       <div className="px-4 sm:px-6 py-4">
//         {children}
//       </div>

//     </div>
//   );
// };

// export default AdminMain114;

import { useNavigate } from "react-router-dom";
import { FiSearch, FiBell, FiSettings } from "react-icons/fi";

const AdminMain114 = ({
  title = "Page Title",
  showSearch = true,
  userName = "Abc",
  userRole = "Admin",
  avatarUrl,
  children,
}) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/adminprofile");
  };

  const handleSettingsClick = () => {
    navigate("/generalsettings");
  };

  const handleNotificationClick = () => {
    navigate("/notification");
  };

  return (
    <div className="min-h-screen bg-[#f5f6ff] ">

      {/* HEADER */}
      <div className="px-4 sm:px-6 py-3">

        {/* TOP ROW */}
        <div className="flex flex-wrap items-center justify-between gap-3">

          {/* TITLE */}
          <h1 className="text-xl font-semibold text-[#2d2d6e] mt-1 ml-10 lg:ml-0">
            {title}
          </h1>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 sm:gap-5">

            {/* DESKTOP SEARCH */}
            {showSearch && (
              <div className="hidden sm:flex items-center bg-white rounded-full px-5 py-2 w-72 shadow-sm">
                <FiSearch className="text-indigo-400 mr-3" />
                <input
                  placeholder="Search here..."
                  className="w-full text-sm outline-none"
                />
              </div>
            )}

            <div
               className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100 cursor-pointer"
               onClick={handleNotificationClick}
               title="Notifications"
              >
              <FiBell className="text-gray-500 text-lg" />
             <span className="absolute top-1.5 right-1.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></span>
            </div>


            <div 
               className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100 cursor-pointer"
               onClick={handleSettingsClick}
               title="Settings"
              >
              <FiSettings className="text-gray-500" />
            </div>

            {/* AVATAR */}
            <div className="flex items-center gap-3"
            onClick={handleProfileClick}
            >
              <div className="text-right text-sm leading-tight hidden sm:block"
                 
                 title="Admin Profile"
              >
                <p className="font-medium text-gray-700">{userName}</p>
                <p className="text-xs text-gray-400">{userRole}</p>
              </div>

              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm font-semibold text-gray-500">
                    {userName.charAt(0)}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        
        {showSearch && (
          <div className="mt-3 sm:hidden">
            <div className="flex items-center bg-white rounded-full px-4 py-2 w-full shadow-sm">
              <FiSearch className="text-indigo-400 mr-3" />
              <input
                placeholder="Search here..."
                className="w-full text-sm outline-none"
              />
            </div>
          </div>
        )}

      </div>

      
      <div className="px-4 sm:px-6 py-4">
        {children}
      </div>

    </div>
  );
};

export default AdminMain114;
