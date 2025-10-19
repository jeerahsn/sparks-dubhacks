import React from "react";

export function Chart({ title }) {
  return (
    <div
      style={{
        border: "1px solid #EEE",
        borderRadius: 10,
        padding: 16,
        background: "#FFF",
        textAlign: "center",
      }}
    >
      <h3 style={{ color: "#A24A17" }}>{title || "Chart Placeholder"}</h3>
      <p style={{ opacity: 0.6 }}>Add your chart here</p>
    </div>
  );
}
