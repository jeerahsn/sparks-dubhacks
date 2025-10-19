import React from "react";

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav style={{ display: "flex", gap: 8, justifyContent: "center", margin: 20 }}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          style={{
            fontWeight: num === currentPage ? "bold" : "normal",
            border: "1px solid #ccc",
            borderRadius: 4,
            padding: "4px 8px",
          }}
        >
          {num}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </nav>
  );
}

