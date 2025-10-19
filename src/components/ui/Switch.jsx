import React from "react";

export function Switch({ checked, onChange }) {
  return (
    <label style={{ display: "inline-block", cursor: "pointer" }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange && onChange(e.target.checked)}
        style={{ display: "none" }}
      />
      <span
        style={{
          width: 40,
          height: 22,
          display: "inline-block",
          background: checked ? "#A24A17" : "#ccc",
          borderRadius: 20,
          position: "relative",
          transition: "0.3s",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 2,
            left: checked ? 20 : 2,
            width: 18,
            height: 18,
            background: "#fff",
            borderRadius: "50%",
            transition: "0.3s",
          }}
        />
      </span>
    </label>
  );
}
