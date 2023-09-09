import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../Context/globalContext';
import './expense.css';
import AddExpenseForm from './addForm';
import ExpenseList from './ExpenseList/ExpenseList';

const Expenses = () => {
  const { getExpenses, deleteExpense, user } = useGlobalContext();

  useEffect(() => {
    // Get user epxenses
  }, []);

  const column = [
    { title: 'ID' },
    { title: 'Title' },
    { title: 'Category' },
    { title: 'Amount' },
    { title: 'description' },
    { title: 'date' },
  ];
  const deleteExp = (id) => {
    deleteExpense(id);
  };

  return (
    <div className="">
      <div className=" text-center mt-5 m-5 ">
        <div className="headExp   ">
          <h2>My Expenses</h2>
        </div>
        <div>
          <AddExpenseForm userId={user._id} />
        </div>

        <div className="cakeChart d-flex justify-content-center mt-5 ">
          <ExpenseList />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
