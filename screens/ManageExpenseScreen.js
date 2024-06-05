import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";

function ManageExpenseScreen({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditable = !!editedExpenseId;

  const expensesCtx = useContext(ExpensesContext)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditable ? "Edit Expense" : "Add Expense",
    });
  }, [isEditable, navigation]);

  function deletePressHandler() {
    expensesCtx.deleteExpense(editedExpenseId)
    navigation.goBack()

  }
  function cancelHandler(){
    navigation.goBack()
  }
  function confirmHandler(){
    if(isEditable){
      expensesCtx.updateExpense(editedExpenseId,{
        date:new Date('2024-06-06'),
        description:'Update Test',
        amount:88.88
      })
    }else{
      expensesCtx.addExpense({
        description:'Add Test',
        amount:99.99,
        date:new Date('2024-06-06')
      })
    }
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={cancelHandler} mode="falt">Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>{isEditable ? "Update" : "Add"}</Button>
      </View> 
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
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    minWidth:120,
    marginHorizontal:6
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "white",
    alignItems: "center",
  },
});
