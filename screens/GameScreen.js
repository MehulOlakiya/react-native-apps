import { Text, View, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";

import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";

function generateRandomBetween(min, max, exclude) {
  const rnNum = Math.floor(Math.random() * (max - min)) + min;
  if (rnNum == exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rnNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userConfirmNumber, onGameOver }) {
  const initialNumber = generateRandomBetween(1, 100, userConfirmNumber);
  const [currentGuess, setCurrentGuess] = useState(initialNumber);

  useEffect(() => {
    if (currentGuess === userConfirmNumber) {
      onGameOver();
    }
  }, [currentGuess, userConfirmNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userConfirmNumber) ||
      (direction === "greater" && currentGuess > userConfirmNumber)
    ) {
      Alert.alert(`Don't lie`, "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction == "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }
    const newRnNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRnNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower ?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 100,
  },
  instructionText: {
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
