import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

function StartButton({ children, onPress }) {
  // console.log("StartButton children", children);
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "white" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default StartButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#504CAA",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#F8FFDE",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  pressed: {
    opacity: 0.75,
  },
});
