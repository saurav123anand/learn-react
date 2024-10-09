import { useState, useReducer } from "react";
import "./App.css";

// components imports
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import firebase methods here
import { db } from "./FirebaseConfig";
import { addDoc,setDoc,collection,doc } from "firebase/firestore";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      };
    }
    case "UPDATE_EXPENSE": {
      const expensesDuplicate = state.expenses;
      expensesDuplicate[payload.expensePos] = payload.expense;
      return {
        expenses: expensesDuplicate
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);

  const addExpense = async (expense) => {
    try {
      // Add the expense to Firestore and capture the document reference
      const docRef = await addDoc(collection(db, "expenses"), expense);
  
      // Dispatch the expense with the generated ID to the state
      dispatch({
        type: "ADD_EXPENSE",
        payload: { expense: { ...expense, id: docRef.id } } // Include Firestore ID
      });
      toast.success("Expense added successfully.");
    } catch (error) {
      toast.error("Error adding expense: " + error.message);
    }
  };
  

  const deleteExpense = (id) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
  };

  const resetExpenseToUpdate = () => {
    setExpenseToUpdate(null);
  };

  const updateExpense = async (expense) => {
    console.log("Updating expense:", expense); // Debugging line
  
    if (!Array.isArray(state.expenses)) {
      console.error("Expenses is not an array:", state.expenses);
      return;
    }
  
    // Find the position of the expense in the array
    const expensePos = state.expenses.findIndex((exp) => exp.id === expense.id);
    
    console.log("Expense position:", expensePos); // Debugging line
  
    if (expensePos === -1) {
      console.error("Expense not found in state:", expense);
      return false;
    }
  
    try {
      const expenseDoc = doc(db, "expenses", expense.id); // Firestore document reference
      await setDoc(expenseDoc, expense); // Update the document in Firestore
      dispatch({ type: "UPDATE_EXPENSE", payload: { expensePos, expense } });
      toast.success("Expense updated successfully.");
    } catch (error) {
      toast.error("Error updating expense: " + error.message);
    }
  };
  
  

  return (
    <>
      <ToastContainer />
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm
          addExpense={addExpense}
          expenseToUpdate={expenseToUpdate}
          updateExpense={updateExpense}
          resetExpenseToUpdate={resetExpenseToUpdate}
        />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList
            expenses={state.expenses}
            deleteExpense={deleteExpense}
            changeExpenseToUpdate={setExpenseToUpdate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
