import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Quicksand_700Bold } from "@expo-google-fonts/quicksand";

export default function SplashScreen({ navigation }) {
  // ✅ Always call hooks first
  const [fontsLoaded] = useFonts({ Quicksand_700Bold });

  useEffect(() => {
    if (fontsLoaded) {
      const timer = setTimeout(() => {
        navigation.replace("Preferences");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [fontsLoaded, navigation]);

  // ✅ Now safely return conditional UI
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#FFE6C5", "#F7B88E"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.center}>
        <Image
          source={require("../assets/logo.png")}
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
    marginTop: -150,
  },
  logo: {
    width: 480,
    height: 480,
    marginBottom: -100,
  },
  text: {
    fontFamily: "Quicksand_700Bold",
    fontSize: 52,
    color: "#8A3E18",
    letterSpacing: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE6C5",
  },
  loadingText: {
    color: "#8A3E18",
    fontSize: 20,
  },
});
