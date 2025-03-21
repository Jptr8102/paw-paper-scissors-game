import React from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { useGame } from "../context/GameContext";

const GameOverScreen = ({ onScreenChange }) => {
  const { resetGame } = useGame();

  const handleRestart = () => {
    resetGame();
    onScreenChange(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GAME OVER!</Text>
      <Pressable style={styles.buttonContainer} onPress={handleRestart}>
        <Text style={styles.buttonText}>RESTART</Text>
      </Pressable>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: "#8882D8",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
