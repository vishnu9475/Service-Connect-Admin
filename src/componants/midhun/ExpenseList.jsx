import React from "react";
import { MdOutlineReceiptLong } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";

export default function ExpenseList() {
  const [selected, setSelected] = useState([]);

  const data = [
    { id: 1, date: "xx/xx/xxxx", invoiceNo: "4954545", desc: "Paid cash", dr: 0, cr: 4954545 },
    { id: 2, date: "xx/xx/xxxx", invoiceNo: "4943434", desc: "Paid cash", dr: 0, cr: 4943434 },
    { id: 3, date: "xx/xx/xxxx", invoiceNo: "443439", desc: "Paid", dr: 0, cr: 443439 },
    { id: 4, date: "xx/xx/xxxx", invoiceNo: "4434349", desc: "Description", dr: 4434349, cr: 0 },
  ];

  const toggleRow = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="mt-6 max-w-[950px] mx-auto">
      
      {/* RESPONSIVE WRAPPER — NO ALIGNMENT CHANGE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full min-w-[950px] text-[13px] table-auto whitespace-nowrap">

          {/* HEADER */}
          <thead className="border-b border-gray-300">
            <tr className="text-gray-600">
              <th className="px-4 py-3 text-center">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-3 text-left">Sl.No</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Invoice No</th>
              <th className="px-6 py-3 text-left">Description / Remarks</th>
              <th className="px-4 py-3 text-right">DR</th>
              <th className="px-4 py-3 text-right">CR</th>
              <th className="px-4 py-3 text-center">Invoice</th>
              <th className="px-4 py-3 text-center"></th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 text-center">
                  <input
                    type="checkbox"
                    checked={selected.includes(row.id)}
                    onChange={() => toggleRow(row.id)}
                  />
                </td>
                <td className="px-4 py-4">{index + 1}</td>
                <td className="px-4 py-4">{row.date}</td>
                <td className="px-4 py-4">{row.invoiceNo}</td>
                <td className="px-6 py-4">{row.desc}</td>
                <td className="px-4 py-4 text-right">{row.dr}</td>
                <td className="px-4 py-4 text-right">{row.cr}</td>

                <td className="px-4 py-4 text-center">
                  <button className="text-gray-600 hover:text-[#65558F]">
                    <MdOutlineReceiptLong size={16} />
                  </button>
                </td>

                <td className="px-4 py-4 text-center">
                  <button className="text-gray-600 hover:text-[#65558F]">
                    <FiEdit size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
