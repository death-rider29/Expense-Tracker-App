import styles from './AddNewExpenseButton.module.css'

function AddNewExpenseButton(props) {

    const addNewExpenseButtonHandler = () => {
        props.onAddNewExpenseButtonClicked();
    }

    return (
        <div className={styles.buttonClass}>
            <button className={styles.button} onClick={addNewExpenseButtonHandler}>Add New Expense</button>
        </div>
    );
}

export default AddNewExpenseButton;