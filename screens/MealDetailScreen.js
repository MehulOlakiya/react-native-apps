import MealDetail from "../components/MealDetail";
import { MEALS } from "../data/dummy-data";

import { View, Text, StyleSheet, Image } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const mealDetails = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.container}>
      <Image source={{ uri: mealDetails.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{mealDetails.title}</Text>
      <MealDetail
        duration={mealDetails.duration}
        affordability={mealDetails.affordability}
        complexity={mealDetails.complexity}
      />
      <Text>Ingredients</Text>
      {mealDetails.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {mealDetails.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  //   container: {
  //     margin: 16,
  //     backgroundColor: "white",
  //     borderRadius: 8,
  //     overflow: "hidden",
  //   },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 4,
  },
});
