import React from "react";

const ErrorAlert112 = ({
  code = "403",
  title = "Access Denied",
  description = "Sorry, You don't have access to this page",
  text = "Go back to the Previous page",
  linkText = "link",
  onLinkClick,
}) => {
  return (
    <div className="min-h-screen w-full bg-[#161A24] flex items-center justify-center px-4">
      {/* Increased max-width to allow content to spread on desktop */}
      <div className="w-full max-w-4xl text-center">
        
        {/* Error Code: Massive on desktop (text-9xl+) */}
        <h1 className="text-[80px] md:text-[150px] lg:text-[200px] font-bold text-yellow-300 tracking-tighter leading-none">
          {code}
        </h1>

        {/* Title: Substantially larger on desktop */}
        <p className="mt-4 text-lg md:text-2xl lg:text-3xl font-medium text-gray-200">
          {title}
        </p>

        {/* Description: Wider max-width and larger font for readability */}
        {description && (
          <p className="mt-6 text-sm md:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto px-4">
            {description}
          </p>
        )}

        {/* Compact Outline Box: Larger text and padding on desktop */}
        <div
          className="
            mt-12
            mx-auto
            w-fit
            border-2 border-gray-500
            rounded-xl
            px-6 py-4
            text-sm md:text-lg
            text-gray-200
            hover:border-yellow-300 transition-colors duration-300
          "
        >
          <span>
            {text}{" "}
            <span
              onClick={onLinkClick}
              className="
                font-bold
                underline
                text-white
                cursor-pointer
                hover:text-yellow-300
              "
            >
              {linkText}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert112;