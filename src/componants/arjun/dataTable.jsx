import React, { useState, useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";

// Added rowIdKey prop with a default of "id"
const DataTable = ({ columns, data, currentPage, onPageChange, onDeleteSelected, rowIdKey = "id" }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const itemsPerPage = 10;
  const totalData = data.length;
  const totalPages = Math.ceil(totalData / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  // Helper function to get the correct ID from any item
  const getItemId = (item) => item[rowIdKey] || item.id || item._id;

  useEffect(() => {
    setSelectedIds([]);
  }, [currentPage]);

  const handleSelectAll = () => {
    if (selectedIds.length === currentData.length && currentData.length > 0) {
      setSelectedIds([]);
    } else {
      // Use the helper to get IDs
      setSelectedIds(currentData.map((item) => getItemId(item)));
    }
  };

  const handleSelectRow = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        if (!pages.includes("...")) pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div className="bg-white rounded-xl w-full overflow-hidden shadow-sm">
      <div className="p-4 flex justify-end border-b border-gray-100 bg-gray-50/50">
        <button
          onClick={() => {
            if (selectedIds.length === 0) {
              alert("No rows selected");
              return;
            }
            if (window.confirm(`Delete ${selectedIds.length} selected item(s)?`)) {
              onDeleteSelected(selectedIds);
              setSelectedIds([]);
            }
          }}
          className="p-2 rounded-full hover:bg-blue-100 transition-colors"
          title={`Delete selected (${selectedIds.length})`}
        >
          <FiTrash2 size={20} className="text-blue-600" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full w-full text-sm">
          <thead className="text-indigo-900 bg-white">
            <tr className="border-b border-gray-200">
              <th className="p-4 w-12">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={currentData.length > 0 && selectedIds.length === currentData.length}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="p-4 text-left font-bold">#</th>
              {columns.map((col, index) => (
                <th key={index} className="p-4 text-left font-bold">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody>
            {currentData.map((item, rowIndex) => {
              // Use the dynamic helper here
              const itemId = getItemId(item); 
              return (
                <tr 
                  key={itemId || rowIndex} 
                  className={`border-b border-gray-200 last:border-none hover:bg-indigo-50/30 transition-colors ${
                    selectedIds.includes(itemId) ? "bg-indigo-50/50" : ""
                  }`}
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      checked={selectedIds.includes(itemId)}
                      onChange={() => handleSelectRow(itemId)}
                    />
                  </td>
                  <td className="p-4 text-indigo-700 font-medium">
                    {startIndex + rowIndex + 1}
                  </td>
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className="p-4 text-gray-700">
                      {col.render ? col.render(item) : item[col.key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 text-sm">
        <p className="text-gray-500">
          Showing <span className="font-medium text-gray-700">{startIndex + 1}</span>–
          <span className="font-medium text-gray-700">{Math.min(startIndex + itemsPerPage, totalData)}</span> from{" "}
          <span className="font-medium text-gray-700">{totalData}</span>
        </p>

        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="w-8 h-8 flex items-center justify-center disabled:opacity-30 group"
          >
            <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-r-[10px] border-t-transparent border-b-transparent border-r-gray-400 group-hover:border-r-indigo-600" />
          </button>

          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              disabled={page === "..."}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 rounded-full border text-xs font-medium ${
                currentPage === page 
                  ? "bg-indigo-600 text-white border-indigo-600" 
                  : "text-gray-600 border-gray-200 hover:bg-indigo-50"
              } ${page === "..." ? "border-none cursor-default" : ""}`}
            >
              {page}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => onPageChange(currentPage + 1)}
            className="w-8 h-8 flex items-center justify-center disabled:opacity-30 group"
          >
            <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-gray-400 group-hover:border-l-indigo-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;