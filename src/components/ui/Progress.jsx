import React from "react";

export function Progress({ value = 0 }) {
  return (
    <div
      style={{
        height: 10,
        width: "100%",
        backgroundColor: "#eee",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: "100%",
          backgroundColor: "#A24A17",
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
}
