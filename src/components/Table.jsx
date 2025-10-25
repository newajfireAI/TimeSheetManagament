import React from "react";

export default function Table({ TableHeads, TableRows }) {
  return (
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
        {TableRows.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {TableHeads.map((head, headIdx) => (
              <td
                key={headIdx}
                className="border border-[#F0F0F2] py-[22px] text-center px-3"
              >
                {/* If render function exists, use it — otherwise show plain data */}
                {head.render ? head.render(row, rowIdx) : row[head.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
