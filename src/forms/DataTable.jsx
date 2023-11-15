import React from 'react';
import { Delete } from '@mui/icons-material';
import './dataTable.css';
import { useDeleteExpenseMutation } from 'Api/SlicesApi/expenseApiSlice';
import { useDeleteIncomeMutation } from 'Api/SlicesApi/incomeApiSlice';
import EditForm from './EditForm';

import { numberFormat } from 'Hooks/numberFormat';

//  List - list of Expenses or Incomes
//  actionType - the List type ( 'Income' of 'Expense')
function DataTable({ list, actionType }) {
  //! ------{ use RTK Query to Delete Item from the list }
  const [deleteExpense] = useDeleteExpenseMutation();
  const [deleteIncome] = useDeleteIncomeMutation();

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

  return (
    <>
      <table className="data-table">
        <thead>
          <tr className="header-table">
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {list?.map((item) => (
            <tr className=" " key={item._id}>
              <td className="td ">{item.title}</td>
              <td>{numberFormat(item.amount)}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>{item.date}</td>
              <td>
                <div>
                  <EditForm item={item} actionType={actionType} />
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
