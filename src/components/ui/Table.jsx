import React from "react";

export function Table({ columns, data }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        border: "1px solid #ddd",
      }}
    >
      <thead style={{ background: "#FFF3D8" }}>
        <tr>
          {columns.map((col, i) => (
            <th
              key={i}
              style={{ padding: "8px", textAlign: "left", borderBottom: "1px solid #ccc" }}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
