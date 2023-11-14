import React, { useState } from 'react';

import ExpenseTable from './ExpenseTable';
import CalendarYearMonth from 'components/calendar/CalendarYearMonth';

const Expenses = () => {
  // --------> Calender get Date
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

  return (
    <>
      <div className="row d-flex  ">
        <div className="col col-md-6 ">
          <h1>Charts</h1>
        </div>

        <div className="col col-md-6  text-center  ">
          <CalendarYearMonth onChange={onChange} date={date} />
          <div className="cakeChart d-flex justify-content-center mt-5 ">
            <ExpenseTable date={date} />
          </div>
          <div className="pieChart">
            {/* <PieActiveArc chartData={expenses} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expenses;
