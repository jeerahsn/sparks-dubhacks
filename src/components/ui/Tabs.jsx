import React, { useState } from "react";

export function Tabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              background: i === active ? "#A24A17" : "#eee",
              color: i === active ? "#fff" : "#333",
              border: "none",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  );
}
