// CustomerArrivalChart.jsx
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Settings } from 'lucide-react';

const data = [
  { day: '0', line1: 450, line2: 310 },
  { day: '1', line1: 380, line2: 210 },
  { day: '2', line1: 10, line2: 450 },
  { day: '3', line1: 180, line2: 170 },
  { day: '4', line1: 0, line2: 150 },
  { day: '5', line1: 320, line2: 310 },
  { day: '6', line1: 170, line2: 180 },
  { day: '7', line1: 350, line2: 220 },
  { day: '8', line1: 330, line2: 50 },
  { day: '9', line1: 410, line2: 350 },
  { day: '11', line1: 70, line2: 370 },
  { day: '13', line1: 430, line2: 290 },
  { day: '15', line1: 380, line2: 260 },
  { day: '17', line1: 320, line2: 0 },
  { day: '19', line1: 310, line2: 210 },
  { day: '21', line1: 450, line2: 60 },
  { day: '23', line1: 430, line2: 150 },
  { day: '25', line1: 200, line2: 450 },
  { day: '27', line1: 400, line2: 180 },
  { day: '29', line1: 70, line2: 420 },
  { day: '31', line1: 110, line2: 360 },
];

const CustomerArrivalChart = () => (
  <div className="w-full h-full bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-bold text-gray-800">Customer Arrival</h2>
      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
        <Settings size={24} />
      </button>
    </div>

    <div className="flex-1 min-h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <CartesianGrid vertical={true} horizontal={true} stroke="#e5e7eb" />
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={true} 
            tick={{ fill: '#6b7280', fontSize: 12 }}
            dy={10}
          />
          <YAxis 
            domain={[0, 600]} 
            ticks={[0, 150, 300, 450, 600]}
            axisLine={false} 
            tickLine={true}
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Line
            type="linear"
            dataKey="line1"
            stroke="#93c5fd"
            strokeWidth={1.5}
            dot={{ r: 4, fill: '#fff', strokeWidth: 1, stroke: '#93c5fd' }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="linear"
            dataKey="line2"
            stroke="#4c1d95"
            strokeWidth={1.5}
            dot={{ r: 4, fill: '#fff', strokeWidth: 1, stroke: '#4c1d95' }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default CustomerArrivalChart;
