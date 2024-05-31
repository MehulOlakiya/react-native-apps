import { Text, View, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/color";

function NumberContainer({ children }) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.textContainer}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    // marginBottom: -10,
    // marginTop: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 18 : 28,
    // fontFamily: "open-sans-bold",
    fontWeight: "bold",
    // textAlign: "center",
  },
});
