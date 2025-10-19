import React from "react";

export function Form({ onSubmit, children }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit && onSubmit(e);
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {children}
    </form>
  );
}
