import React, { useState } from 'react';

import ExpenseTable from './ExpenseTable';
import CalendarYearMonth from 'components/Calender/CalendarYearMonth';
import PieActiveArc from 'components/Charts/PieActiveArc';
import { useSelector } from 'react-redux';
import { useGetAllExpensesQuery } from 'Api/SlicesApi/expenseApiSlice';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { ProgressBar } from 'react-bootstrap';
import ProgressBars from 'components/ProgressBars/ProgressBars';

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
      <div className="row d-flex     ">
        {/* { -- { Pie Chart } -- */}
        {/*//@ left div */}
        <div className="col col-md-6 text-center p-3  ">
          <h2>Monthly Expenses</h2>
          {isLoading ? (
            'Loading'
          ) : (
            <PieActiveArc list={allExpenses} date={date} />
          )}
          {/* <PayPalButtons /> */}
        </div>
        {/*//@ right div */}
        <div className="col col-md-6  text-center  ">
          <CalendarYearMonth onChange={onChange} date={date} />
          <div className="d-flex justify-content-center mt-4 ">
            <ExpenseTable date={date} />
          </div>
        </div>
      </div>
      {/* <ProgressBars props={{ bgcolor: 'red', completed: 60 }} /> */}
    </>
  );
};

export default Expenses;
