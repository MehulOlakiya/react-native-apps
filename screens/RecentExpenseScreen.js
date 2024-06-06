import { useContext, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { fetchExpenses } from "../util/http";

function RecentExpenseScreen() {
  const expensesClx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      expensesClx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  const recentExpenses = expensesClx.expenses.filter((expense) => {
    console.log("expense", expense);
    const today = new Date();
    // const date7DaysAgo = getDateMinusDate(today, 7);

    return true;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses registered in last 7 days."
    />
  );
}

export default RecentExpenseScreen;
