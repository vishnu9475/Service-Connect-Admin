
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const reviews = [
  {
    name: "Helene Moore",
    avatar: "https://i.pravatar.cc/100?img=47",
    rating: 4,
    date: "June 5, 2019",
    review:
      "The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7\" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.",
  },
  {
    name: "Helene Moore",
    avatar: "https://i.pravatar.cc/100?img=48",
    rating: 4,
    date: "June 5, 2019",
    review:
      "The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7\" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.",
  },
  {
    name: "Alex John",
    avatar: "https://i.pravatar.cc/100?img=49",
    rating: 5,
    date: "July 12, 2019",
    review:
      "Excellent service. Highly professional and friendly staff. Would definitely recommend to others.",
  },
];

function UserReviews() {
  const [showAll, setShowAll] = useState(false);

  // 👉 show only 2 reviews initially
  const visibleReviews = showAll ? reviews : reviews.slice(0, 2);

  return (
    <div className="bg-[#F3F4FF]">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-700">
          {reviews.length} reviews
        </p>

        {/* ✅ SEE ALL */}
        {reviews.length > 2 && !showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="text-sm text-indigo-600 hover:underline"
          >
            See all
          </button>
        )}
      </div>

      {/* Reviews */}
      <div className="space-y-6">
        {visibleReviews.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 sm:p-6"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">

              {/* LEFT */}
              <div className="flex gap-4">
                <img
                  src={item.avatar}
                  alt="avatar"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-medium text-gray-900">
                    {item.name}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-4 h-4 ${
                          i < item.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <p className="text-sm text-indigo-600 sm:text-right">
                {item.date}
              </p>
            </div>

            {/* Review text */}
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              {item.review}
            </p>
          </div>
        ))}
      </div>

      {/* OPTIONAL: SHOW LESS */}
      {showAll && reviews.length > 2 && (
        <button
          onClick={() => setShowAll(false)}
          className="mt-4 text-sm text-indigo-600 hover:underline"
        >
          Show less
        </button>
      )}
    </div>
  );
}

export default UserReviews;
