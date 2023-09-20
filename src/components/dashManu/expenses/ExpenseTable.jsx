import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useGlobalContext } from '../../../Context/globalContext';
import UserActions from '../../DataTable/UserActions';
import AddExpenseForm from './addForm';
import { Delete, Edit } from '@mui/icons-material';

const columns = [
  { id: 'title', label: 'Name', minWidth: 170 },
  { id: 'category', label: 'Category', minWidth: 100 },
  { id: 'amount', label: 'Amount', minWidth: 100 },
  { id: 'description', label: 'Description', minWidth: 100 },
  { id: 'date', label: 'Date', minWidth: 100 },
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 200,
    renderCell: (params) => <UserActions {...{ params }} />,
  },
];

const ExpenseList = ({ date }) => {
  const { expenses, getExpenses, deleteExpense, totalExpenseByMonth } =
    useGlobalContext();

  useEffect(() => {
    // Get user epxenses
    getExpenses();
  }, [date]);

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
      <div className="total d-flex justify-content-between  ">
        <h2> Total Expenses : ${totalExpensesMonth}</h2>
        <AddExpenseForm />
      </div>
      <table className="table">
        <thead className="tableHeader">
          <tr className="">
            <th>Title</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="">
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
  );
};

export default ExpenseList;
