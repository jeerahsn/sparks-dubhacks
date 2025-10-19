import React from "react";

export function Input({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: 6,
        padding: "10px 12px",
        fontSize: 14,
        outlineColor: "#A24A17",
      }}
    />
  );
}
