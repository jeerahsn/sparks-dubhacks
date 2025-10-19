import React, { useRef } from "react";

export function Carousel({ children }) {
  const ref = useRef(null);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        ref={ref}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: 16,
        }}
      >
        {children}
      </div>
    </div>
  );
}
