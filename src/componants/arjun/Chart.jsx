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
    maintainAspectRatio: false,
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
        ticks: { 
          color: '#9ca3af',
          // Max ticks limit helps avoid crowding on mobile
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 6 
        }
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
    /* Adjusted padding for mobile (p-4) vs desktop (p-6) */
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md flex flex-col w-full max-w-4xl mx-auto">
      
      {/* Changed to flex-col for mobile, flex-row for desktop */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-gray-800 text-xl font-bold">Performance</h2>
        
        {/* Adjusted spacing for stats on mobile */}
        <div className="flex gap-8 sm:gap-6 text-sm">
          <div>
            <span className="text-[#FFB800] mr-1">●</span> 
            <span className="text-gray-500">This Week</span>
            <div className="font-bold text-lg sm:text-xl">1.245</div>
          </div>
          <div>
            <span className="text-[#FF7A50] mr-1">●</span> 
            <span className="text-gray-500">Last Week</span>
            <div className="font-bold text-lg sm:text-xl">1.356</div>
          </div>
        </div>
      </div>

      {/* Increased min-height for better visibility on small screens */}
      <div className="h-[250px] sm:h-[300px] lg:h-[400px] w-full">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default Chart;