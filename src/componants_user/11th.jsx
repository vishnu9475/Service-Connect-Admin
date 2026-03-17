

const Comp11 = () => {
  return (
    <div className="mx-auto my-6 max-w-2xl h-56 bg-[#2b2e35] text-white rounded-2xl p-6 relative overflow-hidden">
      
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xs font-bold text-gray-300">
            25% OFF*
          </span>
          <h2 className="text-lg font-bold mt-1">
            Today’s Special
          </h2>
        </div>

       
      </div>
      <div className="flex justify-between items-center">
        <div>
      {/* Description */}
      <p className="text-sm text-gray-400 font-bold mt-3 max-w-[85%] leading-relaxed">
        Get a Discount for Every Course Order only Valid for Today!
      </p>
       </div>
      <button className="text-xs text-gray-400 hover:text-white transition flex items-center">
          SEE ALL
        </button>
        </div>
      {/* Slider dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
        <span className="w-2 h-2 rounded-full bg-gray-500"></span>
        <span className="w-2 h-2 rounded-full bg-gray-500"></span>
      </div>

      {/* Decorative shapes */}
      <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/5 rounded-full"></div>
      <div className="absolute bottom-6 right-12 w-20 h-20 bg-white/5 rounded-full"></div>
    </div>
  );
};

export default Comp11;
