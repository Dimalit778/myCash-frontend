import React, { useState } from 'react';
import { Stats } from 'components/stats/Stats';
import './mainPage.css';

import BalanceStats from 'components/stats/BalanceStats';
import { useGetAllExpensesQuery } from 'api/slicesApi/expenseApiSlice';
import { useGetAllIncomesQuery } from 'api/slicesApi/incomeApiSlice';
import Loader from 'components/Loader';
import { calculateTotal } from 'hooks/calculateTotal';
import { totalBalance } from 'hooks/totalBalance';
import { numberFormat } from 'hooks/numberFormat';
import LineChart from 'components/charts/LineChart';
import { filterByYear } from 'hooks/filterByYear';

const Main = () => {
  // Year Date
  const currentYear = new Date();
  const year = `${currentYear.getFullYear()}`;
  const yearNum = parseInt(year);
  const [chosenYear, setChosenYear] = useState(yearNum);
  const prev = '<<';
  const next = '>>';

  // Get data from Database
  const { data: allExpenses, isLoading: loadExpenses } =
    useGetAllExpensesQuery();
  const { data: allIncomes, isLoading: loadIncomes } = useGetAllIncomesQuery();
  // Loader comp until we get the data
  if (loadIncomes || loadExpenses) return <Loader />;

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
      <div className=" d-flex justify-content-center pt-2 ">
        <div className="yearHeader d-flex gap-2  justify-content-around">
          <div
            className="yearBtn"
            onClick={() => setChosenYear(chosenYear - 1)}
          >
            <h2>{prev}</h2>
          </div>

          <div>
            <h1>{chosenYear}</h1>
          </div>
          <div
            className="yearBtn"
            onClick={() => setChosenYear(chosenYear + 1)}
          >
            <h2>{next}</h2>
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
        className="mt-3"
      >
        <LineChart allExpenses={expenses_list} allIncomes={incomes_list} />
      </div>
    </div>
  );
};

export default Main;
