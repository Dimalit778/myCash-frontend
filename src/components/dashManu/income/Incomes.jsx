import React, { useEffect, useState } from 'react';
import AddIncomeForm from './AddIncomeForm';
import { useGlobalContext } from '../../../Context/globalContext';
import IncomesTable from './IncomesTable';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Incomes = () => {
  const { totalIncome, getIncomes } = useGlobalContext();
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div className="incomes  ">
      <Calendar maxDetail="year" locale="en" onChange={onChange} value={date} />
      <div className="header">
        <h1>${totalIncome()}</h1>
        <h1>Incomes list</h1>
        <AddIncomeForm />
      </div>
      <div className=" d-flex justify-content-center   ">
        <IncomesTable date={date} />
      </div>
    </div>
  );
};

export default Incomes;
