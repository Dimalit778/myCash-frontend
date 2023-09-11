import React, { useEffect } from 'react';
import { useGlobalContext } from '../../../Context/globalContext';
import { Delete, Edit } from '@mui/icons-material';
import './incomesTable.css';

const IncomesTable = () => {
  const { deleteIncome, getIncomes, incomes } = useGlobalContext();

  const handleDelete = (id) => {
    deleteIncome(id);
  };
  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div className="container">
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
          {incomes.map((income) => (
            <tr className=" bg-body-secondary " key={income._id}>
              <td className="td ">{income.title}</td>
              <td>{income.amount}</td>
              <td>{income.description}</td>
              <td>{income.date}</td>
              <td>
                <button className="btn_Updade ">
                  <Edit />
                </button>
              </td>
              <td>
                <button
                  className="btn_Delete "
                  onClick={() => handleDelete(income._id)}
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

export default IncomesTable;
