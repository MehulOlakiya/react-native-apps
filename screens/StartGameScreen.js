import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";


function StartGameScreen() {
const [enteredNumber,setEnteredNumber] = useState('')

 
function numberHandler (enteredNumber) {
    setEnteredNumber(enteredNumber)
}

function confirmInputHandler(){
const choosenNumber = parseInt(enteredNumber)

if(isNaN(choosenNumber) || choosenNumber <=0 || choosenNumber > 99){
    // show Alret
    Alert.alert('Invalid Number !','Number has to be a number between 1 to 99.',
        [{text:'Okay',style:'destructive',onPress:resetInputHandler}]
    )
    return;
}
}

function resetInputHandler(){
    setEnteredNumber('')
}

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    padding: 16,
    marginHorizontal: 26,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 10,
  },
  numberInput: {
    height: 50,
    width: 60,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
   buttonsContainer:{
    flexDirection:'row'
   },
   buttonContainer:{
    flex:1
   }
});
