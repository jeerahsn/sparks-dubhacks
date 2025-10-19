import React, { useState, useEffect } from "react";
import { Home, Sparkles, User, ArrowLeft, Shirt, ShoppingBag, Footprints, Gem } from "lucide-react";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState("splash");
  const [selectedValues, setSelectedValues] = useState([]);
  const [customValue, setCustomValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [showSparkAnimation, setShowSparkAnimation] = useState(false);

  // Mock data
  const businesses = [
    {
      name: "Vintage Threads Co.",
      description:
        "An ethical and sustainable business offering unique products designed to align with your values. They prioritize eco-friendly practices and support for handmade items.",
      tags: ["Eco-friendly", "Handmade", "Local"],
    },
    {
      name: "Artisan Style Studio",
      description:
        "A charming local boutique featuring handcrafted clothing made by independent artisans. Each piece tells a story of creativity and sustainability.",
      tags: ["Eco-friendly", "Handmade", "BIPOC Owned"],
    },
    {
      name: "Green Wardrobe",
      description:
        "Your destination for affordable, sustainable fashion. We believe style shouldn't cost the earth, offering eco-conscious pieces at accessible prices.",
      tags: ["Eco-friendly", "Affordable", "Local"],
    },
  ];

  // Splash → Quiz transition
  useEffect(() => {
    if (currentScreen === "splash") {
      const timer = setTimeout(() => setCurrentScreen("quiz-values"), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  // Clothing loading animation
  useEffect(() => {
    if (currentScreen === "clothing-loading") {
      const timer = setTimeout(() => setCurrentScreen("swipe"), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const valueOptions = [
    { id: "ethical", label: "Ethically Sourced", icon: "🌱" },
    { id: "handmade", label: "Handmade", icon: "✍️" },
    { id: "bipoc", label: "BIPOC Owned", icon: "👥" },
    { id: "local", label: "Local", icon: "🏪" },
    { id: "eco", label: "Eco-friendly", icon: "♻️" },
    { id: "affordable", label: "Affordable", icon: "💰" },
  ];

  const toggleValue = (id) => {
    setSelectedValues((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);

    const business = businesses[currentCardIndex];

    if (direction === "right") {
      if (!favorites.find((f) => f.name === business.name)) {
        setFavorites((prev) => [...prev, business]);
      }
      setShowSparkAnimation(true);
      setTimeout(() => {
        setShowSparkAnimation(false);
        setSwipeDirection(null);
        setCurrentCardIndex((prev) => (prev + 1) % businesses.length);
      }, 2000);
    } else {
      setTimeout(() => {
        setSwipeDirection(null);
        setCurrentCardIndex((prev) => (prev + 1) % businesses.length);
      }, 300);
    }
  };

  const BottomNav = () => (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(255,243,216,0.9)",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <button onClick={() => setCurrentScreen("dashboard")}>
        <Home color={currentScreen === "dashboard" ? "#A24A17" : "#999"} />
      </button>
      <button onClick={() => setCurrentScreen("favorites")}>
        <Sparkles color={currentScreen === "favorites" ? "#A24A17" : "#999"} />
      </button>
      <button onClick={() => setCurrentScreen("profile")}>
        <User color={currentScreen === "profile" ? "#A24A17" : "#999"} />
      </button>
    </div>
  );

  // --- SCREENS ---

  if (currentScreen === "splash") {
    return (
      <div style={styles.centerScreen}>
        <Sparkles size={80} color="#A24A17" />
        <h1 style={styles.logo}>sprk</h1>
      </div>
    );
  }

  if (currentScreen === "quiz-values") {
    return (
      <div style={styles.page}>
        <h2 style={styles.heading}>What business values matter most to you?</h2>
        <div style={styles.grid}>
          {valueOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => toggleValue(option.id)}
              style={{
                ...styles.option,
                background: selectedValues.includes(option.id)
                  ? "#FFF3D8"
                  : "#FFF",
                border: selectedValues.includes(option.id)
                  ? "2px solid #A24A17"
                  : "2px solid #eee",
              }}
            >
              <div style={{ fontSize: 24 }}>{option.icon}</div>
              <div>{option.label}</div>
            </button>
          ))}
        </div>
        <button style={styles.nextBtn} onClick={() => setCurrentScreen("quiz-text")}>
          Next
        </button>
        <BottomNav />
      </div>
    );
  }

  if (currentScreen === "quiz-text") {
    return (
      <div style={styles.page}>
        <button onClick={() => setCurrentScreen("quiz-values")}>
          <ArrowLeft />
        </button>
        <h2 style={styles.heading}>Any other values not listed?</h2>
        <textarea
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
          placeholder="Insert text..."
          style={styles.textarea}
        />
        <button style={styles.nextBtn} onClick={() => setCurrentScreen("dashboard")}>
          Done
        </button>
        <BottomNav />
      </div>
    );
  }

  if (currentScreen === "dashboard") {
    return (
      <div style={styles.page}>
        <h2 style={styles.heading}>Welcome, Zahra!</h2>
        <div style={{ display: "grid", gap: "12px" }}>
          <button style={styles.actionBtn} onClick={() => setCurrentScreen("clothing-loading")}>
            <Shirt /> Clothing
          </button>
          <button style={styles.disabledBtn}>
            <Gem /> Jewelry
          </button>
          <button style={styles.disabledBtn}>
            <ShoppingBag /> Bags
          </button>
          <button style={styles.disabledBtn}>
            <Footprints /> Footwear
          </button>
        </div>
        <BottomNav />
      </div>
    );
  }

  if (currentScreen === "clothing-loading") {
    return (
      <div style={styles.centerScreen}>
        <Sparkles size={48} color="#A24A17" />
        <h3>Loading clothing matches...</h3>
      </div>
    );
  }

  if (currentScreen === "favorites") {
    return (
      <div style={styles.page}>
        <h2 style={styles.heading}>Sparks</h2>
        {favorites.length === 0 ? (
          <p>No sparks yet! Start swiping to find businesses you love.</p>
        ) : (
          favorites.map((f, i) => (
            <div key={i} style={styles.card}>
              <h3>{f.name}</h3>
              <p>{f.description}</p>
            </div>
          ))
        )}
        <BottomNav />
      </div>
    );
  }

  if (currentScreen === "profile") {
    return (
      <div style={styles.centerScreen}>
        <User size={60} color="#A24A17" />
        <h2>Profile (Coming Soon)</h2>
      </div>
    );
  }

  return null;
};

const styles = {
  page: { padding: 20, fontFamily: "sans-serif" },
  centerScreen: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
  },
  heading: { fontSize: 22, marginBottom: 20, textAlign: "center" },
  logo: { fontSize: 60, fontWeight: "bold", color: "#A24A17" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },
  option: { padding: 20, borderRadius: 12, cursor: "pointer" },
  nextBtn: {
    marginTop: 16,
    background: "#A24A17",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "10px 20px",
    cursor: "pointer",
  },
  actionBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: 16,
    background: "#A24A17",
    color: "#fff",
    borderRadius: 12,
    justifyContent: "center",
    cursor: "pointer",
  },
  disabledBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: 16,
    background: "#ddd",
    color: "#666",
    borderRadius: 12,
    justifyContent: "center",
    cursor: "not-allowed",
  },
  textarea: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    border: "1px solid #ccc",
    padding: 12,
  },
  card: {
    background: "#FFF3D8",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
};

export default Index;
