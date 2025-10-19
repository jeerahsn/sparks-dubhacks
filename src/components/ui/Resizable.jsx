import React from "react";

export function ResizablePanelGroup({ direction = "horizontal", children }) {
  return (
    <div
      style={{
        display: direction === "vertical" ? "flex" : "block",
        flexDirection: direction === "vertical" ? "column" : "row",
        height: "100%",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}

export function ResizablePanel({ children, flex = 1 }) {
  return (
    <div style={{ flex, border: "1px solid #eee", padding: 10 }}>{children}</div>
  );
}

export function ResizableHandle() {
  return (
    <div
      style={{
        width: "4px",
        cursor: "col-resize",
        backgroundColor: "#ccc",
      }}
    />
  );
}

