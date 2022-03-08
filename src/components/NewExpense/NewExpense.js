import Layout from "./Layout";

function NewExpense(props) {

    const passNewExpenseHandler = (newExpense) => {
        props.onNewExpenseRecord(newExpense);
    }

    return (
        <>
            <Layout onNewExpenseRecord={passNewExpenseHandler} />
        </>
    );
}

export default NewExpense;