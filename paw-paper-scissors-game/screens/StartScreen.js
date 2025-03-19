import { useState } from "react";
import { View, StyleSheet } from "react-native";
import StartButton from "../components/ui/StartButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

function StartScreen({ onStartScreen }) {
  return (
    <View style={styles.rootContainer}>
      <Title>PAW PAPER SCISSORS</Title>
      <Card>
        <StartButton onPress={onStartScreen}>Start Game</StartButton>
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
  },
});
