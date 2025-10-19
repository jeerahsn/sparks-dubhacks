import React from "react";

export function Label({ children, htmlFor, required = false }) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: "block",
        marginBottom: 6,
        fontWeight: 600,
        color: "#2E2E2E",
      }}
    >
      {children}
      {required && <span style={{ color: "#A24A17", marginLeft: 4 }}>*</span>}
    </label>
  );
}
