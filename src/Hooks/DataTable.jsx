import React from 'react';
import { Delete } from '@mui/icons-material';
import './dataTable.css';
import { useDeleteExpenseMutation } from '../slices/expenseApiSlice';
import { useDeleteIncomeMutation } from '../slices/incomeApiSlice';
import EditForm from './EditForm';

//  List - list of Expenses or Incomes
//  Date - date of Today
//  actionType - the List type ( 'Income' of 'Expense')
function DataTable({ list, date, actionType }) {
  //! ------{ use RTK Query to Delete Item from the list }
  const [deleteExpense] = useDeleteExpenseMutation();
  const [deleteIncome] = useDeleteIncomeMutation();

  //! ------{  Filter the list by Month and Year }
  const filter = list.filter((item) => {
    let d = new Date(item.date);
    return (
      d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear()
    );
  });

  // ----> Delete Item Function <----
  const handleDelete = async (id) => {
    switch (actionType) {
      case 'income':
        return await deleteIncome(id);

      case 'expense':
        return await deleteExpense(id);

      default:
        return null;
    }
  };

  // ----> Update Item Function <----
  const handleUpdate = async (id) => {
    console.log(id);
  };
  return (
    <>
      <table className="data-table">
        <thead>
          <tr className="header-table">
            <th>Title</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {filter?.map((item) => (
            <tr className=" " key={item._id}>
              <td className="td ">{item.title}</td>
              <td>{item.amount}</td>
              <td>{item.description}</td>
              <td>{item.date}</td>
              <td>
                <div>
                  <EditForm item={item} />
                </div>
              </td>
              <td>
                <button
                  style={{ backgroundColor: 'red' }}
                  className="btn_Upd_dlt"
                  onClick={() => handleDelete(item._id)}
                >
                  <Delete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DataTable;
