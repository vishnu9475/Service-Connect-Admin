import { useState } from "react";
import {Link} from "react-router-dom"

const offers = [
  {
    discount: "25% OFF*",
    title: "Today’s Special",
    desc: "Get a Discount for Every Course Order only Valid for Today!",
  },
  {
    discount: "40% OFF*",
    title: "Limited Time",
    desc: "Upgrade your skills with massive discounts. Hurry up!",
  },
  {
    discount: "Buy 1 Get 1",
    title: "Special Deal",
    desc: "Enroll now and get two courses for one price.",
  },
];

const Comp11 = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto my-6 max-w-[90%] h-56 bg-[#2b2e35] text-white rounded-2xl p-6 relative overflow-hidden shadow-md shadow-gray-900">

      {/* SLIDER VIEWPORT */}
      <div className="overflow-hidden h-full">
        {/* SLIDER */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{
            transform: `translateX(-${active * 100}%)`,
          }}
        >
          {offers.map((offer, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
            >
              <span className="text-xs font-bold text-gray-300">
                {offer.discount}
              </span>

              <h2 className="text-lg font-bold mt-1">
                {offer.title}
              </h2>

              <p className="text-sm text-gray-400 font-bold mt-3 max-w-[85%] leading-relaxed">
                {offer.desc}
              </p>

              <button className="text-xs text-white hover:text-gray-500 font-semibold float-end ">
                <Link to="/OfferPage"> SEE ALL</Link>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {offers.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              active === index
                ? "bg-yellow-400 scale-125"
                : "bg-gray-500"
            }`}
          />
        ))}
      </div>

      {/* DECOR */}
      <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/5 rounded-full"></div>
      <div className="absolute bottom-6 right-12 w-20 h-20 bg-white/5 rounded-full"></div>
    </div>
  );
};

export default Comp11;
