import React from "react";
import { useState } from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import { FaCalendarMinus } from "react-icons/fa";

export default function AddExpenseForm() {
  const [form, setForm] = useState({
    invoiceNo: "",
    date: "",
    description: "",
    dr: "",
    cr: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const clearInvoice = () => {
    setForm({ ...form, invoiceNo: "" });
  };

  const handleAdd = () => {
    console.log("Expense Data:", form);
    alert("Expense Added (check console)");
  };

  const openCalendar = () => {
    const tempInput = document.createElement("input");
    tempInput.type = "date";

    tempInput.onchange = (e) => {
      const value = e.target.value;
      if (value) {
        const [y, m, d] = value.split("-");
        setForm((prev) => ({
          ...prev,
          date: `${d}/${m}/${y}`,
        }));
      }
    };

    tempInput.showPicker();
  };

  return (
    <div className="  flex justify-center px-4 py-10">
      <div className="w-full max-w-[1100px] bg-white rounded-2xl shadow-md px-6 py-6">

        <h2 className="text-[22px] font-inter text-[#1F2937] mb-6">
          Add Expense
        </h2>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 items-end">

          {/* Invoice No */}
          <div>
            <label className="text-[12px] text-gray-500">Invoice No</label>
            <div className="relative mt-1">
              <input
                type="text"
                name="invoiceNo"
                value={form.invoiceNo}
                onChange={handleChange}
                className="w-full h-[38px] border rounded-lg px-3 pr-14 outline-none text-[#438883]"
              />
              <button
                onClick={clearInvoice}
                className="absolute right-3 top-[9px] text-[12px] text-teal-600"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="text-[12px] text-gray-500">Date</label>
            <div className="relative mt-1">
              <input
                type="text"
                name="date"
                value={form.date}
                readOnly
                className="w-full h-[38px] border rounded-lg px-3 pr-10 outline-none text-gray-700"
              />
              <FaCalendarMinus
                className="absolute right-3 top-[11px] text-gray-400 cursor-pointer"
                onClick={openCalendar}
              />
            </div>
          </div>

          {/* Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <label className="text-[12px] text-gray-500">
              Description Remarks
            </label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="mt-1 w-full h-[38px] border rounded-lg px-3 outline-none"
            />
          </div>

          {/* DR */}
          <div>
            <label className="text-[12px] text-gray-500">DR</label>
            <input
              type="number"
              name="dr"
              value={form.dr}
              onChange={handleChange}
              className="mt-1 w-full h-[38px] border rounded-lg px-3 outline-none"
            />
          </div>

          {/* CR */}
          <div>
            <label className="text-[12px] text-gray-500">CR</label>
            <input
              type="number"
              name="cr"
              value={form.cr}
              onChange={handleChange}
              className="mt-1 w-full h-[38px] border rounded-lg px-3 outline-none"
            />
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col sm:flex-row justify-end items-start sm:items-end gap-6 mt-8">

          <div className="flex flex-col">
            <label className="text-[12px] text-gray-500 mb-1">
              Invoice
            </label>
            <div className="flex items-center gap-2 border border-dashed border-gray-300 rounded-lg px-6 py-2 cursor-pointer">
              <MdOutlineAddCircle className="text-[18px] text-gray-500" />
              <span className="text-[13px] text-gray-500">
                Add Invoice
              </span>
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="bg-[#65558F] text-white px-10 py-2 rounded-full text-sm"
          >
            Add
          </button>
        </div>

      </div>
    </div>
  );
}
