import React, { useState } from "react";

export function RadioGroup({ options, name, onChange }) {
  const [selected, setSelected] = useState("");

  const handleSelect = (value) => {
    setSelected(value);
    onChange && onChange(value);
  };

  return (
    <div style={{ display: "grid", gap: "8px" }}>
      {options.map((opt) => (
        <label key={opt.value} style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <input
            type="radio"
            name={name}
            checked={selected === opt.value}
            onChange={() => handleSelect(opt.value)}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}
