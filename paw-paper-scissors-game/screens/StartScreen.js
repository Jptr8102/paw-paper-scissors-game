import { useState } from "react";
import { View, StyleSheet } from "react-native";
import StartButton from "../components/ui/StartButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

function StartScreen({ onStartGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>PAW PAPER SCISSORS!</Title>
      <View style={styles.spacer} />
      <Card>
        <StartButton onPress={onStartGame}>START GAME</StartButton>
      </Card>
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 50,
  },
  title: {
    textAlign: "center",
  },
  card: {
    padding: 20,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
  },
  startButton: {
    marginTop: 10,
    alignSelf: "center",
  },
  spacer: {
    flex: 1,
  },
});
