import React from "react";

export function Badge({ variant = "default", children }) {
  const styles = {
    default: {
      backgroundColor: "#FBC8A8",
      color: "#5A2E0C",
      border: "none",
    },
    secondary: {
      backgroundColor: "#EEE",
      color: "#333",
    },
    destructive: {
      backgroundColor: "#FFCCCC",
      color: "#A00",
    },
    outline: {
      backgroundColor: "transparent",
      border: "1px solid #A24A17",
      color: "#A24A17",
    },
  };

  return (
    <span
      style={{
        ...styles[variant],
        borderRadius: 20,
        padding: "4px 10px",
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  );
}
