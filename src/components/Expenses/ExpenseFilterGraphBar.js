import styles from "./ExpenseFilterGraphBar.module.css";

function ExpenseFilterGraphBar(props) {
  let barHeight = (props.dataSpentMoney / props.maxPrice) * 150;
  if (barHeight > 0 && barHeight < 10) barHeight = 5;

  barHeight = Math.round(barHeight);

  return (
    <>
      <div className={styles.graphMonthCombo}>
        <div className={styles.graph} title={`Rs. ${props.dataSpentMoney}`}>
          <div
            className={styles.graphColor}
            style={{ height: `${barHeight}px`, maxHeight: "150px" }}
          />
        </div>
        <div className={styles.month}>{props.dataMonth}</div>
      </div>
    </>
  );
}

export default ExpenseFilterGraphBar;
