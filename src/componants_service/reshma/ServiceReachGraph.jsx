import React from "react";

const ServiceReachGraph = () => {
  const data = [0, 100, 90, 150, 135, 205, 160];
  const maxValue = 350;

  const width = 320;
  const height = 180;
  const padding = 30;

  const points = data.map((value, index) => {
    const x = padding + (index * (width - padding * 2)) / (data.length - 1);
    const y = height - padding - (value / maxValue) * (height - padding * 2);
    return `${x},${y}`;
  });

  const areaPath = `
    M ${padding},${height - padding}
    L ${points.join(" L ")}
    L ${width - padding},${height - padding}
    Z
  `;

  return (
    <div className="px-7 md:px-10 lg:px-10 my-2 ">
      <div div className="bg-white rounded-2xl shadow-md p-6 ">
        <h3 className="font-semibold text-gray-700 mb-10">Service Reach</h3>

        <div className="relative">
          {/* Y-axis labels */}
          <div className="absolute left-0  bottom-8 h-full flex flex-col justify-between text-xs text-purple-400">
            {[350, 300, 250, 200, 150, 100, 50, 0].map((v) => (
              <span key={v}>{v}</span>
            ))}
          </div>

          {/* Chart */}
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-52 ml-6">
            {/* Area */}
            <path d={areaPath} fill="rgba(139, 92, 246, 0.15)" />

            {/* Line */}
            <polyline
              points={points.join(" ")}
              fill="none"
              stroke="#7c5cff"
              strokeWidth="3"
            />

            {/* Dots */}
            {points.map((point, index) => {
              const [x, y] = point.split(",");
              return <circle key={index} cx={x} cy={y} r="4" fill="#7c5cff" />;
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServiceReachGraph;
