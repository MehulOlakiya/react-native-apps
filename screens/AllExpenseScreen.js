import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenseScreen() {
  const expensesClx = useContext(ExpensesContext)
  return <ExpensesOutput expenses={expensesClx.expenses} expensesPeriod="Total" fallbackText="No expenses registred found." />;
}

export default AllExpenseScreen;
