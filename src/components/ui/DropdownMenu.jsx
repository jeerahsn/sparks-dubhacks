import React, { useState } from "react";
import { ChevronRight, Check, Circle } from "lucide-react";
import "./DropdownMenu.css";

/**
 * Lightweight dropdown menu built with React only
 * (No Radix, No Tailwind dependencies)
 */

export default function DropdownMenu({ label = "Menu", options = [] }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-trigger" onClick={() => setOpen(!open)}>
        {label} <ChevronRight className="icon" />
      </button>

      {open && (
        <div className="dropdown-content">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className={`dropdown-item ${selected === opt ? "active" : ""}`}
              onClick={() => handleSelect(opt)}
            >
              {selected === opt ? <Check size={14} /> : <Circle size={10} />}
              <span>{opt}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
