import React from "react";

export function NavigationMenu({ items }) {
  return (
    <nav style={{ background: "#FFF7EE", padding: 10, borderRadius: 8 }}>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "center",
          gap: 20,
          margin: 0,
          padding: 0,
        }}
      >
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} style={{ color: "#A24A17", textDecoration: "none", fontWeight: 500 }}>
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
