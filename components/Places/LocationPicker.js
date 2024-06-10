import { Image, StyleSheet, View, Text, ActivityIndicator } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import OutlinedButton from "../UI/OutlinedButton";

import { Colors } from "../../constant/color";
import { useEffect, useState } from "react";

import { getAddress, getMapPreview } from "../../util/location";

function LocationPicker({ onPickedLocation }) {
  const [pickedLocation, setPickedLocation] = useState();
  const [address, setAddress] = useState(false);
  const isFocused = useIsFocused();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const navigation = useNavigation();
  const routes = useRoute();

  useEffect(() => {
    if (routes.params && isFocused) {
      const mapPickedLocation = {
        lat: routes.params.pickedLat,
        long: routes.params.pickedLong,
      };

      setPickedLocation(mapPickedLocation);
    }
  }, [routes.params, isFocused]);

  useEffect(() => {
    async function handleLocation() {
      if (pickedLocation) {
        let address = await getAddress(pickedLocation.lat, pickedLocation.long);
        setAddress(address);
        if (pickedLocation & !address) {
          return <ActivityIndicator size="large" />;
        }
        onPickedLocation({ ...pickedLocation, address: address });
      }
    }
    handleLocation();
  }, [onPickedLocation, pickedLocation]);

  async function verifyPermission() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permission to use this app."
      );
      return false;
    }
    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermission();
    if (!hasPermission) return;
    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lang: location.coords.longitude,
    });
  }

  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  let mapPreview = <Text>No Location picked yet.</Text>;
  if (pickedLocation) {
    mapPreview = (
      <Image
        style={styles.image}
        source={{ uri: getMapPreview(pickedLocation.lang, pickedLocation.lat) }}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{mapPreview}</View>
      <View style={styles.action}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    color: Colors.gray700,
    fontWeight: "bold",
  },
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
