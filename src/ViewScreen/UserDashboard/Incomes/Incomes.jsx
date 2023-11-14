import React, { useState } from 'react';
import IncomesTable from './IncomesTable';
import CalendarYearMonth from '../../../components/calendar/CalendarYearMonth';

const Incomes = () => {
  const [date, setDate] = useState(new Date());

  // --------> Calender get Date
  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="incomes  ">
      <CalendarYearMonth onChange={onChange} date={date} />
      <div className="header">
        <h1>Incomes list</h1>
      </div>
      <div className=" d-flex justify-content-center   ">
        <IncomesTable date={date} />
      </div>
    </div>
  );
};

export default Incomes;
