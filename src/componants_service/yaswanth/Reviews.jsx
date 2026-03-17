// import React, { useState } from 'react'
// import { Rating } from 'react-simple-star-rating'
// import black from "../assets/black.jpeg"
// import yellowstar from "../assets/yellowstar.png"
// import heart from "../assets/heart.png"

// export default function Reviews() {
//   const [rating, setRating] = useState(0)

//   const handleRating = (rate) => {
//     setRating(rate)

//   }
//   const onPointerEnter = () => console.log('Enter')
//   const onPointerLeave = () => console.log('Leave')
//   const onPointerMove = (value, index) => console.log(value, index)

//   return (
//     <div className="bg-[#dddddd] w-full h-screen">
//     <div className="flex flex-col p-10
//      items-center
//      w-full h-full">
//       <h1 className="text-4xl font-bold">4.8</h1>
      
//       <Rating
//         onClick={handleRating}
//         onPointerEnter={onPointerEnter}
//         onPointerLeave={onPointerLeave}
//         onPointerMove={onPointerMove}
//         SVGclassName="inline-block"
//         size="25" 
//       />
//       <h1>Based on 448 reviews</h1>
//       <div className="flex mt-6">
//         <div>
//           <h1 className="shadow-xl bg-white rounded-full p-1 ml-2 w-18">Excellent</h1>
//         </div>
//         <div>
//           <h1 className="shadow-xl bg-white rounded-full p-1 ml-2 w-14">Good</h1>
//         </div>
//         <div>
//           <h1 className="shadow-xl bg-white rounded-full p-1 ml-2 w-18">Average</h1>
//         </div>
//         <div>
//           <h1 className="shadow-xl bg-white rounded-full p-1 ml-2 w-28">Below average</h1>
//         </div>
//         <div>
//           <h1 className="shadow-xl bg-white rounded-full p-1 ml-2 w-10">Bad</h1>
//         </div>
//       </div>
//       <div className="flex bg-white h-36 w-full mt-3 rounded-2xl p-4">
//         <img src={black} className="h-10 w-10 rounded-full"/>
//         <div className="w-full">
//           <div className="flex justify-between">
//             < h1 className="font-semibold">Heather S mcmullen</h1>
//             <div className="flex items-center rounded-full border border-blue-400 p-1 w-10 h-5">
//                <img src={yellowstar} className="w-3 h-3"/>
//               <p className="text-xs">4.2</p>
//             </div>
//           </div>    
//            <p>dfdfgsgdfgsdssdasdasdasdasd</p>
//            <div className="flex items-center">
//             <img src={heart} className="w-4 h-4"/>
//             <p className="ml-5">760</p>
//              <p className="ml-5">2 weeks ago</p>
//             </div>
           
//         </div>
//       </div>
//     </div>
//       </div>
//   )
// }

import React, { useState } from "react";
import {  Heart } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
 

export default function Reviews({onBack}) {
  const [selectedFilter, setSelectedFilter] = useState("Excellent");


  const handleRating = (rate) => {
     setRating(rate)}

   const onPointerEnter = () => console.log('Enter')
   const onPointerLeave = () => console.log('Leave')
   const onPointerMove = (value, index) => console.log(value, index)

  const reviews = [
    {
      name: "Heather S. McMullen",
      rating: 4.2,
      review:
        "The Course is Very Good dolor sit amet, con sect tur adipiscing elit. Naturales divitias dixit parab les esse.",
      likes: 760,
      time: "2 Weeks Ago",
    },
    {
      name: "Natasha B. Lambert",
      rating: 4.8,
      review:
        "The Course is Very Good dolor veterm, quo etiam utuntur hi capimus.",
      likes: 918,
      time: "2 Weeks Ago",
    },
    {
      name: "Marshall A. Lester",
      rating: 4.6,
      review:
        "The Course is Very Good dolor sit amet, Naturales divitias dixit parab les esse.",
      likes: 914,
      time: "2 Weeks Ago",
    },
  ];

  const filters = ["Excellent", "Good", "Average", "Below Average"];

  return (
    <div className="bg-primary min-h-screen">
     
        {/* Rating Summary */}
        <div className="flex flex-col items-center justify-center py-5 text-center">
          <h1 className="text-4xl font-bold text-gray-900">4.8</h1>
                <Rating
              onClick={handleRating}
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
              onPointerMove={onPointerMove}
              SVGclassName="inline-block"
               size="25" 
       />
          {/* <div className="flex justify-center items-center text-yellow-400 mt-1">
            {"⭐".repeat(5)}
          </div> */}
          <p className="text-sm text-gray-500 mt-1">
            Based on <span className="font-medium">448 Reviews</span>
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-row justify-center gap-2 px-4 mb-4 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-4 py-1.5 text-sm md:text-base font-medium rounded-full border transition-all ${
                selectedFilter === f
                  ? "bg-black text-white border-black"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 space-y-6 flex-1 w-full py-6"> 
        {/* Reviews List */}
        <div className="p-4 space-y-4 overflow-y-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 flex flex-col gap-2"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="text-gray-900 font-semibold text-sm md:text-base">
                      {review.name}
                    </h4>
                    <span className="text-sm font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                      ★ {review.rating}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base mt-1">
                    {review.review}
                  </p>
                  <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mt-2">
                    <div className="flex items-center gap-1">
                      <Heart
                        size={14}
                        className="text-red-500 fill-red-500"
                      />
                      <span>{review.likes}</span>
                    </div>
                    <span>{review.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review Button */}
        <div className=" w-[90%] sm:w-[80%] md:w-[60%] mx-auto px-2 py-2 mb-2 space-y-3">
          <Link to="/page25">
            <button className="w-full bg-gray-900 text-white font-medium py-3 rounded-full hover:bg-gray-700 transition-all text-sm md:text-base">
              Write a Review
            </button>
          </Link>
        </div>
    </div>
      </div>
    
  );
}