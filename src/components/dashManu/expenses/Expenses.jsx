import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../Context/globalContext';
import './expense.css';
import AddExpenseForm from './addForm';
import ExpenseList from './ExpenseList/ExpenseList';
import PieActiveArc from '../../Charts/PieActiveArc';

const Expenses = () => {
  const { getExpenses, deleteExpense, user, expenses } = useGlobalContext();

  useEffect(() => {
    // Get user epxenses
    getExpenses();
  }, []);
  //  שגיאה לא עובד למטה
  const [chartData, setChartData] = useState({
    lables: expenses.map((data) => data.title),
    datasets: [
      {
        lables: 'Amount',
        data: expenses.map((data) => data.amount),
      },
    ],
  });

  // const column = [
  //   { title: 'ID' },
  //   { title: 'Title' },
  //   { title: 'Category' },
  //   { title: 'Amount' },
  //   { title: 'description' },
  //   { title: 'date' },
  // ];
  // const deleteExp = (id) => {
  //   deleteExpense(id);
  // };

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
        <div className="pieChart">
          <PieActiveArc chartData={expenses} />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
