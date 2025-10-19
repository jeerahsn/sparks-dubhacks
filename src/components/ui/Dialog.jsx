import React, { useState } from "react";

export function Dialog({ triggerText, title, description, children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          background: "#A24A17",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "10px 14px",
          cursor: "pointer",
        }}
      >
        {triggerText}
      </button>

      {open && (
        <div style={overlay}>
          <div style={dialog}>
            <h3>{title}</h3>
            {description && <p>{description}</p>}
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
                cursor: "pointer",
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
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const dialog = {
  background: "#fff",
  padding: 20,
  borderRadius: 10,
  width: "90%",
  maxWidth: 400,
};
