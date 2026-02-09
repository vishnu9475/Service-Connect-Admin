import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Commission', value: 50, color: '#6366f1' },
  { name: 'Ads', value: 30, color: '#ff4d4f' },
  { name: 'New service registration', value: 20, color: '#c7c7f1' },
];

const RevenueCard = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm w-full max-w-md">
      <div className="flex flex-col mb-4">
        <h2 className="text-xl font-bold text-gray-800">Revenue</h2>
        <p className="text-xs text-gray-400 mt-1">Click each area to see details</p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={85}
              dataKey="value"
              stroke="none"
              // Custom label styling to match the thin blue lines in the image
              label={({ cx, cy, midAngle, outerRadius, name }) => {
                const RADIAN = Math.PI / 180;
                const radius = 25 + outerRadius;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    fill="#6366f1"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                    className="text-[10px] font-medium"
                  >
                    {name}
                  </text>
                );
              }}
              // Connectors (Lines)
              labelLine={{ stroke: '#6366f1', strokeWidth: 1 }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueCard;