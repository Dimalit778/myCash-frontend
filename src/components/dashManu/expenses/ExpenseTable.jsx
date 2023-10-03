import React, { useEffect } from 'react';

import { useGlobalContext } from '../../../Context/globalContext';
import AddExpenseForm from './addForm';
import { Delete, Edit } from '@mui/icons-material';
import './expenses_Table.css';

const ExpenseList = ({ date }) => {
  const { expenses, getExpenses, deleteExpense, totalExpenseByMonth } =
    useGlobalContext();

  useEffect(() => {
    // Get user epxenses
    getExpenses();
  }, [date]);

  // ----> Delete Expense Function <----
  const handleDelete = (id) => {
    deleteExpense(id);
  };

  // -----> Filter the incomes by month and year <-------- //
  const filterd = expenses.filter((expense) => {
    const d = new Date(expense.date);
    return (
      d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear()
    );
  });
  // -----> Get total expenses by month <-------- //
  const totalExpensesMonth = totalExpenseByMonth(filterd);

  return (
    <div className="container">
      <div className="expenses_Box">
        <div className="total d-flex justify-content-between  ">
          <h2> Total Expenses : ${totalExpensesMonth}</h2>
          <AddExpenseForm />
        </div>
        <table className="expense-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {filterd.map((expense) => (
              <tr className=" bg-body-secondary " key={expense._id}>
                <td className="td ">{expense.title}</td>
                <td>{expense.amount}</td>
                <td>{expense.description}</td>
                <td>{expense.date}</td>
                <td>
                  <button className="btn_Updade ">
                    <Edit />
                  </button>
                </td>
                <td>
                  <button
                    className="btn_Delete "
                    onClick={() => handleDelete(expense._id)}
                  >
                    <Delete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
