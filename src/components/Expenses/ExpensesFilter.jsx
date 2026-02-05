import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    
    
    const dropdownChangeHandler = (event) => {
        
        const selectedYear = event.target.value;
        
        console.log('ExpensesFilter.jsx (kasutaja valis):', selectedYear);
        
        
        props.onChangeFilter(selectedYear);

    };

    


    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={dropdownChangeHandler}>   
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;