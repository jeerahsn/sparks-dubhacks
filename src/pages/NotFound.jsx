import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error("404: Tried to access", location.pathname);
  }, [location.pathname]);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>404</h1>
        <p style={styles.subtitle}>Oops! Page not found</p>
        <a href="/" style={styles.link}>
          Return to Home
        </a>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f5f5f5",
  },
  card: { textAlign: "center" },
  title: { fontSize: 48, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 20, color: "#777", marginBottom: 20 },
  link: { color: "#007BFF", textDecoration: "underline" },
};
