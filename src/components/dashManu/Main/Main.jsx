import React, { useEffect } from 'react';
import { Stats, totalBalance } from '../../Stats/Stats';
import Chart from '../../Charts/Chart';
import { useGlobalContext } from '../../../Context/globalContext';
import BalanceStats from '../../Stats/BalanceStats';

const Main = () => {
  const { getExpenses, getIncomes, totalBalance } = useGlobalContext();

  useEffect(() => {
    getExpenses();
    getIncomes();
  }, []);

  return (
    <div className="dashbord min-vh-100 m-5 ">
      <div className="row gap-5  ">
        <div className="col">
          <Stats type="expenses" />
        </div>
        <div className="col">
          <BalanceStats totalBalance={totalBalance} />
        </div>
        <div className="col">
          <Stats type="incomes" />
        </div>
      </div>

      <div className="charts  mt-4">
        <Chart />
      </div>
    </div>
  );
};

export default Main;
