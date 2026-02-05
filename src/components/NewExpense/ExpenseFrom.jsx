import { Fragment, useRef, useState } from 'react';
import './ExpenseForm.css';
import Error from '../ui/Error.jsx';

const ExpenseForm = (props) => {

    const [error, setError] = useState(null);
    console.log(error);

    const titleInputRef = useRef();
    const priceInputRef = useRef();
    const dateInputRef = useRef();

    const errorHandler = () => {
        setError(null);
    };

    const submitHandler = (event) => {
        const enteredTitle = titleInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;
        const enteredDate = dateInputRef.current.value;

        event.preventDefault();

        if (enteredTitle.trim().length === 0 || enteredPrice.trim().length === 0 || enteredDate.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid title, amount, and date (non-empty values).'
            });
            return;
        }

        const expenseData = {
            title: enteredTitle,
            amount: +enteredPrice,
            date: new Date(enteredDate)
        };


        props.onSaveExpenseData(expenseData);
        props.onCancel();
        titleInputRef.current.value = '';
        priceInputRef.current.value = '';
        dateInputRef.current.value = '';

    };


    return (
        <Fragment>
            {error && (<Error title={error.title} message={error.message} onConfirm={errorHandler} />)}
        <div>
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' id="title" ref={titleInputRef}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' id="price" ref={priceInputRef}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2000-01-01' max='2028-12-31' id="date" ref={dateInputRef}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
        </div>
    </Fragment>
    );
};

export default ExpenseForm;