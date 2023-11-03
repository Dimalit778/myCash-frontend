import React from 'react';
import { useSelector } from 'react-redux';
import { useGetExpensesQuery } from '../../../slices/expenseApiSlice';
import DataTable from '../../../Hooks/DataTable';
import AddForm from '../../../forms/AddForm';

const ExpenseList = ({ date }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const actionType = 'expense';
  const {
    data: allExpenses,
    error,
    isLoading,
  } = useGetExpensesQuery(userInfo._id);

  if (error) return <div>error..!!</div>;

  return (
    <div className="container">
      <div className="data-box">
        <div className="total d-flex justify-content-between  ">
          {/* <h2> Total Expenses : ${totalExpensesMonth}</h2> */}
          <AddForm actionType={actionType} />
        </div>
        {isLoading ? (
          <>Loading..</>
        ) : (
          <DataTable list={allExpenses} date={date} actionType={actionType} />
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
