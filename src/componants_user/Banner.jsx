import card from "../assets/card.png";

const Banner = () => (
  <div
    className="ml-[18px] mr-[18px] h-[180px] text-white p-6 rounded-[32px] relative overflow-hidden mb-6 bg-cover bg-center flex flex-col justify-between"
    style={{
      backgroundImage: `url(${card})`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 rounded-[32px]"></div>

    {/* Top Content */}
    <div className="relative z-10">
      <p className="text-xs font-bold mb-1">25% OFF*</p>
      <h2 className="text-2xl font-bold mb-2">Today's Special</h2>
      
      <div className="flex justify-between items-end">
        <p className="text-[10px] leading-relaxed max-w-[160px] opacity-90">
          Get a Discount for Every Course Order only Valid for Today.!
        </p>
        <button className="text-[10px] font-bold tracking-widest hover:underline">
          SEE ALL
        </button>
      </div>
    </div>

    {/* Bottom Dots */}
    <div className="relative z-10 flex justify-center gap-1.5 mt-4">
      <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
      <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
      <div className="w-4 h-1.5 rounded-full bg-yellow-500"></div>
      <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
      <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
    </div>
  </div>
);

export default Banner;