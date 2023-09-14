import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../Context/globalContext';
import './expense.css';
import AddExpenseForm from './addForm';
import ExpenseList from './ExpenseList/ExpenseList';
import PieActiveArc from '../../Charts/PieActiveArc';

const Expenses = () => {
  const { getExpenses, totalExpense } = useGlobalContext();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    // Get user epxenses
    getExpenses();
  }, []);

  return (
    <div className="">
      <div className=" text-center mt-5 m-5 ">
        <div className="headExp   ">
          <h2>My Expenses</h2>
          <h3>
            Total :<span> ${totalExpense()}</span>
          </h3>
        </div>
        <div>
          <AddExpenseForm />
        </div>

        <div className="cakeChart d-flex justify-content-center mt-5 ">
          <ExpenseList />
        </div>
        <div className="pieChart">
          {/* <PieActiveArc chartData={expenses} /> */}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
