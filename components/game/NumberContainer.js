import { Text, View, StyleSheet } from "react-native";

import Colors from "../../constants/color";

function NumberContainer({ children }) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.textContainer}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
    // fontWeight: "bold",
    // textAlign: "center",
  },
});
