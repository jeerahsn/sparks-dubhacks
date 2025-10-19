import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

/**
 * Simple React Native ScrollArea replacement for Radix ScrollArea
 * - Automatically adds smooth scrolling and custom padding
 */
export default function ScrollArea({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#FFF",
  },
  scroll: {
    flex: 1,
  },
});
