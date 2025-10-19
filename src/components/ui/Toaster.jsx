import React from "react";
import Toast from "./Toast";

export default function Toaster({ toasts }) {
  return (
    <>
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} type={toast.type} />
      ))}
    </>
  );
}
