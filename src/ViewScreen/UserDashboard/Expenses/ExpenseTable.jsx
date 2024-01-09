import React from 'react';
import { useSelector } from 'react-redux';
import { useGetAllExpensesQuery } from 'Api/SlicesApi/expenseApiSlice';

import AddForm from '../../../forms/AddForm';
import { filterByMonthAndYear } from 'Hooks/filterByMonthYear';
import { calculateTotal } from 'Hooks/calculateTotal';
import Loader from 'components/Loader';
import TableView from 'forms/TableView';
import { numberFormat } from 'Hooks/numberFormat';
import ProgressBars from 'components/ProgressBars/ProgressBars';

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

  //?------{  Filter the list by Month and Year }
  const filteredList = filterByMonthAndYear(allExpenses, date);
  //?-----------> {  Calculate Total Amount of filtered Month }
  console.log(filteredList);
  const total = calculateTotal(filteredList);

  return (
    <div className="container">
      <div className="data-box">
        <div className="total d-flex justify-content-around mb-1  ">
          <h3> Total Expenses : {numberFormat(total)} </h3>
          <AddForm actionType={actionType} date={date} />
        </div>
        <TableView list={filteredList} actionType={actionType} />
      </div>
      <ProgressBars list={filteredList} />
    </div>
  );
};

export default ExpenseList;
