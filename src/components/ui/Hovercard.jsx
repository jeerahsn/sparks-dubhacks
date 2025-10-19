import React, { useState } from "react";

export function HoverCard({ trigger, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ display: "inline-block", position: "relative" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {trigger}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 10,
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            width: 200,
            zIndex: 10,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}
