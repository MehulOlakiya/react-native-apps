import { Pressable, StyleSheet, View, Text } from "react-native";

function Button({ children, onPress, mode,style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode == "falt" && styles.falt]}>
          <Text style={[styles.buttonText, mode == "falt" && styles.faltText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRedius: 8,
    padding: 12,
    backgroundColor: "#272323",
  },
  falt: {
    backgroundColor: "transprent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  faltText: {
    color: "#cccc",
  },
  pressed: {
    opacity: 0.75,
    borderRedius: 4,
    backgroundColor: "#827979",
  },
});
