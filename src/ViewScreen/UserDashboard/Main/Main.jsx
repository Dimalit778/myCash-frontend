import React from 'react';
// import { Stats } from '../../../components/Stats/Stats';

// import BalanceStats from '../../../components/Stats/BalanceStats';
// import LineChart from '../../../components/Charts/LineChart';

const Main = () => {
  return (
    <div className="container min-vh-100 m-5 ">
      <div className="row   ">
        <div className="col-lg-4 col-xs-12  ">
          {/* <Stats type="expenses" /> */}
        </div>
        <div className="col-lg-4 col-xs-12">{/* <BalanceStats /> */}</div>
        <div className="col-lg-4 col-xs-12">
          {/* <Stats type="incomes" /> */}
        </div>
      </div>

      <div className=" d-flex justify-content-center mt-5   ">
        {/* <LineChart /> */}
      </div>
    </div>
  );
};

export default Main;
