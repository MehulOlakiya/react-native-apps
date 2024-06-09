import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constant/color";
import { useNavigation } from "@react-navigation/native";


function PlacesList({ places }) {



   if(!places || !places.length){
    return <View style={styles.fallbackContainer}>
      <Text style={styles.fallbackText}>No place added yet - start adding some!</Text>
    </View>
   }

   const navigation = useNavigation()

   function selectPlaceHandler(id){
    navigation.navigate('PlaceDetails',{
      placeId:id
    })
   }

 return <FlatList
   style={styles.placeList}
    data={places}
    keyExtractor={(item) => item.id}
    renderItem={(itemData)=>{
      return <PlaceItem place={itemData.item} onSelect={selectPlaceHandler}/>
    }}
  />;
}

export default PlacesList;


const styles = StyleSheet.create({
  placeList:{
    marginHorizontal:24,
    marginTop:24,
  },
  fallbackContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  fallbackText:{
    fontSize:16,
    color:Colors.primary200
  }

})
