import React, { useState } from "react";

export default function Table({ TableHeads, TableRows }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Calculate pagination
  const totalPages = Math.ceil(TableRows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = TableRows.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  return (
    <>
      <table className="w-full my-6 border-collapse">
        {/* ==== TABLE HEADER ==== */}
        <thead>
          <tr className="bg-[#D9DFFF]">
            {TableHeads.map((head, idx) => (
              <th
                key={idx}
                className={`text-center font-medium text-[#0C0C0D] py-[22px] border border-[#F0F0F2]
                ${idx === 0 ? "rounded-tl-2xl" : ""}
                ${idx === TableHeads.length - 1 ? "rounded-tr-2xl" : ""}`}
                style={{ width: head.width }}
              >
                {head.Title}
              </th>
            ))}
          </tr>
        </thead>

        {/* ==== TABLE BODY ==== */}
        <tbody className="bg-white">
          {currentItems.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {TableHeads.map((head, headIdx) => (
                <td
                  key={headIdx}
                  className="border border-[#F0F0F2] py-[22px] text-center px-3 text-black"
                >
                  {/* If render function exists, use it — otherwise show plain data */}
                  {head.render ? head.render(row, rowIdx) : row[head.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 bg-white px-6 py-4 rounded-lg">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#6D6E73]">Show</span>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border border-[#CED2E5] rounded px-3 py-1 text-sm text-black focus:outline-none focus:border-[#5069E5]"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <span className="text-sm text-[#6D6E73]">entries</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm text-[#6D6E73] hover:bg-[#F8F9FA] rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 text-sm rounded ${currentPage === index + 1
                  ? "bg-[#5069E5] text-white"
                  : "text-[#6D6E73] hover:bg-[#F8F9FA]"
                }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm text-[#6D6E73] hover:bg-[#F8F9FA] rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>

        <div className="text-sm text-[#6D6E73]">
          Showing {startIndex + 1} to {Math.min(endIndex, TableRows.length)} of {TableRows.length} entries
        </div>
      </div>
    </>
  );
}
