import MealDetail from "../components/MealDetail";
import List from "../components/MealDetail/List";
import SubTitle from "../components/MealDetail/SubTitle";
import { MEALS } from "../data/dummy-data";

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/Favorites-context";
import { useSelector ,useDispatch} from "react-redux";
import { addFavorite,removeFavorite } from "../store/redux/favorites";

function MealDetailScreen({ route, navigation }) {
  // const favoriteMealsClx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state)=>state.favoriteMeal.ids)
  const dispatch = useDispatch()
  const mealId = route.params.mealId;
  const mealDetails = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealsClx.removeFavorite(mealId);
      dispatch(removeFavorite({id:mealId}))
    } else {
      // favoriteMealsClx.addFavorite(mealId);
      dispatch(addFavorite({id:mealId}))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler, mealIsFavorite]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: mealDetails.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{mealDetails.title}</Text>
      <MealDetail
        duration={mealDetails.duration}
        affordability={mealDetails.affordability}
        complexity={mealDetails.complexity}
        textStyle={styles.detailsText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List listIem={mealDetails.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List listIem={mealDetails.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },

  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  detailsText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "85%",
  },
});
