import { createContext, useReducer } from "react";


export const DUMMY_EXPENSES = [
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

export const ExpensesContext = createContext({
    expenses:[],
    addExpense:({amount,description,date})=>{},
    updateExpense:(id,{amount,description,date})=>{},
    deleteExpense:(id)=>{},
    
});

function expensesReducer(state,action){
switch(action.type){
    case 'ADD':
        const id = new Date().toString() + Math.random().toString()
        return [{...action.payload, id:id},...state]
    case 'UPDATE':
        const updatableExpenseIndex = state.findIndex((expense)=>expense.id === action.payload.id)
        const updatableExpense = state[updatableExpenseIndex]
        const updatedItem= {...updatableExpense,...action.payload.data}
        const updatedExpenses =[...state]
        updatedExpenses[updatableExpenseIndex] = updatedItem
        return updatedExpenses;
    case "DELETE":
        return state.filter((expense)=>expense.id !== action.payload)
    default:
        return state

}
}



function ExpenseContextProvider({children}){
    const [expensesState,dispatch] = useReducer(expensesReducer,DUMMY_EXPENSES)

    function addExpense(expenesData){
        dispatch({type:'ADD',payload:expenesData})
    }

    function deleteExpense(id){
        dispatch({type:'DELETE',payload:id})
    }
    function updateExpense(id,expenesData){
        dispatch({type:'UPDATE',payload:{id:id,data:expenesData}})
    }
    const value={
        expenses:expensesState,
        addExpense:addExpense,
        updateExpense:updateExpense,
        deleteExpense:deleteExpense
    }

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}
export default ExpenseContextProvider;