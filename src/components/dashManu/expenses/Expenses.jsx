import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../Context/globalContext';
import './expense.css';
import AddExpenseForm from './addForm';
import ExpenseTable from './ExpenseTable';

import Calendar from 'react-calendar';

const Expenses = () => {
  const { getExpenses } = useGlobalContext();

  useEffect(() => {
    // Get user epxenses
    getExpenses();
  }, []);

  // -------->Calender get Date
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="">
      <div className="headExp ">
        <h2>My Expenses</h2>
      </div>
      <div className="react-calendar">
        <Calendar
          maxDetail="year"
          locale="en"
          onChange={onChange}
          defaultActiveStartDate={date}
          value={date}
        />
      </div>
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
