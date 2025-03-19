import React from "react";
import { Text, StyleSheet } from "react-native";

function Card({ children, style }) {
  return <Text style={[styles.card, style]}>{children}</Text>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1C1C1C",
    borderRadius: 8,
    padding: 16,
    elevation: 4,
    // shadowColor: ""
  },
});
