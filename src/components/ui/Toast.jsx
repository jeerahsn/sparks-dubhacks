import React from "react";
import "./Toast.css";

export default function Toast({ message, type }) {
  return (
    <div className={`toast ${type}`}>
      <p>{message}</p>
    </div>
  );
}
