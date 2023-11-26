import React from 'react';
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

const Main = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const { data: allExpenses } = useGetAllExpensesQuery(userInfo._id);
  const { data: allIncomes } = useGetAllIncomesQuery(userInfo._id);

  if (!allExpenses && allIncomes) return <Loader />;

  let expenses = 0;
  let incomes = 0;

  if (allExpenses) expenses = calculateTotal(allExpenses);
  if (allIncomes) incomes = calculateTotal(allIncomes);
  let total = totalBalance(expenses, incomes);
  // Convert to Number Format with $
  expenses = numberFormat(expenses);
  incomes = numberFormat(incomes);

  return (
    <div className="container min-vh-100 ">
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
        <LineChart allExpenses={allExpenses} allIncomes={allIncomes} />
      </div>
    </div>
  );
};

export default Main;
