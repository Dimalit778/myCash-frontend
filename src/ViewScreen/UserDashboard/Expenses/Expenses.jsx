import React, { useState } from 'react';

import ExpenseTable from './ExpenseTable';
import CalendarYearMonth from 'components/Calender/CalendarYearMonth';
import PieActiveArc from 'components/Charts/PieActiveArc';
import { useSelector } from 'react-redux';
import { useGetAllExpensesQuery } from 'Api/SlicesApi/expenseApiSlice';
import { PayPalButtons } from '@paypal/react-paypal-js';

const Expenses = () => {
  // --------> Calender get Date
  const [date, setDate] = useState(new Date());
  console.log(date);
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
        <div className="col col-md-6 text-center p-5  ">
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
          <div className="d-flex justify-content-center mt-5 ">
            <ExpenseTable date={date} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Expenses;
