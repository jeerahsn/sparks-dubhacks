import React, { useState, useEffect } from "react";

export function Toaster({ message, show }) {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        background: "#A24A17",
        color: "#fff",
        padding: "10px 16px",
        borderRadius: 8,
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
      }}
    >
      {message}
    </div>
  );
}
