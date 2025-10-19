import React, { useState } from "react";

export function Sheet({ triggerText = "Open", title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          background: "#A24A17",
          color: "#fff",
          padding: "8px 14px",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        {triggerText}
      </button>
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{
              width: 300,
              background: "#fff",
              padding: 20,
              borderRadius: "10px 0 0 10px",
              height: "100vh",
            }}
            onClick={e => e.stopPropagation()}
          >
            <h3>{title}</h3>
            {children}
            <button
              onClick={() => setOpen(false)}
              style={{
                marginTop: 20,
                border: "1px solid #A24A17",
                padding: "6px 10px",
                borderRadius: 6,
                background: "none",
                color: "#A24A17",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
