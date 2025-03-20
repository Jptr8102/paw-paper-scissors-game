import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useGame } from "../context/GameContext";

function GameScreen({ onScreenChange, selectedCharacter }) {
  const { playerChoice, computerChoice, gameResult, playRound, resetGame } =
    useGame();

  const handlePlayerChoice = (choice) => {
    playRound(choice);
  };

  const getChoiceName = (choice) => {
    if (choice === 1) return "Rock";
    if (choice === 2) return "Paper";
    if (choice === 3) return "Scissors";
    return "";
  };

  const handleMainMenu = () => {
    resetGame();
    onScreenChange(1);
  };

  const imageList = {
    black: {
      rock: require("../assets/images/blackrock.png"),
      paper: require("../assets/images/blackpaper.png"),
      scissors: require("../assets/images/blackscissors.png"),
    },
    white: {
      rock: require("../assets/images/whiterock.png"),
      paper: require("../assets/images/whitepaper.png"),
      scissors: require("../assets/images/whitescissors.png"),
    },
    orange: {
      rock: require("../assets/images/orangerock.png"),
      paper: require("../assets/images/orangepaper.png"),
      scissors: require("../assets/images/orangescissors.png"),
    },
    grey: {
      rock: require("../assets/images/greyrock.png"),
      paper: require("../assets/images/greypaper.png"),
      scissors: require("../assets/images/greyscissors.png"),
    },
  };

  const getHandImage = (choice) => {
    if (!selectedCharacter) return null;

    let imageName = "";
    if (choice === 1) imageName = "rock";
    if (choice === 2) imageName = "paper";
    if (choice === 3) imageName = "scissors";

    return imageList[selectedCharacter][imageName];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Your Choice: {getChoiceName(playerChoice)}
      </Text>
      <Text style={styles.text}>
        Computer Choice: {getChoiceName(computerChoice)}
      </Text>
      <Text style={styles.text}>Result: {gameResult}</Text>

      <View style={styles.buttonContainer}>
        {/* ROCK */}
        <Pressable
          style={styles.rockButton}
          onPress={() => handlePlayerChoice(1)}
        >
          <Image source={getHandImage(1)} />
        </Pressable>

        {/* PAPER */}
        <Pressable
          style={styles.paperButton}
          onPress={() => handlePlayerChoice(2)}
        >
          <Image source={getHandImage(2)} />
        </Pressable>

        {/* SCISSORS */}
        <Pressable
          style={styles.scissorsButton}
          onPress={() => handlePlayerChoice(3)}
        >
          <Image source={getHandImage(3)} />
        </Pressable>
      </View>

      <Pressable style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.buttonText}>RESET GAME</Text>
      </Pressable>

      <Pressable style={styles.mainMenuButton} onPress={handleMainMenu}>
        <Text style={styles.buttonText}>MAIN MENU</Text>
      </Pressable>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20,
  },
  imageButton: {
    padding: 10,
    width: 10,
    height: 10,
  },
  rockButton: {
    left: 10,
    bottom: -20,
  },
  paperButton: {
    left: 10,
    bottom: 20,
  },
  scissorsButton: {
    right: -10,
    bottom: 18,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  resetButton: {
    backgroundColor: "#8882D8",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  mainMenuButton: {
    backgroundColor: "#504CAA",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#F8FFDE",
  },
});
