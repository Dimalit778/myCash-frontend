import React from 'react';
import { useSelector } from 'react-redux';
import { useGetAllExpensesQuery } from '../../../slices/expenseApiSlice';
import DataTable from '../../../Hooks/DataTable';
import AddForm from '../../../forms/AddForm';
import { filterByMonthAndYear } from '../../../utilits/filterByMonthYear';
import { calculateTotal } from '../../../utilits/calculteTotal';
import Loader from '../../../utilits/Loader';

const ExpenseList = ({ date }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const actionType = 'expense';
  const {
    data: allExpenses,
    error,
    isLoading,
  } = useGetAllExpensesQuery(userInfo._id);

  if (error) return <div>error..!!</div>;
  if (isLoading) return <Loader />;

  // //! ------{  Filter the list by Month and Year }
  const filteredList = filterByMonthAndYear(allExpenses, date);
  //-----------> {  Calculate Total Amount of filtered Month }
  const total = calculateTotal(filteredList);

  return (
    <div className="container">
      <div className="data-box">
        <div className="total d-flex justify-content-between  ">
          <h3> Total Expenses : {total} </h3>
          <AddForm actionType={actionType} />
        </div>

        <DataTable list={filteredList} actionType={actionType} />
      </div>
    </div>
  );
};

export default ExpenseList;
