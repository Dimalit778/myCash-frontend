import React, { useEffect } from 'react';
import { Stats, totalBalance } from '../../Stats/Stats';

import { useGlobalContext } from '../../../Context/globalContext';
import BalanceStats from '../../Stats/BalanceStats';
import LineChart from '../../Charts/LineChart';

const Main = () => {
  const { getExpenses, getIncomes, totalBalance, incomes } = useGlobalContext();

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

      <div className=" d-flex justify-content-center   ">
        <LineChart />
      </div>
    </div>
  );
};

export default Main;
