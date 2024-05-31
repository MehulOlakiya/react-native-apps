import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    borderWidth: 2,
    borderColor: Colors.primary800,
    backgroundColor: Colors.primary500,
    padding: 12,
    borderRadius: 5,
    textAlign: "center",
    maxWidth: "80%",
    width: 300,
  },
});
