import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const VALUES = [
  { id: "ethical", label: "Ethically Sourced" },
  { id: "handmade", label: "Handmade" },
  { id: "bipoc", label: "BIPOC Owned" },
  { id: "local", label: "Local" },
  { id: "eco", label: "Eco-friendly" },
  { id: "affordable", label: "Affordable" },
];

export default function PreferencesScreen() {
  const [selected, setSelected] = useState([]);

  const toggleValue = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((x) => x !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleNext = async () => {
    console.log("Selected values:", selected);
    // placeholder for Cloudflare KV integration (coming soon)
  };

  return (
    <LinearGradient
      colors={["#FFE6C5", "#F7B88E"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>What business values matter most to you?</Text>

        <View style={styles.grid}>
          {VALUES.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.card,
                selected.includes(item.id) && styles.cardSelected,
              ]}
              onPress={() => toggleValue(item.id)}
            >
              <Text
                style={[
                  styles.cardText,
                  selected.includes(item.id) && styles.cardTextSelected,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: {
    padding: 24,
    alignItems: "center",
    marginTop: 120, // 👈 moves everything down
    paddingBottom: 60, // adds a little breathing room at the bottom
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#8A3E18",
    textAlign: "center",
    marginBottom: 30,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
    marginBottom: 40,
  },
  card: {
    width: 140,
    height: 110,
    backgroundColor: "#FFEEDD",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  cardSelected: {
    backgroundColor: "#F7B88E",
    borderWidth: 2,
    borderColor: "#8A3E18",
  },
  cardText: {
    fontSize: 16,
    color: "#8A3E18",
    textAlign: "center",
  },
  cardTextSelected: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#8A3E18",
    fontWeight: "bold",
  },
});
