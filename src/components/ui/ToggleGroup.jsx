import React, { useState } from "react";
import "./ToggleGroup.css";

export default function ToggleGroup({ options = [], onChange }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="toggle-group">
      {options.map((opt) => (
        <button
          key={opt}
          className={`toggle-item ${selected === opt ? "active" : ""}`}
          onClick={() => handleSelect(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
