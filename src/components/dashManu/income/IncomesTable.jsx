import React, { useEffect } from 'react';
import { useGlobalContext } from '../../../Context/globalContext';
import { Delete, Edit } from '@mui/icons-material';
import './income_Table.css';
import AddIncomeForm from './AddIncomeForm';
import { useSelector } from 'react-redux';
import { useGetIncomesQuery } from '../../../slices/incomeApiSlice';

const IncomesTable = ({ date }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const { data: allIncomes } = useGetIncomesQuery(userInfo._id);
  useEffect(() => {}, [date]);
  console.log(allIncomes);
  // ----> Delete Income Function <----
  const handleDelete = (id) => {
    // deleteIncome(id);
  };
  // -----> Filter the incomes by month and year <-------- //
  const filterd = allIncomes.filter((income) => {
    const d = new Date(income.date);
    return (
      d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear()
    );
  });
  // -----> Get total incomes by month <-------- //
  // const totalIncomesMonth = totalIncomeByMonth(filterd);

  return (
    <div className="container">
      <div className="income_Box">
        <div className="total d-flex justify-content-between  ">
          {/* <h2> Total incomes : ${totalIncomesMonth}</h2> */}
          <AddIncomeForm />
        </div>
        <table className="income-table">
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
            {filterd.map((income) => (
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
                    className="btn_Delete  "
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
    </div>
  );
};

export default IncomesTable;
