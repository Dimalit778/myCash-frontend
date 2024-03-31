import React, { useState } from 'react';

import ExpenseTable from './ExpenseTable';
import CalendarYearMonth from 'components/calender/CalendarYearMonth';
import PieActiveArc from 'components/charts/PieActiveArc';
import { useGetAllExpensesQuery } from 'api/slicesApi/expenseApiSlice';

import Loader from 'components/Loader';

const Expenses = () => {
  // --------> Calender get Date
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const { data: allExpenses, isLoading } = useGetAllExpensesQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="row d-flex     ">
          {/* { -- { Pie Chart } -- */}
          {/*//@ left div */}
          <div className="col col-md-6 text-center p-3  ">
            <h2>Monthly Expenses</h2>

            <PieActiveArc list={allExpenses} date={date} />
          </div>
          {/*//@ right div */}
          <div className="col col-md-6  text-center  ">
            <CalendarYearMonth onChange={onChange} date={date} />
            <div className="d-flex justify-content-center mt-4 ">
              <ExpenseTable date={date} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Expenses;
