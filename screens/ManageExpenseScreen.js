import { useContext, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpensesForm from "../components/ManageExpenses/ExpensesForm";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function ManageExpenseScreen({ route, navigation }) {
  const [isSubmitting, setIsSubmitting]= useState(false)
  const [error,setError] = useState()


  const editedExpenseId = route.params?.expenseId;
  const isEditable = !!editedExpenseId;

  const expensesCtx = useContext(ExpensesContext);

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditable ? "Edit Expense" : "Add Expense",
    });
  }, [isEditable, navigation]);



 async function deletePressHandler() {
  setIsSubmitting(true)
  try {
    await deleteExpense(editedExpenseId)
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  } catch (error) {
    setError('Could not detete data -please try again later!')
    setIsSubmitting(false)
  }
 
  }
  function cancelHandler() {
    navigation.goBack();
  }
 async function confirmHandler(expenseData) {
  setIsSubmitting(true)
  try {
    if (isEditable) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
      await updateExpense(editedExpenseId,expenseData)
    } else {
      const id = await storeExpense(expenseData);
      expensesCtx.addExpense({...expenseData,id:id});
    }
    navigation.goBack();
  } catch (error) {
    setError('Cloud not save expense data - please try again later!')
    setIsSubmitting(false)
  }
 
  }

  function errorHandler(){
    setError(null)
  }

  if(error && !isSubmitting){
    return <ErrorOverlay message={error} onConfirm={errorHandler}/>
  }

  if(isSubmitting){
    return <LoadingOverlay/>
  }

  return (
    <View style={styles.container}>
      <ExpensesForm
        submitButtonLabel={isEditable ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 6,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "white",
    alignItems: "center",
  },
});
