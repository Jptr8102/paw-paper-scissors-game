import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

function CharacterSelectScreen({ onCharacterSelect }) {
  const characters = [
    {
      id: "black",
      name: "Black Cat",
      image: require("../assets/images/black-cat.png"),
    },
    {
      id: "white",
      name: "White Cat",
      image: require("../assets/images/white-cat.png"),
    },
    {
      id: "orange",
      name: "Orange Cat",
      image: require("../assets/images/orange-cat.png"),
    },
    {
      id: "grey",
      name: "Grey Cat",
      image: require("../assets/images/grey-cat.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SELECT YOUR CHARACTER</Text>
      <View style={styles.charactersContainer}>
        {characters.map((character) => (
          <Pressable
            key={character.id}
            style={styles.characterButton}
            onPress={() => onCharacterSelect(character.id)}
          >
            <Image source={character.image} style={styles.characterImage} />
            <Text style={styles.characterName}>{character.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

export default CharacterSelectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  charactersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  characterButton: {
    alignItems: "center",
    margin: 10,
  },
  characterImage: {
    width: 120,
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  characterName: {
    fontWeight: "bold",
  },
});
