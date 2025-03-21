import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

import { GameProvider } from "./context/GameContext";

import AppLoading from "expo-app-loading";
import StartScreen from "../paw-paper-scissors-game/screens/StartScreen";
import GameScreen from "../paw-paper-scissors-game/screens/GameScreen";
import CharacterSelectScreen from "../paw-paper-scissors-game/screens/CharacterSelectScreen";
import GameOverScreen from "../paw-paper-scissors-game/screens/GameOverScreen";

export default function App() {
  const [screenNum, setScreenNum] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  let screen;

  function changeScreenHandler(num) {
    setScreenNum(num);
  }

  function handleCharacterSelect(characterId) {
    setSelectedCharacter(characterId);
    changeScreenHandler(2);
  }

  const [fontsLoaded] = useFonts({
    "super-shape": require("./assets/fonts/SuperShape-PV9qE.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (screenNum === 1) {
    screen = <StartScreen onStartGame={() => changeScreenHandler(3)} />;
  }

  if (screenNum === 2) {
    screen = (
      <GameScreen
        onScreenChange={changeScreenHandler}
        selectedCharacter={selectedCharacter}
      />
    );
  }

  if (screenNum === 3) {
    screen = (
      <CharacterSelectScreen onCharacterSelect={handleCharacterSelect} />
    );
  }

  if (screenNum === 4) {
    screen = <GameOverScreen onScreenChange={changeScreenHandler} />;
  }

  return (
    <GameProvider>
      <LinearGradient colors={["#FFCFB8", "#F8FFDE"]} style={styles.container}>
        <SafeAreaView style={styles.rootScreen}>
          <StatusBar style="auto" />
          {screen}
        </SafeAreaView>
      </LinearGradient>
    </GameProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
