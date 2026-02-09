import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Chart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false, // important for dynamic height
    tension: 0.4,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          drawBorder: false,
          color: 'rgba(200, 200, 255, 0.2)',
        },
        ticks: { color: '#9ca3af' }
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          color: '#9ca3af',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        fill: true,
        label: 'This Week',
        data: [0, 30, 85, 30, -5, 25, 50, 40, 25, 45, 75, 55],
        borderColor: '#FFB800',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, context.chart.height);
          gradient.addColorStop(0, 'rgba(255, 184, 0, 0.2)');
          gradient.addColorStop(1, 'rgba(255, 184, 0, 0)');
          return gradient;
        },
        pointRadius: 0,
      },
      {
        fill: true,
        label: 'Last Week',
        data: [20, 35, 50, 35, 10, 30, 60, 45, 10, 40, 90, 40],
        borderColor: '#FF7A50',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, context.chart.height);
          gradient.addColorStop(0, 'rgba(255, 122, 80, 0.2)');
          gradient.addColorStop(1, 'rgba(255, 122, 80, 0)');
          return gradient;
        },
        pointRadius: (context) => (context.dataIndex === 6 ? 8 : 0),
        pointBackgroundColor: '#fff',
        pointBorderWidth: 4,
        pointHoverRadius: 10,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-gray-800 text-xl font-bold">Performance</h2>
        <div className="flex gap-6 text-sm">
          <div>
            <span className="text-[#FFB800]">●</span> This Week
            <div className="font-bold text-lg">1.245</div>
          </div>
          <div>
            <span className="text-[#FF7A50]">●</span> Last Week
            <div className="font-bold text-lg">1.356</div>
          </div>
        </div>
      </div>

      {/* Chart container stretches automatically */}
      <div className="flex-1 min-h-[200px]">
        <Line options={options} data={data} className="h-full w-full" />
      </div>
    </div>
  );
};

export default Chart;
