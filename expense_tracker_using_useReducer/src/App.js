import { useReducer, useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function expReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.data, ...state];
    case "REMOVE":
      return state.filter((_, i) => i !== action.idx);
    default:
      return [];

  }
}


function App() {
  const [expenses, dispatcher] = useReducer(expReducer, []);
  function addExpense(expense) {
    dispatcher({ type: "ADD", data: expense })
  }
  function deleteExpense(index) {
    // setExpenses(expenses.filter((_,i)=>i!==index));
    dispatcher({ type: "REMOVE", idx: index });
  }

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm add={addExpense} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        </div>
      </div>
    </>
  );
}

export default App;
