import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpenseScreen() {
  return <ExpensesOutput expensesPeriod="Total" />;
}

export default AllExpenseScreen;
