import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../Context/globalContext';
import IncomesTable from './IncomesTable';
import './incomes.css';
import CalendarYearMonth from '../../calendar/CalendarYearMonth';

const Incomes = () => {
  const { getIncomes } = useGlobalContext();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Get user incomes
    getIncomes();
  }, []);

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
