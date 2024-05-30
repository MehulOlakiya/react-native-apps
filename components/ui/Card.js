import { View, StyleSheet } from "react-native";

import Colors from "../../constants/color";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    padding: 16,
    marginHorizontal: 26,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 10,
  },
});
