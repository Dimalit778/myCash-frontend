import React, { useState } from 'react';
import IncomesTable from './IncomesTable';
import CalendarYearMonth from '../../../components/calender/CalendarYearMonth';
import { useSelector } from 'react-redux';
import { useGetAllIncomesQuery } from 'api/slicesApi/incomeApiSlice';
import PieActiveArc from 'components/charts/PieActiveArc';

const Incomes = () => {
  const [date, setDate] = useState(new Date());

  // --------> Calender get Date
  const onChange = (date) => {
    setDate(date);
  };

  const { userInfo } = useSelector((state) => state.auth);
  const {
    data: allIncomes,
    error,
    isLoading,
  } = useGetAllIncomesQuery(userInfo._id);

  if (error) return <div>error..!!</div>;
  return (
    <>
      <div className="row d-flex    ">
        {/*//@ left div */}
        <div className="col col-md-6 text-center p-3 ">
          <h2>Monthly Incomes </h2>
          {isLoading ? (
            'Loading'
          ) : (
            <PieActiveArc list={allIncomes} date={date} />
          )}
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
