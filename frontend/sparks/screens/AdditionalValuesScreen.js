import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function AdditionalValuesScreen({ navigation, route }) {
    const [text, setText] = useState("");
    const { selectedValues } = route.params || {}; // safely receive passed data

    const handleDone = async () => {
        const data = {
            selectedValues,
            customValue: text,
        };
        console.log("Saving to Cloudflare:", data);

        // ✅ navigate back or forward after saving
        navigation.navigate("Preferences"); // or replace with next screen later
    };

    return (
        <LinearGradient
            colors={["#FFE6C5", "#F7B88E"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.container}
        >
            <SafeAreaView style={styles.center}>
                <Text style={styles.title}>Any other values not listed?</Text>

                <TextInput
                    style={styles.textBox}
                    placeholder="Type your answer..."
                    placeholderTextColor="#A66B4D"
                    multiline
                    value={text}
                    onChangeText={setText}
                />

                <TouchableOpacity style={styles.button} onPress={handleDone}>
                    <Text style={styles.buttonText}>Done</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#8A3E18",
        textAlign: "center",
        marginBottom: 30,
    },
    textBox: {
        width: "100%",
        height: 180,
        backgroundColor: "#FFF",
        borderRadius: 16,
        padding: 16,
        fontSize: 16,
        color: "#8A3E18",
        textAlignVertical: "top",
        marginBottom: 40,
    },
    button: {
        backgroundColor: "#fff",
        paddingHorizontal: 40,
        paddingVertical: 12,
        borderRadius: 20,
        elevation: 3,
    },
    buttonText: {
        fontSize: 18,
        color: "#C14625",
        fontWeight: "bold",
    },
});
