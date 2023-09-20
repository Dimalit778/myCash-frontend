import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../Context/globalContext';
import IncomesTable from './IncomesTable';
import Calendar from 'react-calendar';
import './incomes.css';
// import 'react-calendar/dist/Calendar.css';

const Incomes = () => {
  const { getIncomes } = useGlobalContext();
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div className="incomes  ">
      <div className="react-calendar">
        <Calendar
          maxDetail="year"
          locale="en"
          onChange={onChange}
          defaultActiveStartDate={date}
          value={date}
        />
      </div>
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
