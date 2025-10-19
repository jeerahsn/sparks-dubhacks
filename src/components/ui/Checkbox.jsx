import React from "react";

export function Checkbox({ checked, onChange, label }) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}
