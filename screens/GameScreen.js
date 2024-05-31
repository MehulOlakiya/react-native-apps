import { useEffect, useState } from "react";
import { Alert, StyleSheet, View, Text, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import GuessItemLog from "../components/game/GuessItemLog";

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
  const [guessRound, setGuessRound] = useState([initialNumber]);

  useEffect(() => {
    if (currentGuess === userConfirmNumber) {
      onGameOver(guessRound.length);
    }
  }, [currentGuess, userConfirmNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRound((prevGuessRound) => [newRnNumber, ...prevGuessRound]);
  }

  const guessRoundListLength = guessRound.length;

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
              <AntDesign name="minus" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <AntDesign name="plus" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRound.map((guess) => (
          <Text key={guess}>{guess}</Text>
        ))} */}
        <FlatList
          data={guessRound}
          renderItem={(itemData) => (
            <GuessItemLog
              roundNumber={guessRoundListLength - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 100,
    alignItems: "center",
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
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
