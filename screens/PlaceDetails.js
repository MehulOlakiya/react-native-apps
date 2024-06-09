import { ScrollView, View,Text, StyleSheet,Image } from "react-native"
import OutlinedButton from "../components/UI/OutlinedButton"
import { Colors } from "../constant/color"
import { useEffect, useState } from "react"
import { fetchPlaceDetails } from "../util/database"


function PlaceDetails({route,navigation}){

    const [fetchedPlace, setFetchedPlace] = useState()
    const selectedPlaceId = route.params.placeId;
  
    useEffect(() => {
      async function loadPlaceData() {
        const place = await fetchPlaceDetails(selectedPlaceId);
        setFetchedPlace(place);
        navigation.setOptions({
            title: place.title,
        });
    }
    loadPlaceData();
    console.log('palce funcytiv',fetchedPlace)
    }, [selectedPlaceId]);

    console.log('feted',fetchedPlace)

        
function showOnMapHandler(){
    console.log('ssho',fetchedPlace)
    navigation.navigate('Map', {
        initialLat: fetchedPlace.location.lat,
        initialLong: fetchedPlace.location.long,
      });
    }
  
    // if (!fetchedPlace) {
    //   return (
    //     <View style={styles.fallback}>
    //       <Text>Loading place data...</Text>
    //     </View>
    //   );
    // }

        
        return (
            <ScrollView>
              <Image style={styles.image}  />
              <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                  <Text style={styles.address}>'TExt"</Text>
                </View>
                <OutlinedButton icon="map" onPress={showOnMapHandler}>
                  View on Map
                </OutlinedButton>
              </View>
            </ScrollView>
          );
    
     


  
  }
  

export default PlaceDetails

const styles = StyleSheet.create({
   fallback:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
   },
   fallbackText:{
    textAlign:'center',
    fontWeight:'bold',
    color:Colors.primary500
   },
    image:{
        height:'35%',
        minHeight:300,
        width:"100%",
    },
    locationContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    addressContainer:{
        padding:24
    },
    address:{
        fontWeight:'bold',
        color:Colors.primary500,
        textAlign:'center',
        fontSize:16
    }
})