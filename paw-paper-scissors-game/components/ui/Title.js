import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "super-shape",
    fontSize: 33,
    fontWeight: "bold",
    color: "#504CAA",
    textAlign: "center",
  },
});
