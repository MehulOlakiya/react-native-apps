import { useCallback, useState } from "react";
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import { Colors } from "../../constant/color";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import Place from "../../models/place";

function PlaceForm({onCreatePlace}) {
  const [title, setTilte] = useState("");
  const [selectedImage,setSelectedImage] = useState()
  const [pickedLocaiton,setPickedLocation] = useState()


  function changeTitleHandler(enteredText) {
    setTilte(enteredText);
  }

  function takeImageHandler(imageUri){
    setSelectedImage(imageUri)
  }

  const  pickedLocaitonHandler = useCallback((loaction)=>{
    setPickedLocation(loaction)
  },[])

  function savePlaceHandler(){
   const placeData = new Place(title,pickedLocaiton,selectedImage)
   onCreatePlace(placeData)

  }

  return (
    <ScrollView style={styles.form }>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={changeTitleHandler} value={title} />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickedLocation={pickedLocaitonHandler} />
      <View style={styles.buttonContaniner}>
      <Button  onPress={savePlaceHandler}>Add Place</Button>

      </View>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    color: Colors.primary700,
    marginBottom: 4,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
    borderRadius:8
  },
  buttonContaniner:{
    marginTop:12
  }
});
