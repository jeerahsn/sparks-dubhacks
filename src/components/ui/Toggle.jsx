import React, { useState } from "react";
import "./Toggle.css";

export default function Toggle({ label = "Toggle", onToggle }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    const newState = !active;
    setActive(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <button className={`toggle ${active ? "active" : ""}`} onClick={handleClick}>
      {label}
    </button>
  );
}
