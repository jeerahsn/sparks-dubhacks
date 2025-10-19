import React from "react";

export function Menubar({ items }) {
  return (
    <div
      style={{
        display: "flex",
        background: "#FFF7EE",
        padding: "6px 12px",
        borderRadius: 8,
        gap: 12,
      }}
    >
      {items.map((i) => (
        <button
          key={i.label}
          onClick={i.onClick}
          style={{
            background: "none",
            border: "none",
            color: "#A24A17",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {i.label}
        </button>
      ))}
    </div>
  );
}
