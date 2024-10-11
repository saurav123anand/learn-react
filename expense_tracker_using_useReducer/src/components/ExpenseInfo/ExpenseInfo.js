import React from "react";
import styles from "./ExpenseInfo.module.css";
import { useState,useEffect } from "react";
const ExpenseInfo = (props) => {
  const [balance, setBalance] = useState(0)
  const [income, setIncome] = useState(0)
  const [expense,setExpense]=useState(0);
  useEffect(() => {
    const totalPrice = props.expenses.reduce((total, curr) => {
      return total += curr.amount;
    }, 0)
    setBalance(totalPrice)
  }, [props.expenses])
  useEffect(() => {
    const income = props.expenses
      .filter((exp) => exp.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
      setIncome(income)
  }, [props.expenses])
  useEffect(() => {
    const expense = props.expenses
      .filter((exp) => exp.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
      setExpense(expense)
  }, [props.expenses])

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${balance}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${expense}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
