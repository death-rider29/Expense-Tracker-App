import React from "react";

import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItem.module.css";

function ExpenseItem(props) {
  return (
    <>
      <div className={styles.expenseItem}>
        <div className={styles.expenseDescription}>
          <ExpenseDate expenseDate={props.expenseDate} />
          <div className={styles.expenseName}>
            <h2>{props.expenseName}</h2>
          </div>
        </div>
        <div className={styles.expenseDescription}>
          <div className={styles.expensePrice}>
            &#8377; {props.expensePrice}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
