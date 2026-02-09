import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler
);

const MONTH_LABELS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

const Chart = ({
  title = "Performance",
  thisWeekData = [],
  lastWeekData = [],
  thisWeekValue = 0,
  lastWeekValue = 0,
}) => {
  const chartData = {
    labels: MONTH_LABELS,
    datasets: [
      {
        label: "This Week",
        data: thisWeekData,
        borderColor: "#FBBF24",
        backgroundColor: "rgba(251,191,36,0.15)",
        fill: true,
        tension: 0.45,
        borderWidth: 4,

        pointRadius: 0,
        pointHoverRadius: 7,
        pointHitRadius: 30,
        pointHoverBackgroundColor: "#ffffff",
        pointHoverBorderColor: "#FBBF24",
        pointHoverBorderWidth: 3,
      },
      {
        label: "Last Week",
        data: lastWeekData,
        borderColor: "#FB7185",
        backgroundColor: "rgba(251,113,133,0.15)",
        fill: true,
        tension: 0.45,
        borderWidth: 4,

        pointRadius: 0,
        pointHoverRadius: 7,
        pointHitRadius: 30,
        pointHoverBackgroundColor: "#ffffff",
        pointHoverBorderColor: "#FB7185",
        pointHoverBorderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "nearest",
      intersect: false,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#111827",
        titleColor: "#fff",
        bodyColor: "#fff",
        cornerRadius: 8,
        padding: 10,
      },
    },
    scales: {
      x: {
        grid: { display: true, color: "#E5E7EB", drawBorder: false },
        ticks: { color: "#9CA3AF", font: { size: 12 } },
      },
      y: {
        min: 0,
        max: 100,
        ticks: { stepSize: 25, color: "#9CA3AF", font: { size: 12 } },
        grid: { display: false },
        border: { display: false },
      },
    },
  };

  return (
    <div className="w-full bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex gap-6 text-sm">
          <div className="text-right">
            <p className="flex items-center gap-2 text-gray-500 justify-end">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              This Week
            </p>
            <p className="font-semibold text-gray-800">{thisWeekValue.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="flex items-center gap-2 text-gray-500 justify-end">
              <span className="w-2 h-2 rounded-full bg-pink-400"></span>
              Last Week
            </p>
            <p className="font-semibold text-gray-800">{lastWeekValue.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="w-full h-64">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Chart;
