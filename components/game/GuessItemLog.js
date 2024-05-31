import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

function GuessItemLog({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessItemLog;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    backgroundColor: Colors.accent500,
    borderWidth: 1,
    borderRadius: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    flex: 1,
    width: "100%",
    elevation: 4,
    padding: 12,
  },
});
