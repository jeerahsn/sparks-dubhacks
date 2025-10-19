import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function AdditionalValuesScreen({ navigation, route }) {
    const [input, setInput] = useState("");
    const selectedValues = route.params?.selectedValues || [];


    const handleDone = () => {
        console.log("Submitted:", { selectedValues, extra: input });
        navigation.navigate("Clothing"); // ✅ directly navigate here
    };



    return (
        <LinearGradient colors={["#FFE6C5", "#F7B88E"]} style={styles.container}>
            <Text style={styles.title}>Any other values not listed?</Text>
            <TextInput
                style={styles.input}
                placeholder="Insert text..."
                value={input}
                onChangeText={setInput}
                multiline
            />
            <TouchableOpacity style={styles.button} onPress={handleDone}>
                <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
    title: { fontSize: 22, color: "#8A3E18", textAlign: "center", marginBottom: 20 },
    input: {
        backgroundColor: "#FFF",
        borderRadius: 12,
        width: "90%",
        height: 200,
        textAlignVertical: "top",
        padding: 16,
        fontSize: 16,
        color: "#8A3E18",
        marginBottom: 30,
        elevation: 3,
    },
    button: {
        backgroundColor: "#fff",
        paddingHorizontal: 40,
        paddingVertical: 12,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: { fontSize: 18, color: "#C14625", fontWeight: "bold" },
});
