import { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalInput from "./components/goalInput";
import GoalItem from "./components/goalItem";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  const startAddGoalModelHandler = () => {
    setModelIsVisible(true);
  };

  const endAddGoalModelHandler = () => {
    setModelIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalModelHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoal((currentGoal) => {
      return currentGoal.filter((goal) => goal.id != id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={startAddGoalModelHandler}
          color="#5e0acc"
        ></Button>
        <GoalInput
          visible={modelIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalModelHandler}
        />
        <View style={styles.goalContailner}>
          <FlatList
            data={courseGoal}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onItemDelete={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalContailner: {
    flex: 5,
  },
});
