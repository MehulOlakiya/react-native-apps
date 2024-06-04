import MealItem from "../components/MealList/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useLayoutEffect } from "react";
import MealList from "../components/MealList/MealList";

function MealsOverViewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catId]);

  const displayedMeals = MEALS.filter((itemData) => {
    return itemData.categoryIds.indexOf(catId) >= 0;
  });

  return <MealList items={displayedMeals} />;
}

export default MealsOverViewScreen;
