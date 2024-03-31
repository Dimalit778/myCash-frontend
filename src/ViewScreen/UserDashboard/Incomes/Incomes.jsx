import React, { useState } from 'react';
import IncomesTable from './IncomesTable';
import CalendarYearMonth from '../../../components/calender/CalendarYearMonth';

import { useGetAllIncomesQuery } from 'api/slicesApi/incomeApiSlice';
import PieActiveArc from 'components/charts/PieActiveArc';
import Loader from 'components/Loader';

const Incomes = () => {
  const [date, setDate] = useState(new Date());

  // --------> Calender get Date
  const onChange = (date) => {
    setDate(date);
  };

  const {
    data: allIncomes,

    isLoading,
  } = useGetAllIncomesQuery();
  if (isLoading) return <Loader />;

  return (
    <>
      <div className="row d-flex    ">
        {/*//@ left div */}
        <div className="col col-md-6 text-center p-3 ">
          <h2>Monthly Incomes </h2>

          <PieActiveArc list={allIncomes} date={date} />
        </div>
        {/*//@ right div */}
        <div className="col col-md-6  text-center  ">
          <CalendarYearMonth onChange={onChange} date={date} />
          <div className="d-flex justify-content-center mt-4">
            <IncomesTable date={date} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Incomes;
