import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses'

const ExpenseList = (props) => {  
    return (
    <div>
    <h1>Hello</h1>
    {
        props.expenses.map((item, index) => (
         <ExpenseListItem 
           key = {item.id}
           id = {item.id}
           description = {item.description} 
           amount= {item.amount}
           createdAt= {item.createdAt}
           />
        ))
    }

  </div>
  )
}

const mapStatetoProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}


export default connect(mapStatetoProps)(ExpenseList);