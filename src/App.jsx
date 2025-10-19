import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import  Toaster  from "./components/ui/Toaster"; // your toast component
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      {/* Toasts (for notifications) */}
      <Toaster />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
