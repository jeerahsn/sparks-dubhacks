import React from "react";

export function Calendar({ label, value, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {label && <label style={{ fontWeight: 600 }}>{label}</label>}
      <input
        type="date"
        value={value}
        onChange={onChange}
        style={{
          border: "1px solid #A24A17",
          borderRadius: 6,
          padding: "6px 8px",
        }}
      />
    </div>
  );
}
