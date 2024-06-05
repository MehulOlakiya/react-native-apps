import { StyleSheet, View,Text } from "react-native";
import ExpensesSummery from "./ExpensesSummery";
import ExpensesList from "./ExpensesList";


function ExpensesOutput({ expenses, expensesPeriod ,fallbackText}) {
  let content = <Text style={styles.fallbackText}>{fallbackText}</Text>
  if(expenses.length > 0){
    
    content =<ExpensesList expenses={expenses} />
  }

  return (
    <View style={styles.container}>
      <ExpensesSummery expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:16,
    paddingTop:16,
    flex: 1,
    backgroundColor: "#050505",
  },
  fallbackText:{
    marginTop:32,
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center'
  }
});
