import ExpenseFilterGraphBar from "./ExpenseFilterGraphBar";
import styles from "./ExpenseFilterGraphs.module.css";

function ExpenseFilterGraphs(props) {
  const moneyArr = props.graphData.map((data) => data.spentMoney);
  const max = Math.max(...moneyArr);

  return (
    <>
      <div className={styles.filterGraphs}>
        {props.graphData.map((data) => (
          <ExpenseFilterGraphBar
            key={data.id}
            dataSpentMoney={data.spentMoney}
            dataMonth={data.month}
            maxPrice={max}
          />
        ))}
      </div>
    </>
  );
}

export default ExpenseFilterGraphs;
