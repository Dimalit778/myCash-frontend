import React, { useEffect } from 'react';
import { Stats, totalBalance } from '../../Stats/Stats';
import Chart from '../../Charts/Chart';
import { useGlobalContext } from '../../../Context/globalContext';
import BalanceStats from '../../Stats/BalanceStats';

const Main = () => {
  const { getUserData, getExpenses, getIncomes, totalBalance } =
    useGlobalContext();

  useEffect(() => {
    getUserData();
    getExpenses();
    getIncomes();
  }, []);

  return (
    <div className="dashbord  m-5 ">
      <div className=" d-flex gap-5 ">
        <Stats type="expenses" />
        <BalanceStats totalBalance={totalBalance} />
        <Stats type="incomes" />
      </div>

      <div className="charts mt-4">
        <Chart />
      </div>
    </div>
  );
};

export default Main;
