import React, { useState } from "react";

export function Command({ placeholder = "Search...", items = [] }) {
  const [query, setQuery] = useState("");

  const filtered = items.filter(i =>
    i.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 10 }}>
      <input
        placeholder={placeholder}
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          border: "none",
          outline: "none",
          fontSize: 14,
        }}
      />
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {filtered.map((i, idx) => (
          <li
            key={idx}
            onClick={i.onClick}
            style={{
              padding: "6px 8px",
              cursor: "pointer",
              borderRadius: 4,
            }}
          >
            {i.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
