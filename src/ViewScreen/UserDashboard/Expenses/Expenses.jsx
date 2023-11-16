import React, { useState } from 'react';

import ExpenseTable from './ExpenseTable';
import CalendarYearMonth from 'components/Calender/CalendarYearMonth';
import PieActiveArc from 'components/Charts/PieActiveArc';
import { useSelector } from 'react-redux';
import { useGetAllExpensesQuery } from 'Api/SlicesApi/expenseApiSlice';

const Expenses = () => {
  // --------> Calender get Date
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

  const { userInfo } = useSelector((state) => state.auth);
  const {
    data: allExpenses,
    error,
    isLoading,
  } = useGetAllExpensesQuery(userInfo._id);

  if (error) return <div>error..!!</div>;

  return (
    <>
      <div className="row d-flex  ">
        <div className="col col-md-6 text-center ">
          <h1>Monthly Expenses</h1>
          {isLoading ? (
            'Loading'
          ) : (
            <PieActiveArc list={allExpenses} date={date} />
          )}
        </div>

        <div className="col col-md-6  text-center  ">
          <CalendarYearMonth onChange={onChange} date={date} />
          <div className="cakeChart d-flex justify-content-center mt-5 ">
            <ExpenseTable date={date} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Expenses;
