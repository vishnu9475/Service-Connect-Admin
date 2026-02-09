import React from 'react';

const Finance = () => {
  const data = [
    { day: 'Mon', thisWeek: 95, lastWeek: 72 },
    { day: 'Tue', thisWeek: 42, lastWeek: 55 },
    { day: 'Wed', thisWeek: 35, lastWeek: 28 },
    { day: 'Thu', thisWeek: 48, lastWeek: 38 },
    { day: 'Fri', thisWeek: 28, lastWeek: 20 },
    { day: 'Sat', thisWeek: 65, lastWeek: 82 },
    { day: 'Sun', thisWeek: 72, lastWeek: 52 },
  ];

  return (
    <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-50 max-w-md">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-bold text-[#2D3154]">Finance</h3>
        <div className="flex gap-4">
          <div className="text-right">
            <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB648]"></span> This Week
            </div>
            <div className="text-sm font-bold text-[#2D3154]">1.245</div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7F5C]"></span> Last Week
            </div>
            <div className="text-sm font-bold text-[#2D3154]">1.356</div>
          </div>
        </div>
      </div>

      <div className="relative h-48 flex items-end justify-between px-2">
        {/* Y-Axis Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[100, 80, 60, 40, 20, 0].map(val => (
            <div key={val} className="flex items-center gap-2">
              <span className="text-[10px] text-gray-300 w-4">{val}</span>
              <div className="flex-1 border-b border-indigo-50/50"></div>
            </div>
          ))}
        </div>

        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center flex-1 z-10 relative group">
            <div className="flex items-end gap-1 h-32">
              <div className="w-2.5 bg-[#FF7F5C] rounded-t-full" style={{ height: `${item.lastWeek}%` }}></div>
              <div className="w-2.5 bg-[#FFB648] rounded-t-full" style={{ height: `${item.thisWeek}%` }}></div>
            </div>
            <span className={`text-[11px] mt-2 font-semibold ${item.day === 'Wed' ? 'text-[#4E4CB8]' : 'text-gray-300'}`}>
              {item.day}
            </span>

            {/* Wednesday Tooltip */}
            {item.day === 'Wed' && (
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#4E4CB8] text-white px-3 py-1.5 rounded-xl text-center shadow-lg">
                <div className="text-xs font-bold leading-tight">42%</div>
                <div className="text-[8px] whitespace-nowrap opacity-80">982 Income</div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#4E4CB8] rotate-45"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Finance;