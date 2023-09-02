import React from 'react';
import Calender from '../../calendar/Calender';
import { useGlobalContext } from '../../../Context/globalContext';

const Overview = () => {
  const { totalExpense } = useGlobalContext();
  return (
    <div className="dashbord  m-5 ">
      <div className="overview d-flex justify-content-center  ">
        <div className="overViewDetails">
          <div className="date">
            <div className="dateSection text-center ">
              <Calender />
            </div>
          </div>
          <div className="row text-center   ">
            <div className="col">
              <p>income: </p>
              <p>expenss : $ {totalExpense()} </p>
            </div>
            <div className="col">
              <h3>Status :</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
