import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetail from "./MealDetail";

function MealItem({
  id,
  title,
  affordability,
  complexity,
  imageUrl,
  duration,
  onPress,
}) {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealIem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.text}>{title}</Text>
          </View>
          <MealDetail
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealIem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",

    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
