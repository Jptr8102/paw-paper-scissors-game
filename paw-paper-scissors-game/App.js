import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import { useFonts } from "expo-font";

// import AppLoading from "expo-app-loading";
import StartScreen from "../paw-paper-scissors-game/screens/StartScreen";

export default function App() {
  const [screenNum, setScreenNum] = useState(1);
  let screen;

  function changeScreenHandler(num) {
    setScreenNum(num);
  }

  // const [fontsLoaded] = useFonts({
  //   "super-shape": require("./assets/fonts/SuperShape-PV9qE.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  if (screenNum === 1) {
    screen = <StartScreen onScreenChange={() => changeScreenHandler(2)} />;
  }

  if (screenNum === 2) {
    screen = <GameScreen onScreenChange={changeScreenHandler} />;
  }

  if (screenNum === 3) {
    screen = <CharacterSelectScreen onScreenChange={changeScreenHandler} />;
  }

  if (screenNum === 4) {
    screen = <GameOverScreen onScreenChange={changeScreenHandler} />;
  }

  return (
    // <LinearGradient colors={["#2980B9", "#6DD5FA"]} style={styles.container}>
    <SafeAreaView style={styles.rootScreen}>
      <StatusBar style="auto" />
      {screen}
    </SafeAreaView>
    // </LinearGradient>
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
