import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constant/color";
import { useEffect, useState } from "react";
import { fetchPlaceDetails } from "../util/database";

function PlaceDetails({ route, navigation }) {
  const [fetchedPlace, setFetchedPlace] = useState(null);
  const selectedPlaceId = route.params.placeId;

  function showOnMapHandler() {
    navigation.navigate("Map", {
      initialLat: fetchedPlace.location.lat,
      initialLong: fetchedPlace.location.long,
    });
  }

  useEffect(() => {
    async function loadPlaceData() {
      try {
        const place = await fetchPlaceDetails(selectedPlaceId);
        setFetchedPlace(place);
        navigation.setOptions({
          title: place.title,
        });
      } catch (error) {
        console.error("Error fetching place:", error);
      }
    }
    loadPlaceData();
  }, [selectedPlaceId]);

  if (!fetchedPlace) {
    return (
      <ActivityIndicator
        color={Colors.primary500}
        size="large"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: fetchedPlace.imageUri }} />
      </View>
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.primary500,
  },
  imageContainer: {
    flex: 1,
    height: 300,
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 24,
  },
  address: {
    fontWeight: "bold",
    color: Colors.primary500,
    textAlign: "center",
    fontSize: 16,
  },
});
