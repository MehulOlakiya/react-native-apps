import { StyleSheet, View } from "react-native";
import ExpensesSummery from "./ExpensesSummery";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "T-shirt",
    amount: 10.25,
    date: new Date("2024-06-05"),
  },
  {
    id: "e8",
    description: "T-shirt",
    amount: 10.25,
    date: new Date("2024-06-05"),
  },
  {
    id: "e2",
    description: "Book",
    amount: 25.95,
    date: new Date("2024-05-15"),
  },
  {
    id: "e3",
    description: "Recharge",
    amount: 20.25,
    date: new Date("2024-06-04"),
  },
  {
    id: "e4",
    description: "BreakFast",
    amount: 1.05,
    date: new Date("2024-06-01"),
  },
  {
    id: "e5",
    description: "Pen",
    amount: 0.25,
    date: new Date("2024-05-20"),
  },
  {
    id: "e6",
    description: "Cable",
    amount: 2.25,
    date: new Date("2024-05-07"),
  },
  {
    id: "e7",
    description: "Face Wash",
    amount: 26.95,
    date: new Date("2024-06-25"),
  },
  {
    id: "e9",
    description: "Face Wash",
    amount: 26.95,
    date: new Date("2024-06-25"),
  },
  {
    id: "e10",
    description: "Face Wash",
    amount: 26.95,
    date: new Date("2024-06-25"),
  },
  {
    id: "e11",
    description: "Face Wash",
    amount: 26.95,
    date: new Date("2024-06-25"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummery expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#050505",
  },
});
