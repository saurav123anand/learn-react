import React, { useEffect, useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ addExpense, editingExpense, updateExpense  }) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  // Use the useEffect hook here, to check if an expense is to be updated
  // If yes, the autofill the form values with the text and amount of the expense
  useEffect(() => {
    if (editingExpense) {
      expenseTextInput.current.value = editingExpense.text;
      expenseAmountInput.current.value = editingExpense.amount;
    } else {
      clearInput(); // Clear inputs if no expense is being edited
    }
  }, [editingExpense]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseText = expenseTextInput.current.value;
    const expenseAmount = expenseAmountInput.current.value;

    if (parseInt(expenseAmount) === 0) {
      return;
    }

    const expense = {
      text: expenseText,
      amount: parseFloat(expenseAmount), // Ensure amount is a number
      id: editingExpense ? editingExpense.id : new Date().getTime() // Use existing ID if editing
    };

    if (editingExpense) {
      updateExpense(expense); // Update existing expense
    } else {
      addExpense(expense); // Add new expense
    }
    
    clearInput();
  };

  const clearInput = () => {
    expenseAmountInput.current.value = "";
    expenseTextInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      {/* Change text to Edit Transaction if an expense is to be updated */}
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />
      <button className={styles.submitBtn}>
        {editingExpense ? 'Edit transaction' : 'Add Transaction'} {/* Change button text based on editing state */}
      </button>
    </form>
  );
};

export default ExpenseForm;
