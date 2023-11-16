import React, { useState } from 'react';
import IncomesTable from './IncomesTable';
import CalendarYearMonth from '../../../components/Calender/CalendarYearMonth';
import { useSelector } from 'react-redux';
import { useGetAllIncomesQuery } from 'Api/SlicesApi/incomeApiSlice';
import PieActiveArc from 'components/Charts/PieActiveArc';

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
      <div className="row d-flex text-center   ">
        <h1>INCOMES</h1>
        <div style={{ border: '2px solid black' }} className="col col-md-6  ">
          <h2>Monthly View</h2>
          {isLoading ? (
            'Loading'
          ) : (
            <PieActiveArc list={allIncomes} date={date} />
          )}
        </div>

        <div className="col col-md-6  ">
          <CalendarYearMonth onChange={onChange} date={date} />
          <div className="cakeChart d-flex justify-content-center mt-5 ">
            <IncomesTable date={date} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Incomes;
