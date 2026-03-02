import React, { useRef, useEffect } from "react";
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
  title = "Balance Analytics",
  incomeData = [],
  expenseData = [],
  incomeValue = 0,
  expenseValue = 0,
}) => {
  const chartRef = useRef(null);

  const data = {
    labels: MONTH_LABELS,
    datasets: [
      {
        label: "Expense",
        data: expenseData,
        borderColor: "#FBBF24",
        fill: true,
        tension: 0.6,
        cubicInterpolationMode: "monotone",
        borderWidth: 4,
        pointRadius: 0,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#ffffff",
        pointHoverBorderColor: "#FBBF24",
        pointHoverBorderWidth: 3,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(251,191,36,0.4)");
          gradient.addColorStop(1, "rgba(251,191,36,0.02)");
          return gradient;
        },
      },
      {
        label: "Income",
        data: incomeData,
        borderColor: "#FB7185",
        fill: true,
        tension: 0.6,
        cubicInterpolationMode: "monotone",
        borderWidth: 4,
        pointRadius: 0,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#ffffff",
        pointHoverBorderColor: "#FB7185",
        pointHoverBorderWidth: 3,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(251,113,133,0.4)");
          gradient.addColorStop(1, "rgba(251,113,133,0.02)");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#4F46E5",
        titleColor: "#fff",
        bodyColor: "#fff",
        cornerRadius: 12,
        padding: 12,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "#E5E7EB",
          drawBorder: false,
        },
        ticks: {
          color: "#9CA3AF",
          font: { size: 12 },
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          color: "#9CA3AF",
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full bg-[#F9FAFB] rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

        <div className="flex gap-8 text-sm">
          <div className="text-right">
            <p className="flex items-center gap-2 text-gray-500 justify-end">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              Expense
            </p>
            <p className="font-semibold text-gray-800">
              {expenseValue.toLocaleString()}
            </p>
          </div>

          <div className="text-right">
            <p className="flex items-center gap-2 text-gray-500 justify-end">
              <span className="w-2 h-2 rounded-full bg-pink-400"></span>
              Income
            </p>
            <p className="font-semibold text-gray-800">
              {incomeValue.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-72">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;