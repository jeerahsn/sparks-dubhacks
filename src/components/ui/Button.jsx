import React from "react";

export function Button({ children, onClick, variant = "default", size = "md" }) {
  const styles = {
    default: { backgroundColor: "#A24A17", color: "#FFF" },
    outline: { border: "1px solid #A24A17", background: "transparent", color: "#A24A17" },
    ghost: { background: "none", color: "#A24A17" },
  };

  const sizes = {
    sm: { padding: "6px 12px", fontSize: 12 },
    md: { padding: "10px 16px", fontSize: 14 },
    lg: { padding: "14px 22px", fontSize: 16 },
  };

  return (
    <button
      onClick={onClick}
      style={{
        borderRadius: 6,
        fontWeight: 500,
        cursor: "pointer",
        border: "none",
        ...styles[variant],
        ...sizes[size],
      }}
    >
      {children}
    </button>
  );
}
