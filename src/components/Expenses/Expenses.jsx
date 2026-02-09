import { useState } from 'react';
import '../Expenses/Expenses.css';
import Card from '../ui/Card.jsx';
import ExpensesFilter from './ExpensesFilter.jsx';
import ExpenseItem from './Expenseitem.jsx';
import ExpensesList from './ExpensesList.jsx';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id}
          data={expense} />
    ));
  }

  return (

    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList expenses={filteredExpenses} isFetching={props.isFetching} />  
    </Card>
  );
}

export default Expenses;