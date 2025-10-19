import React from "react";

export function Skeleton({ width = "100%", height = "16px", style }) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: "#eee",
        borderRadius: "4px",
        animation: "pulse 1.5s infinite",
        ...style,
      }}
    />
  );
}
