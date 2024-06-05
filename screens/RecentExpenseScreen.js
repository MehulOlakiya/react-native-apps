import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { DUMMY_EXPENSES, ExpensesContext } from "../store/expenses-context";
import { getDateMinusDate } from "../util/date";

function RecentExpenseScreen() {
  const expensesClx = useContext(ExpensesContext)
  const recentExpenses = expensesClx.expenses.filter((expense)=>{
    const today = new Date()
    const date7DaysAgo = getDateMinusDate(today,7)
    return (expense.date >= date7DaysAgo) && (expense.date <= today);
    
  })
  return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" fallbackText="No expenses registred in last 7 days." />;
}

export default RecentExpenseScreen;



