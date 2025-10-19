import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from "react-native";
import Swiper from "react-native-deck-swiper";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ClothingScreen({ navigation }) {
    const [showCards, setShowCards] = useState(true);
    const [showFirework, setShowFirework] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const businesses = [
        { id: 1, name: "Eco Threads", description: "Sustainable style.", tags: ["Eco", "Local"], images: ["https://via.placeholder.com/120x120.png?text=1"] },
        { id: 2, name: "Handmade Haven", description: "Made with care.", tags: ["Handmade"], images: ["https://via.placeholder.com/120x120.png?text=2"] },
        { id: 3, name: "Roots & Co.", description: "Inspired by nature.", tags: ["Organic"], images: ["https://via.placeholder.com/120x120.png?text=3"] },
    ];

    const handleSwipedRight = () => {
        // Hide cards
        setShowCards(false);
        setShowFirework(true);

        // Play animation for 1.5s
        Animated.sequence([
            Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
            Animated.delay(2000),
            Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
        ]).start(() => {
            setShowFirework(false);
            setShowCards(true);
        });
    };

    return (
        <LinearGradient colors={["#FFE6C5", "#F7B88E"]} style={styles.container}>
            <SafeAreaView style={styles.safe}>
                {/* Top label */}
                <Text style={styles.title}>Clothing</Text>

                {/* Card stack */}
                {showCards && (
                    <View style={styles.swiperContainer}>
                        <Swiper
                            cards={businesses}
                            renderCard={(card) =>
                                card ? (
                                    <View style={styles.card}>
                                        <Text style={styles.cardTitle}>{card.name}</Text>
                                        <Text style={styles.cardDesc}>{card.description}</Text>
                                        <View style={styles.imageRow}>
                                            {card.images.map((uri, i) => (
                                                <Image key={i} source={{ uri }} style={styles.image} />
                                            ))}
                                        </View>
                                    </View>
                                ) : (
                                    <View style={styles.card}><Text>No more cards</Text></View>
                                )
                            }
                            onSwipedRight={handleSwipedRight}
                            onSwipedLeft={(i) => console.log("Left swipe → next instantly:", i)}
                            stackSize={3}
                            infinite
                            animateCardOpacity
                            cardVerticalMargin={0}
                            backgroundColor="transparent"
                            verticalSwipe={false}
                        />
                    </View>
                )}

                {/* Firework animation */}
                {showFirework && (
                    <Animated.View style={[styles.fireworkOverlay, { opacity: fadeAnim }]}>
                        <Image source={require("../assets/firework.gif")} style={styles.firework} />
                        <Text style={styles.sparkText}>You’ve created a spark!</Text>
                    </Animated.View>
                )}

                {/* Bottom button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        try {
                            navigation.navigate("Main", { screen: "Sparks" });
                        } catch (e) {
                            console.warn("Navigation to Sparks failed, retrying...");
                            navigation.navigate("Sparks");
                        }
                    }}
                >
                    <Text style={styles.buttonText}>Done</Text>
                </TouchableOpacity>





            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    safe: { flex: 1, justifyContent: "space-between", alignItems: "center" },
    title: { fontSize: 40, fontWeight: "700", color: "#8A3E18", marginTop: 85 },
    swiperContainer: {
        width: "100%",
        height: 460,
        marginTop: 15,
        marginLeft: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        backgroundColor: "#FFF2E6",
        borderRadius: 16,
        padding: 20,
        width: "90%",
        maxWidth: 400,
        height: 420,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 3,
    },
    cardTitle: { fontSize: 22, fontWeight: "700", color: "#8A3E18" },
    cardDesc: { color: "#8A3E18", textAlign: "center", marginVertical: 10 },
    imageRow: { flexDirection: "row", gap: 8 },
    image: { width: 100, height: 120, borderRadius: 10 },
    fireworkOverlay: {
        position: "absolute",
        top: "25%",
        left: 0,
        right: 0,
        alignItems: "center",
        zIndex: 10,
    },
    firework: { width: 380, height: 380 },
    sparkText: { color: "#8A3E18", fontSize: 20, fontWeight: "bold", marginTop: -10 },
    button: {
        backgroundColor: "#fff",
        paddingHorizontal: 40,
        paddingVertical: 12,
        borderRadius: 20,
        marginBottom: 40,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: { fontSize: 18, color: "#C14625", fontWeight: "bold" },
});
