import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenseScreen() {
  const expensesClx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesClx.expenses}
      expensesPeriod="Total"
      fallbackText="No expenses registered found."
    />
  );
}

export default AllExpenseScreen;
