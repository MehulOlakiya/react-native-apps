import { useContext, useEffect ,useState} from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { fetchExpenses } from "../util/http";
import { getDateMinusDate } from "../util/date";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpenseScreen() {
  const [isFetching, setIsFetching]= useState(true)
  const [error,setError] = useState()
  const expensesClx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true)
      try {
        const expenses = await fetchExpenses();
        expensesClx.setExpenses(expenses);
      } catch (e) {
        setError('Cloud not fetch expenses!')
      }
      setIsFetching(false)
    }
    getExpenses();
  }, []);

  function errorHandler(){
    setError(null)
  }

  if( error  && !isFetching){
    return  <ErrorOverlay message={error} onConfirm={errorHandler}/>
  }

  if(isFetching){
    return <LoadingOverlay/>
  }

  const recentExpenses = expensesClx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDate(today, 7);
    const formatedExpenseDate = new Date(expense.date)
    return formatedExpenseDate >= date7DaysAgo && formatedExpenseDate <= today;
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
