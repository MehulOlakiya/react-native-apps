import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constant/styles";

function ExpensesSummery({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummery;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#605656",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 6,
  },
  sum: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    marginHorizontal:12
  },
  period: {
    fontWeight: "bold",
    fontSize: 12,
    color: "white",
  },
});
