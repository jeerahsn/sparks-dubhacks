import React from "react";

export function Textarea({ value, onChange, placeholder }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: "100%",
        minHeight: "80px",
        padding: "10px",
        borderRadius: 6,
        border: "1px solid #ccc",
        fontSize: 14,
      }}
    />
  );
}
