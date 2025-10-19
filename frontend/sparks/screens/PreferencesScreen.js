// frontend/sparks/src/screens/PreferencesScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// ---- Local icons (put PNGs in frontend/sparks/assets/icons/) ----
const ICONS = {
  sprout:      require("../../assets/icons/1.png"),
  spool:       require("../../assets/icons/2.png"),
  user:        require("../../assets/icons/3.png"),
  storefront:  require("../../assets/icons/4.png"),
  recycle:     require("../../assets/icons/5.png"),
  coin:        require("../../assets/icons/6.png"),
  // sparkStore: require("../../assets/icons/spark_store.png"), // unused here
};

// ---- Values + which icon to show above each button ----
const VALUES = [
  { id: "ethical",    label: "Ethically Sourced", icon: ICONS.sprout },
  { id: "handmade",   label: "Handmade",          icon: ICONS.spool },
  { id: "bipoc",      label: "BIPOC Owned",       icon: ICONS.user },
  { id: "local",      label: "Local",             icon: ICONS.storefront },
  { id: "eco",        label: "Eco-friendly",      icon: ICONS.recycle },
  { id: "affordable", label: "Affordable",        icon: ICONS.coin },
];

export default function PreferencesScreen() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleValue = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleNext = async () => {
    console.log("Selected values:", selected);
    // TODO: submit to your backend / KV
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
          {VALUES.map((item) => {
            const isOn = selected.includes(item.id);
            return (
              <TouchableOpacity
                key={item.id}
                style={[styles.card, isOn && styles.cardSelected]}
                onPress={() => toggleValue(item.id)}
                activeOpacity={0.85}
                accessibilityRole="button"
                accessibilityState={{ selected: isOn }}
              >
                <Image source={item.icon} style={styles.cardImage} resizeMode="contain" />
                <Text style={[styles.cardText, isOn && styles.cardTextSelected]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNext} activeOpacity={0.9}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const CARD_SIZE = 132;

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: {
    paddingHorizontal: 24,
    alignItems: "center",
    paddingTop: 110,
    paddingBottom: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#8A3E18",
    textAlign: "center",
    marginBottom: 24,
  },
  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 36,
  },
  card: {
    width: "48%",                 // 2 per row
    height: CARD_SIZE,
    backgroundColor: "#FFEEDD",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "transparent",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  cardSelected: {
    backgroundColor: "#F7B88E",
    borderColor: "#8A3E18",
    borderWidth: 2,
  },
  cardImage: {
    width: 56,
    height: 56,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#8A3E18",
    textAlign: "center",
    fontWeight: "600",
  },
  cardTextSelected: {
    color: "#6E2F12",
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#8A3E18",
  },
  buttonText: {
    fontSize: 18,
    color: "#8A3E18",
    fontWeight: "bold",
  },
});
