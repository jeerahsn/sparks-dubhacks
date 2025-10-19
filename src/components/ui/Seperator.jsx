import React from "react";

export function Separator({ vertical = false }) {
  return (
    <div
      style={{
        width: vertical ? "1px" : "100%",
        height: vertical ? "100%" : "1px",
        background: "#ddd",
        margin: "10px 0",
      }}
    />
  );
}
