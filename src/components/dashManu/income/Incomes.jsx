import React, { useEffect } from 'react';

import AddIncomeForm from './AddIncomeForm';
import { useGlobalContext } from '../../../Context/globalContext';
import IncomesTable from './IncomesTable';

const Incomes = () => {
  const { totalIncome, getIncomes } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div className="incomes  ">
      <div className="header">
        <h1>${totalIncome()}</h1>
        <h1>Incomes list</h1>
        <AddIncomeForm />
      </div>
      <div className=" d-flex justify-content-center   ">
        <IncomesTable />
      </div>
    </div>
  );
};

export default Incomes;
