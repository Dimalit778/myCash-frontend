import React, { useEffect } from 'react';
import Stats from '../../Stats/Stats';
import Chart from '../../Charts/Chart';
import { useGlobalContext } from '../../../Context/globalContext';

const Main = () => {
  const { getExpenses, expenses, totalExp, totalInc, totalCash } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div className="dashbord  m-5 ">
      <div className="AllStats d-flex gap-5 ">
        <Stats type="total" totalCash={totalCash} />
        <Stats type="expenses" totalExp={totalExp} />
        <Stats type="incomes" totalInc={totalInc} />
      </div>
      <div className="charts mt-4">
        <Chart />
      </div>
    </div>
  );
};

export default Main;
