import React, { useState } from "react";

export function Sidebar({ title = "Menu", items = [] }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      style={{
        width: collapsed ? "70px" : "220px",
        background: "#FFF7EE",
        borderRight: "1px solid #ddd",
        height: "100vh",
        transition: "width 0.2s",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        style={{
          alignSelf: "flex-end",
          margin: 10,
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontSize: 20,
        }}
      >
        ☰
      </button>
      <div style={{ padding: "10px 16px", fontWeight: 600, color: "#A24A17" }}>
        {!collapsed && title}
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              padding: "10px 16px",
              cursor: "pointer",
              color: "#333",
            }}
          >
            {!collapsed ? item : "•"}
          </li>
        ))}
      </ul>
    </div>
  );
}
