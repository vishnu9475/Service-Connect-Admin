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
    <div className="grid grid-cols-7 text-center text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">
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
            key={day.toString()}
            onClick={() => onDateClick(cloneDay)}
            className={`aspect-square flex items-center justify-center text-xs sm:text-sm transition-all rounded-xl hover:bg-gray-50
              ${
                !isSameMonth(day, monthStart)
                  ? "text-gray-200"
                  : isSunday
                  ? "text-red-400"
                  : "text-[#2D3E75]"
              }
            `}
          >
            <span
              className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full transition-colors
                ${isSameDay(day, selectedDate) ? "bg-indigo-600 text-white shadow-md" : ""}
              `}
            >
              {format(day, "d")}
            </span>
          </button>
        );
        day = addDays(day, 1);
      }
      rows.push(<div key={day.toString()} className="grid grid-cols-7">{days}</div>);
    }

    return <div className="flex flex-col flex-1">{rows}</div>;
  };

  return (
    <div className={`w-full h-full bg-white rounded-[2rem] p-6 shadow-sm border border-gray-50 flex flex-col ${className || ""}`}>
      {/* HEADER - Flexible for mobile */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
        <h2 className="text-xl font-bold text-[#2D3E75]">Calendar</h2>
        <div className="flex gap-2">
          <select
            value={currentDate.getMonth()}
            onChange={(e) =>
              setCurrentDate(new Date(currentDate.getFullYear(), Number(e.target.value), 1))
            }
            className="bg-gray-50 border-none rounded-lg px-2 py-1 text-xs font-semibold text-[#2D3E75] focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            {months.map((m, i) => <option key={m} value={i}>{m.substring(0, 3)}</option>)}
          </select>
          <select
            value={currentDate.getFullYear()}
            onChange={(e) =>
              setCurrentDate(new Date(Number(e.target.value), currentDate.getMonth(), 1))
            }
            className="bg-gray-50 border-none rounded-lg px-2 py-1 text-xs font-semibold text-[#2D3E75] focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            {years.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
      </div>

      {renderDays()}
      <div className="flex-1 overflow-hidden">{renderCells()}</div>
    </div>
  );
};

export default Calendar117;