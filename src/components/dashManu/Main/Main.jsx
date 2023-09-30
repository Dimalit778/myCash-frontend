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
    <div className="container min-vh-100 m-5 ">
      <div className="row   ">
        <div className="col-lg-4 col-xs-12  ">
          <Stats type="expenses" />
        </div>
        <div className="col-lg-4 col-xs-12">
          <BalanceStats totalBalance={totalBalance} />
        </div>
        <div className="col-lg-4 col-xs-12">
          <Stats type="incomes" />
        </div>
      </div>

      <div className=" d-flex justify-content-center mt-5   ">
        <LineChart />
      </div>
    </div>
  );
};

export default Main;
