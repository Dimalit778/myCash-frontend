import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './chart.css';

const Chart = () => {
  return (
    <div className="chart d-flex flex-column  ">
      <div className="topChart d-flex justify-content-center  ">
        <h1 className="title ">total</h1>
      </div>
      {/* <div className="bottomChart">
        <CircularProgressbar className="bar" value={70} text={'70%'} />
      </div> */}
    </div>
  );
};

export default Chart;
