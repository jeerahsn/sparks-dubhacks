import React, { useState } from "react";

export function InputOtp({ length = 4, onComplete }) {
  const [values, setValues] = useState(Array(length).fill(""));

  const handleChange = (val, idx) => {
    const updated = [...values];
    updated[idx] = val.slice(-1);
    setValues(updated);
    if (val && idx < length - 1) {
      document.getElementById(`otp-${idx + 1}`).focus();
    }
    if (updated.every(v => v)) onComplete(updated.join(""));
  };

  return (
    <div style={{ display: "flex", gap: 8 }}>
      {values.map((v, i) => (
        <input
          key={i}
          id={`otp-${i}`}
          value={v}
          onChange={e => handleChange(e.target.value, i)}
          style={{
            width: 40,
            height: 40,
            textAlign: "center",
            fontSize: 18,
            border: "1px solid #ccc",
            borderRadius: 8,
          }}
          maxLength={1}
        />
      ))}
    </div>
  );
}
