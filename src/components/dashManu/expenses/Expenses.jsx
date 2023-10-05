import React, { useState } from 'react';

import ExpenseTable from './ExpenseTable';
import CalendarYearMonth from '../../calendar/CalendarYearMonth';

const Expenses = () => {
  // --------> Calender get Date
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="">
      <div className="headExp ">
        <h2>My Expenses</h2>
      </div>
      <CalendarYearMonth onChange={onChange} date={date} />
      <div className=" text-center mt-5 m-5 ">
        <div className="cakeChart d-flex justify-content-center mt-5 ">
          <ExpenseTable date={date} />
        </div>
        <div className="pieChart">
          {/* <PieActiveArc chartData={expenses} /> */}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
