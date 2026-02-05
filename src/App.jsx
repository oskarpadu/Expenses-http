import { useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense.jsx'

const DYMMY_EXPENSES = [
  {
    id: 'id1',
    date: new Date(2026, 1, 9),
    title: 'Car Insurance',
    amount: 294.67
  },
  {
    id: 'id2',
    date: new Date(2025, 5, 12),
    title: 'New Desk (Wooden)',
    amount: 450
  },
  {
    id: 'id3',
    date: new Date(2024, 2, 28),
    title: 'New TV',
    amount: 799.49
  }
  ];


function App() {
  const [expenses, setExpenses] = useState(DYMMY_EXPENSES);
  

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
  });
  };

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App;