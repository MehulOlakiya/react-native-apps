import { View, Text, Image, StyleSheet, useWindowDimensions , ScrollView } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/color";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {

   const { height ,width} = useWindowDimensions()
   let imageSize = 300
   if(width < 380){
    imageSize  = 150
   }

   if(height < 450){
    imageSize = 128
   }

   const imageStyle = {
    width : imageSize,
    height : imageSize,
    borderRadius : imageSize / 2
   }

   const marginTop =  width > 500 ? 25 :100

  return (
    <ScrollView style={styles.screen} >
    <View style={[styles.rootContainer,{marginTop:marginTop}]}>
      <Title>Game Over</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summeryText}>
        Your phone needed{" "}
        <Text style={styles.highlightText}>{roundsNumber}</Text> round to guess
        the number <Text style={styles.highlightText}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  rootContainer: {
    flex: 1,
    padding: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: 300,
    // height: 300,
    // borderRadius: 150,
    borderColor: Colors.primary800,
    borderWidth: 3,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summeryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
