import React from "react";

export function Breadcrumb({ items }) {
  return (
    <nav aria-label="breadcrumb">
      <ol style={{ display: "flex", listStyle: "none", gap: "8px", padding: 0 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {i > 0 && <span style={{ opacity: 0.5 }}>{">"}</span>}
            {item.href ? (
              <a href={item.href} style={{ color: "#A24A17", textDecoration: "none" }}>
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
