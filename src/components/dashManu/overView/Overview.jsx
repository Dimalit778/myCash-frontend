import React, { useEffect } from 'react';
// import Calender from '../../calendar/Calender';
// import { useGlobalContext } from '../../../Context/globalContext';
// import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
// import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import './overview.css';
import Stats from '../../Stats/Stats';
import Chart from '../../Charts/Chart';
const Overview = () => {
  return (
    <div className="dashbord  m-5 ">
      <div className="AllStats d-flex gap-5 ">
        <Stats type="total" />
        <Stats type="expenses" />
        <Stats type="incomes" />
      </div>
      <div className="charts">
        <Chart />
      </div>
    </div>
  );
};

export default Overview;
