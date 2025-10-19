import React from "react";

export function Slider({ value = 50, onChange }) {
  return (
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={e => onChange && onChange(Number(e.target.value))}
      style={{
        width: "100%",
        accentColor: "#A24A17",
        cursor: "pointer",
      }}
    />
  );
}
