import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  getDay,
} from "date-fns";

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const years = Array.from(
  { length: 30 },
  (_, i) => new Date().getFullYear() - 15 + i
);

const Calendar117 = ({ onSelect, className }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const onDateClick = (day) => {
    if (!isSameMonth(day, currentDate)) setCurrentDate(day);
    setSelectedDate(day);
    onSelect?.(day);
  };

  const renderDays = () => (
    <div className="grid grid-cols-7 text-center text-xs sm:text-sm text-gray-500 mb-1">
      {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => <div key={d}>{d}</div>)}
    </div>
  );

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    let day = startDate;
    const rows = [];

    while (day <= endDate) {
      const days = [];
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const isSunday = getDay(day) === 0;

        days.push(
          <button
            key={day}
            onClick={() => onDateClick(cloneDay)}
            className={`aspect-square border border-gray-100 flex items-center justify-center text-xs sm:text-sm
              ${
                !isSameMonth(day, monthStart)
                  ? "text-gray-300"
                  : isSunday
                  ? "text-red-400"
                  : "text-indigo-900"
              }
            `}
          >
            <span
              className={`w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full
                ${isSameDay(day, selectedDate) ? "bg-indigo-600 text-white" : ""}
              `}
            >
              {format(day, "d")}
            </span>
          </button>
        );
        day = addDays(day, 1);
      }
      rows.push(<div key={day} className="grid grid-cols-7">{days}</div>);
    }

    return <div className="flex flex-col flex-1">{rows}</div>;
  };

  return (
    <div className={`w-full h-full ${className || ""}`}>
      {/* White Card Wrapper */}
      <div className="bg-white rounded-xl shadow-md p-4">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm sm:text-base font-semibold text-indigo-900">Calendar</h2>
          <div className="flex gap-1">
            <select
              value={currentDate.getMonth()}
              onChange={(e) =>
                setCurrentDate(new Date(currentDate.getFullYear(), Number(e.target.value), 1))
              }
              className="border border-gray-300 rounded px-1 text-xs sm:text-sm focus:outline-none"
            >
              {months.map((m, i) => <option key={m} value={i}>{m}</option>)}
            </select>
            <select
              value={currentDate.getFullYear()}
              onChange={(e) =>
                setCurrentDate(new Date(Number(e.target.value), currentDate.getMonth(), 1))
              }
              className="border border-gray-300 rounded px-1 text-xs sm:text-sm focus:outline-none"
            >
              {years.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
        </div>

        {renderDays()}
        <div className="flex-1">{renderCells()}</div>
      </div>
    </div>
  );
};

export default Calendar117;
