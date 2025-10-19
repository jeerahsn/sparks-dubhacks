import React, { useState } from "react";

export function Popover({ triggerText, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "#A24A17",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "8px 12px",
        }}
      >
        {triggerText}
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            zIndex: 10,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: 10,
            width: 200,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}
