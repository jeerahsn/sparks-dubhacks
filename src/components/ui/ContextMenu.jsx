import React, { useState } from "react";

export function ContextMenu({ trigger, items }) {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleContextMenu = e => {
    e.preventDefault();
    setCoords({ x: e.pageX, y: e.pageY });
    setVisible(true);
  };

  return (
    <div onContextMenu={handleContextMenu} style={{ display: "inline-block" }}>
      {trigger}
      {visible && (
        <ul
          style={{
            position: "absolute",
            top: coords.y,
            left: coords.x,
            listStyle: "none",
            padding: 8,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: 8,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            zIndex: 100,
          }}
          onMouseLeave={() => setVisible(false)}
        >
          {items.map((item, i) => (
            <li
              key={i}
              onClick={item.onClick}
              style={{ padding: "6px 10px", cursor: "pointer" }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
