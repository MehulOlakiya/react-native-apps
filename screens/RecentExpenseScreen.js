import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpenseScreen() {
  return <ExpensesOutput expensesPeriod="Last 7 days" />;
}

export default RecentExpenseScreen;
