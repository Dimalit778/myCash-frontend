import React, { useState } from 'react';
import { Stats } from 'components/Stats/Stats';

import BalanceStats from 'components/Stats/BalanceStats';
import { useSelector } from 'react-redux';
import { useGetAllExpensesQuery } from 'Api/SlicesApi/expenseApiSlice';
import { useGetAllIncomesQuery } from 'Api/SlicesApi/incomeApiSlice';
import Loader from 'components/Loader';
import { calculateTotal } from 'Hooks/calculateTotal';
import { totalBalance } from 'Hooks/totalBalance';
import { numberFormat } from 'Hooks/numberFormat';
import LineChart from 'components/Charts/LineChart';
import { filterByYear } from 'Hooks/filterByYear';

const Main = () => {
  // User info
  const { userInfo } = useSelector((state) => state.auth);
  // Year Date
  const currentYear = new Date();
  const year = `${currentYear.getFullYear()}`;
  const yearNum = parseInt(year);
  const [chosenYear, setChosenYear] = useState(yearNum);
  const prev = '<<';
  const next = '>>';

  // Get data from Database
  const { data: allExpenses } = useGetAllExpensesQuery(userInfo._id);
  const { data: allIncomes } = useGetAllIncomesQuery(userInfo._id);
  // Loader comp until we get the data
  if (!allExpenses && allIncomes) return <Loader />;

  let expenses = 0;
  let incomes = 0;
  let expenses_list = [];
  let incomes_list = [];

  // Filter the data by the selected year
  if (allExpenses) expenses_list = filterByYear(allExpenses, chosenYear);
  if (allIncomes) incomes_list = filterByYear(allIncomes, chosenYear);

  // Get total amount of the list
  expenses = calculateTotal(expenses_list);
  incomes = calculateTotal(incomes_list);
  let total = totalBalance(expenses, incomes);
  // Convert to Number Format with $
  expenses = numberFormat(expenses);
  incomes = numberFormat(incomes);

  return (
    <div className="container min-vh-100 ">
      {/* --> Year Selection <-- */}
      <div className="d-flex justify-content-center p-2   ">
        <div
          style={{
            backgroundColor: '#FF6F61',
            border: '2px solid #2F4F4F',
            width: '50vw',
          }}
          className=" d-flex gap-3 p-2 justify-content-around     "
        >
          {/* -- PREV BUTTON -- */}
          <div
            style={{
              backgroundColor: '#E9897E',
              border: '1px solid black',
              cursor: 'pointer',
              borderRadius: '15px',
              padding: '0px 5px 0px 5px',
            }}
            onClick={() => setChosenYear(chosenYear - 1)}
          >
            <h1>{prev}</h1>
          </div>
          {/* -- YEAR TEXT -- */}
          <div style={{ color: '#2F4F4F' }}>
            <h1>{chosenYear}</h1>
          </div>
          {/* -- NEXT BUTTON -- */}
          <div
            style={{
              backgroundColor: '#E9897E',
              border: '1px solid black',
              cursor: 'pointer',
              borderRadius: '15px',
              padding: '0px 5px 0px 5px',
            }}
            onClick={() => setChosenYear(chosenYear + 1)}
          >
            <h1>{next}</h1>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-4 col-xs-12  ">
          <Stats type="expenses" expenses={expenses} />
        </div>
        <div className="col-lg-4 col-xs-12">
          <BalanceStats total={total} />
        </div>
        <div className="col-lg-4 col-xs-12">
          <Stats type="incomes" incomes={incomes} />
        </div>
      </div>

      <div
        style={{
          border: '1px solid black',
        }}
        className=" d-flex justify-content-center mt-3   "
      >
        <LineChart allExpenses={expenses_list} allIncomes={incomes_list} />
      </div>
    </div>
  );
};

export default Main;
