import { ArrowRight } from "lucide-react";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
// 1. Import useNavigate from react-router-dom
import { useNavigate } from "react-router-dom";

const ServiceProfile = () => {
  // 2. Initialize the navigate function
  const navigate = useNavigate();

  // --- SEPARATE REFS FOR EACH SECTION ---
  const imageSectionRef = useRef(null);
  const videoSectionRef = useRef(null);

  // --- STATE FOR "READ MORE" ---
  const [isExpanded, setIsExpanded] = useState(false);

  // --- DATA ---
  const services = [
    "Plumbing",
    "Access Mobile, Desktop & TV",
    "Water tank fitt",
    "Audio instal",
    "Lockset changin",
    "Pumb cleani",
    "Wiring",
  ];

  const reviews = [
    {
      name: "William S. Cunningham",
      rating: 4.5,
      text: "The Course is Very Good dolor sit amet, consect tur adipiscing elit. Naturales divitios",
      likes: 578,
      time: "2 Weeks Agos",
    },
    {
      name: "Martha E. Thompson",
      rating: 4.5,
      text: "The Course is Very Good dolor sit amet, consect tur adipiscing elit. Naturales divitios",
      likes: 578,
      time: "2 Weeks Agos",
    },
  ];

  const aboutText = `Today, graphic design has become one of the most popular and fast-growing career options in the world. In the past, graphic design was seen as just making posters or drawing logos. But now, it is a powerful profession that helps businesses, brands, and creators communicate visually with people. In the modern digital world, everything we see online needs design—like Instagram posts, YouTube thumbnails, website banners, app layouts, advertisements, product packaging, and even brand logos. Because of this, graphic designers are in high demand. One of the best things about graphic design is that it is a career where you can grow based on your skills and creativity, not only on degrees. Even beginners can start learning with simple tools like Canva, and later move to professional software like Adobe Photoshop, Illustrator, Figma, and After Effects.`;

  // --- SCROLL FUNCTION ---
  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-[1000px] mx-auto min-h-screen font-sans pb-10 relative">
      {/* Floating Chat Icon */}
      <div className="absolute top-4 right-6 z-10">
        <div className="bg-gray-900 p-3 rounded-full shadow-lg border-4 border-white cursor-pointer hover:scale-110 transition-transform">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-18 lg:px-30 space-y-4">
        <div className="mx-auto px-2 py-2 mb-2 mt-5 space-y-6">
          {/* 1. HEADER SECTION */}
          <div className="w-full bg-white border border-gray-100 rounded-[24px] p-5 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <span className="text-orange-600 text-xs font-bold">
                3 km away
              </span>
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="text-gray-900 text-xs font-bold">
                  4.2 | 32 Reviews
                </span>
              </div>
            </div>

            <h1 className="text-gray-900 text-lg font-bold lg:text-xl">
              William S. Cunningham
            </h1>
            <p className="text-gray-500 text-xs mb-4">Plumber</p>

            <div className="flex items-center gap-4 text-[10px] text-gray-400 font-medium lg:text-[12px]">
              <button
                onClick={() => scrollToSection(imageSectionRef)}
                className="flex items-center gap-1 hover:text-gray-900 transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
                <span className="underline decoration-dotted">12 images</span>
              </button>

              <button
                onClick={() => scrollToSection(videoSectionRef)}
                className="flex items-center gap-1 hover:text-gray-900 transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 7l-7 5 7 5V7z"></path>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
                <span className="underline decoration-dotted">9 videos</span>
              </button>

              <div className="flex items-center gap-1">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>2 Services listed</span>
              </div>
            </div>
          </div>

          {/* 2. ABOUT SECTION */}
          <div className="space-y-2">
            <h3 className="text-gray-900 font-bold text-sm lg:text-md">
              About
            </h3>
            <div className="bg-white border rounded-md px-4 py-3 text-xs text-gray-500 leading-5 lg:text-sm">
              <p className={isExpanded ? "" : "line-clamp-3"}>{aboutText}</p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-gray-900 font-bold underline cursor-pointer mt-2 block"
              >
                {isExpanded ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* 3. SERVICES SECTION */}
          <div className="space-y-3">
            <h3 className="text-gray-900 font-bold text-sm lg:text-md">
              Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-300 rounded-md p-3"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                  <span className="text-gray-900 text-xs font-medium lg:text-sm">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. REVIEWS SECTION */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-900 font-bold text-sm lg:text-md">
                Reviews
              </h3>
              <Link to="/page26">
                <span className="text-[10px] font-bold text-gray-900 hover:underline cursor-pointer">
                  SEE ALL &gt;
                </span>
              </Link>
            </div>
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-lg p-4 flex gap-3"
                >
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 12}`}
                    alt="User"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="text-gray-900 text-xs font-bold">
                        {review.name}
                      </h4>
                      <span className="text-[10px] font-bold text-orange-500">
                        ★ {review.rating}
                      </span>
                    </div>
                    <p className="text-gray-500 text-[10px] lg:text-[12px] mt-1">
                      {review.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. IMAGES SECTION */}
          <div ref={imageSectionRef} className="space-y-4 scroll-mt-20">
            <h3 className="text-gray-900 font-bold text-sm lg:text-md">
              Images
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-gray-100 rounded-md border border-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-200"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9ca3af"
                    strokeWidth="2"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* 6. VIDEOS SECTION */}
          <div ref={videoSectionRef} className="space-y-4 scroll-mt-50">
            <h3 className="text-gray-900 font-bold text-sm lg:text-md">
              Videos
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="aspect-square border border-gray-500 rounded-md flex items-center justify-center hover:bg-gray-50 cursor-pointer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 7l-7 5 7 5V7z"></path>
                    <rect
                      x="1"
                      y="5"
                      width="15"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- THE BUTTON SECTION --- */}
        <Link to="/U19Bookings">
          <button className="mt-4 w-full bg-gray-900 hover:bg-gray-800 text-white text-sm shadow-lg rounded-full flex justify-center text-center mx-auto py-1 px-6 relative cursor-pointer font-medium py-4">
            Book Service
            <span className="bg-white w-11 h-11 text-gray-900  rounded-full  flex items-center justify-center absolute top-1 bottom-0 right-1 ">
              <ArrowRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceProfile;
