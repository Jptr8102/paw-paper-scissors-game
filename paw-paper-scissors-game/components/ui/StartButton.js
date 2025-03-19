import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function StartButton({ children, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText]}>{children}</Text>;
    </TouchableOpacity>
  );
}

export default StartButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFD766",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#1C1C1C",
    fontSize: 16,
    fontWeight: "bold",
  },
});
