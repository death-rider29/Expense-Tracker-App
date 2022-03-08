import Card from '../UI/Card';
import styles from './ExpenseDate.module.css'

function ExpenseDate(props) {
    const month = props.expenseDate.toLocaleString('en-US', {month: 'long'});
    const day = props.expenseDate.toLocaleString('en-US', {day: '2-digit'});
    const year = props.expenseDate.getFullYear();
    return(
    <>
        <Card className={styles.expenseDate}>
            <div className={styles.expenseDate__month}>{month}</div>
            <div className={styles.expenseDate__year}>{year}</div>
            <div className={styles.expenseDate__day}>{day}</div>
        </Card>
    </>
    );
}

export default ExpenseDate;