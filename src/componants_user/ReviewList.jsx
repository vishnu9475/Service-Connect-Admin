import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from 'react-router-dom';

export default function ReviewList({ onBack }) {
  const [selectedFilter, setSelectedFilter] = useState("Excellent");

  const reviews = [
    {
      name: "Heather S. McMullen",
      rating: 4.2,
      review: "The Course is Very Good dolor sit amet, con sect tur adipiscing elit. Naturales divitias dixit parab les esse.",
      likes: 760,
      time: "2 Weeks Ago",
    },
    {
      name: "Natasha B. Lambert",
      rating: 4.8,
      review: "The Course is Very Good dolor veterm, quo etiam utuntur hi capimus.",
      likes: 918,
      time: "2 Weeks Ago",
    },
    {
      name: "Marshall A. Lester",
      rating: 4.6,
      review: "The Course is Very Good dolor sit amet, Naturales divitias dixit parab les esse.",
      likes: 914,
      time: "2 Weeks Ago",
    },
  ];

  const filters = ["Excellent", "Good", "Average", "Below Average"];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      
      {/* 1. Rating Summary */}
      <div className="flex flex-col items-center justify-center py-8 text-center px-4">
        <h1 className="text-5xl font-black text-gray-900 tracking-tight">4.8</h1>
        <div className="flex justify-center items-center gap-1 text-yellow-400 mt-2 text-xl">
          {"★ ★ ★ ★ ★"}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Based on <span className="font-bold text-gray-800">448 Reviews</span>
        </p>
      </div>

      {/* 2. Horizontal Scrollable Filters 
          'scrollbar-hide' ensures it looks clean on mobile
      */}
      <div className="flex flex-row gap-2 px-4 mb-6 overflow-x-auto justify-start sm:justify-center">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setSelectedFilter(f)}
            className={`whitespace-nowrap px-5 py-2 text-xs sm:text-sm font-bold rounded-full border transition-all duration-200 ${
              selectedFilter === f
                ? "bg-black text-white border-black shadow-md"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* 3. Main Content Area */}
      <div className="w-full max-w-2xl mx-auto px-4 pb-24 space-y-4"> 
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 shadow-md hover:shadow-gray-400 rounded-2xl p-4 sm:p-5 transition-transform hover:scale-[1.01]"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex-shrink-0" />
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center gap-2">
                  <h4 className="text-gray-900 font-bold text-sm sm:text-base truncate">
                    {review.name}
                  </h4>
                  <span className="flex-shrink-0 text-[10px] sm:text-xs font-black bg-blue-50 text-blue-600 px-2 py-1 rounded-lg border border-blue-100">
                    ★ {review.rating}
                  </span>
                </div>
                
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2">
                  {review.review}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1.5 group cursor-pointer">
                    <Heart
                      size={16}
                      className="text-red-500 fill-red-500 transition-transform group-active:scale-125"
                    />
                    <span className="text-xs font-bold text-gray-700">{review.likes}</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-gray-400 italic">
                    {review.time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Sticky/Fixed Bottom Button Section */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-50 via-gray-50 to-transparent w-full max-w-2xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <Link to="/page25">
            <button className="w-full bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-black transition-all shadow-xl active:scale-[0.98] text-sm sm:text-base uppercase tracking-widest">
              Write a Review
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}