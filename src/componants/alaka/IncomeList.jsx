import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

function IncomeList() {
  const navigate = useNavigate();

  const rows = [
    { id: 1, type: "Franchisee Registration", company: "100 %", franchisee: "0 %", dealer: "0 %", sp: "0 %" },
    { id: 2, type: "Service Registration", company: "100 %", franchisee: "0 %", dealer: "0 %", sp: "0 %" },
    { id: 3, type: "Banner Ads", company: "100 %", franchisee: "0 %", dealer: "0 %", sp: "0 %" },
    { id: 4, type: "Card Ads", company: "100 %", franchisee: "0 %", dealer: "0 %", sp: "0 %" },
    { id: 5, type: "Popup Ads", company: "100 %", franchisee: "0 %", dealer: "0 %", sp: "0 %" },
    { id: 6, type: "Boost Profile", company: "100 %", franchisee: "0 %", dealer: "0 %", sp: "0 %" },
    { id: 7, type: "Service Commission", company: "4 %", franchisee: "4 %", dealer: "2 %", sp: "90 %" },
    { id: 8, type: "Lead Commission", company: "100 %", franchisee: "0 %", dealer: "0 %", sp: "0 %" },
  ];

  /* ---------------- DOWNLOAD REPORT ---------------- */
  const handleDownloadReport = () => {
    const headers = [
      "Sl.No",
      "Income Type",
      "Company",
      "Franchisee",
      "Dealer",
      "Service Provider",
    ];

    const csvData = [
      headers.join(","),
      ...rows.map((row) =>
        [
          row.id,
          row.type,
          row.company,
          row.franchisee,
          row.dealer,
          row.sp,
        ].join(",")
      ),
    ];

    const blob = new Blob([csvData.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "income-report.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  /* ROW CLICK → BACK TO PAYOUT PAGE */
  const handleRowClick = () => {
    navigate(-1);
  };

  /* ---------------- EDIT ---------------- */
  const handleEdit = (row) => {
    alert(
      `Edit clicked for:\n\nIncome Type: ${row.type}\nCompany: ${row.company}\nFranchisee: ${row.franchisee}\nDealer: ${row.dealer}\nService Provider: ${row.sp}`
    );
  };

  return (
    <div className="bg-[#F3F4FF] min-h-screen flex justify-center p-6">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-sm px-6 py-4">

        {/* TOP ACTION BAR */}
        <div className="flex justify-end mb-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center bg-[#F3F4FF] px-4 py-3 rounded-xl w-full sm:w-auto">

            <div className="flex items-center gap-2 text-sm w-full sm:w-auto">
              <span>Month:</span>
              <select className="bg-white border border-gray-300 rounded-md px-2 py-1 text-xs outline-none">
                <option>January</option>
                <option>February</option>
                <option selected>March</option>
              </select>
            </div>

            <div className="flex items-center gap-2 text-sm w-full sm:w-auto">
              <span>Year:</span>
              <select className="bg-white border border-gray-300 rounded-md px-2 py-1 text-xs outline-none">
                <option>2024</option>
                <option>2025</option>
                <option selected>2026</option>
              </select>
            </div>

            <button
              onClick={handleDownloadReport}
              className="flex items-center justify-center gap-2 bg-[#5B5FEF] text-white px-4 py-2 rounded-lg text-xs w-full sm:w-auto cursor-pointer"
            >
              <ArrowDownTrayIcon className="w-4 h-4" />
              Download Report
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-225">
            <thead>
              <tr className="text-sm font-medium text-gray-700 border-b border-gray-300">
                <th className="py-3 text-left">Sl.No</th>
                <th className="py-3 text-left">Income Type</th>
                <th className="py-3 text-left">Split Type</th>
                <th className="py-3 text-center">Company</th>
                <th className="py-3 text-center">Franchisee</th>
                <th className="py-3 text-center">Dealer</th>
                <th className="py-3 text-center">Service Provider</th>
                <th className="py-3"></th>
              </tr>
            </thead>

            <tbody className="text-sm text-gray-800">
              {rows.map((row) => (
                <tr
                  key={row.id}
                  onClick={handleRowClick}
                  className="hover:bg-gray-50 cursor-pointer"
                >
                  <td className="py-4">{row.id}</td>

                  <td className="py-4">
                    <div className="flex items-center gap-1">
                      {row.type}
                      <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                    </div>
                  </td>

                  <td className="py-4">
                    <div className="flex items-center gap-1">
                      Percentage
                      <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                    </div>
                  </td>

                  <td className="py-4 text-center">{row.company}</td>
                  <td className="py-4 text-center">{row.franchisee}</td>
                  <td className="py-4 text-center">{row.dealer}</td>
                  <td className="py-4 text-center">{row.sp}</td>

                  <td className="py-4 text-right">
                    <PencilSquareIcon
                      onClick={(e) => {
                        e.stopPropagation(); // ✅ keeps row click safe
                        handleEdit(row);
                      }}
                      className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default IncomeList;
