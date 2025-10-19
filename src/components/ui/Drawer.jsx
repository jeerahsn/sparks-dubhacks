import React, { useState } from "react";

export function Drawer({ triggerText, title, children }) {
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
        <div style={overlay}>
          <div style={drawer}>
            <div style={{ textAlign: "center", marginBottom: 12 }}>
              <h3>{title}</h3>
            </div>
            {children}
            <button
              onClick={() => setOpen(false)}
              style={{
                marginTop: 10,
                background: "none",
                border: "1px solid #A24A17",
                padding: "6px 10px",
                borderRadius: 6,
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

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.3)",
};

const drawer = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  background: "#fff",
  padding: 20,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  boxShadow: "0 -2px 10px rgba(0,0,0,0.15)",
};

