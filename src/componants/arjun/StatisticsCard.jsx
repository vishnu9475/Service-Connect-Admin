import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Active Users', value: 50 },
  { name: 'In active Users', value: 50 },
];

const COLORS = ['#6366f1', '#f0f0ff'];

const StatisticsCard = () => {
  return (
    <div className="bg-white p-5 rounded-3xl shadow-sm w-full max-w-sm">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Statistics</h2>
      
      <div className="h-52 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={90}
              dataKey="value"
              startAngle={90}
              endAngle={450}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="none"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex justify-between mt-4 px-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#6366f1] rounded-md"></div>
          <span className="text-xs text-gray-500 font-medium">
            Active Users
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-gray-200 rounded-full"></div>
          <span className="text-xs text-gray-500 font-medium">
            Inactive Users
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
