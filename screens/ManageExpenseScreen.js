import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";

function ManageExpenseScreen({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditable = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditable ? "Edit Expense" : "Add Expense",
    });
  }, [isEditable, navigation]);

  function deletePressHandler() {}

  return (
    <View style={styles.container}>
      {isEditable && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color="#b83f3f"
            size={36}
            onPress={deletePressHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#050505",
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "white",
    alignItems: "center",
  },
});
