import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, FlatList } from "react-native";
import { ChevronDown } from "lucide-react-native";

/**
 * A React Native replacement for the Radix Select component.
 * Works fully on iOS and Android — no external UI libraries required.
 */
export default function Select({ options = [], placeholder = "Select an option", onValueChange }) {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (item) => {
    setSelected(item);
    setVisible(false);
    if (onValueChange) onValueChange(item);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.trigger} onPress={() => setVisible(true)}>
        <Text style={styles.text}>{selected || placeholder}</Text>
        <ChevronDown color="#A24A17" size={18} />
      </TouchableOpacity>

      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity style={styles.overlay} onPress={() => setVisible(false)} activeOpacity={1}>
          <View style={styles.menu}>
            <FlatList
              data={options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  trigger: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#A24A17",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "#FFF3D8",
  },
  text: {
    color: "#A24A17",
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  menu: {
    marginHorizontal: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});

