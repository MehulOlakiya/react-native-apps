import { Image, StyleSheet, View, Text } from "react-native";
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
  const [pickedLocaiton, setPickedLocation] = useState();
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

  useEffect(()=>{
    async  function handleLocation(){
        if(pickedLocaiton){
            let address = await getAddress(pickedLocaiton.lat,pickedLocaiton.long)
            console.log('placessed',address)
            onPickedLocation({...pickedLocaiton,address:address})
        }
        
    }
    handleLocation()
  },[onPickedLocation,pickedLocaiton])

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

  let mapPerview = <Text>No Loaction picked yet.</Text>;
  if (pickedLocaiton) {
    mapPerview = (
      <Image
        style={styles.image}
        source={{ uri: getMapPreview(pickedLocaiton.lang, pickedLocaiton.lat) }}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{mapPerview}</View>
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
