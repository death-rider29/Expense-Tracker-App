import React from 'react';

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItem.module.css";

function ExpenseItem(props) {

  return (
    <>
      <Card className={styles.expenseItem}>
        <div className={styles.expenseDescription}>
          <ExpenseDate expenseDate={props.expenseDate}/>
          <div className={styles.expenseName}>
            <h2>{props.expenseName}</h2>
          </div>
        </div>
        <div className={styles.expenseDescription}>
          <Card className={styles.expensePrice}>&#8377; {props.expensePrice}</Card>
        </div>
      </Card>
    </>
  );
}

export default ExpenseItem;
