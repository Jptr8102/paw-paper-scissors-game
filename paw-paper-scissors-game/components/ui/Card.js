import React from "react";
import { View, StyleSheet } from "react-native";

function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#504CAA",
    borderRadius: 8,
    padding: 16,
    elevation: 4,
    shadowColor: "#1C1C1C",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
