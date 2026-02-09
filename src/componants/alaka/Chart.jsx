import React, { useState } from "react";
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

const labels = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

const DATA_BY_RANGE = {
  Month:   [20, 35, 50, 30, 10, 40, 60, 30, 10, 45, 80, 40],
  Quarter: [30, 45, 40, 60, 55, 65, 50, 45, 70, 80, 75, 60],
  Year:    [10, 20, 30, 40, 50, 60, 70, 80, 90, 85, 70, 60],
};

export default function PerformanceChart116() {
  const [range, setRange] = useState("Month");
  const [open, setOpen] = useState(false);

  const data = {
    labels,
    datasets: [
      {
        data: DATA_BY_RANGE[range],
        borderColor: "#FF7A59",
        backgroundColor: "rgba(255,122,89,0.18)",
        fill: true,
        tension: 0.45,
        borderWidth: 3,
        pointRadius: (ctx) => (ctx.dataIndex === 6 ? 6 : 0),
        pointBackgroundColor: "#fff",
        pointBorderColor: "#FF7A59",
        pointBorderWidth: 3,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "nearest", intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#4F46E5",
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          title: (ctx) => `$${ctx[0].raw.toLocaleString()}`,
          label: (ctx) => `${ctx.label}, 2020`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: "#E5E7EB", drawBorder: false },
        ticks: { color: "#9CA3AF", font: { size: 11 } },
      },
      y: {
        min: 0,
        max: 100,
        ticks: { stepSize: 25, color: "#9CA3AF", font: { size: 11 } },
        grid: { display: false },
        border: { display: false },
      },
    },
  };

  return (
    <div className="w-full bg-white rounded-2xl p-4 sm:p-6 shadow-sm relative">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">

        {/* TITLE */}
        <h3 className="text-base sm:text-lg font-semibold text-[#303972]">
          Income
        </h3>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-between sm:justify-end gap-4 relative">

          <div className="text-right">
            <p className="flex items-center justify-end gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              Income
            </p>
            <p className="font-semibold text-sm sm:text-base text-[#303972]">
              1,356
            </p>
          </div>

          {/* DROPDOWN BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="border border-indigo-500 text-indigo-600 px-3 py-1.5 rounded-full text-xs sm:text-sm flex items-center gap-2"
          >
            {range}
            <span className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-indigo-600" />
          </button>

          {/* DROPDOWN MENU */}
          {open && (
            <div className="absolute top-10 right-0 bg-white shadow-lg rounded-lg overflow-hidden text-sm z-20">
              {["Month", "Quarter", "Year"].map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setRange(item);
                    setOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-indigo-50 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CHART */}
      <div className="w-full h-48 sm:h-56 lg:h-64">
        <Line data={data} options={options} />
      </div>

    </div>
  );
}
