import React, { useEffect } from 'react';

import AddIncomeForm from './AddIncomeForm';
import { useGlobalContext } from '../../../Context/globalContext';

import IncomesTable from './IncomesTable';

const Incomes = () => {
  const { user } = useGlobalContext();

  return (
    <div className="incomes  ">
      <div className="header">
        <h1>Incomes list</h1>
        <AddIncomeForm userId={user._id} />
      </div>
      <div className=" d-flex justify-content-center   ">
        <IncomesTable />
      </div>
    </div>
  );
};

export default Incomes;
