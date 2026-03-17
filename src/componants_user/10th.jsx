// const Comp10 = ({ open = true }) => {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      
//       {/* Modal Card */}
//       <div className="w-80 rounded-3xl bg-white p-7 text-center shadow-2xl">
        
//         {/* Illustration */}
//         <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to from-purple-100 to-pink-100">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/3159/3159066.png"
//             alt="success"
//             className="h-14 w-14"
//           />
//         </div>

//         {/* Title */}
//         <h2 className="mb-2 text-xl font-semibold text-gray-900">
//           Welcome 🎉
//         </h2>

//         {/* Description */}
//         <p className="mb-5 text-sm text-gray-500">
//           Your account is ready to use.  
//           You will be redirected to the Home page shortly.
//         </p>

//         {/* Loader */}
//         <div className="flex justify-center">
//           <span className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-purple-600"></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Comp10;

import { HiOutlineArrowRight } from "react-icons/hi";

const Comp10 = ({
  open = true,

  // content props
  imageSrc = "https://cdn-icons-png.flaticon.com/512/3159/3159066.png",
  title = "Welcome 🎉",
  description = "Your account is ready to use. You will be redirected to the Home page shortly.",

  // visibility toggles
  showImage = false,
  showTitle = false,
  showDescription = true,

  // loader / button section
  mode = "button",
  buttonText = "Continue",
  showArrow = false,
  onAction = () => {},
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-80 rounded-3xl bg-white p-7 text-center shadow-2xl">

        {/* IMAGE */}
        {showImage && (
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to from-purple-100 to-pink-100">
            <img src={imageSrc} alt="modal" className="h-14 w-14" />
          </div>
        )}

        {/* TITLE */}
        {showTitle && (
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            {title}
          </h2>
        )}

        {/* DESCRIPTION */}
        {showDescription && (
          <p className="mb-6 text-sm text-gray-500">
            {description}
          </p>
        )}

        {mode === "loader" ? (
          <div className="flex justify-center">
            <span className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-purple-600" />
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              onClick={onAction}
              className="w-56 bg-[#1E1F2B] text-white px-6 py-3 rounded-full flex items-center justify-center gap-3"
            >
              <span className="text-sm font-semibold">{buttonText}</span>

              {showArrow && (
                <span className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center">
                  <HiOutlineArrowRight size={18} />
                </span>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comp10;
