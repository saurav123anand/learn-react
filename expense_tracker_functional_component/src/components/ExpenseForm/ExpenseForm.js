import { useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Logic to add expense here
    const expense={
      text:expenseTextInput.current.value,
      amount:parseInt(expenseAmountInput.current.value)
    }
    props.add(expense);
    expenseTextInput.current.value="";
    expenseAmountInput.current.value=""

  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        required
        ref={expenseTextInput}
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
        required
        ref={expenseAmountInput}
      />
      <button className={styles.submitBtn} onClick={()=>onSubmitHandler}>Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;
