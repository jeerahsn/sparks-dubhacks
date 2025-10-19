import React from "react";
import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Quicksand_700Bold } from "@expo-google-fonts/quicksand";

export default function App() {
  const [fontsLoaded] = useFonts({ Quicksand_700Bold });
  if (!fontsLoaded) return null;

  return (
    <LinearGradient
      colors={["#FFE6C5", "#F7B88E"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.center}>
        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.text}>sparks</Text>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -150, // move both logo + text higher
  },
  logo: {
    width: 480, // doubled from 240
    height: 480,
    marginBottom: -100, // pull text closer to logo
  },
  text: {
    fontFamily: "Quicksand_700Bold",
    fontSize: 52,
    color: "#8A3E18",
    letterSpacing: 1,
  },
});
