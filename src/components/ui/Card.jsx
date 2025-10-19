import React from "react";

export function Card({ children }) {
  return (
    <div
      style={{
        borderRadius: 12,
        border: "1px solid #EEE",
        background: "#FFF",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        padding: 16,
        marginBottom: 12,
      }}
    >
      {children}
    </div>
  );
}
