import styles from "./Heading.module.css";

function Heading() {
  return (
    <div className={styles.heading}>
      <h1 style={{ color: "white" }}>Expense Tracker App</h1>
    </div>
  );
}

export default Heading;
