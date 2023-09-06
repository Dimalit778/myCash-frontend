import React from 'react';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import './stats.css';
const Stats = ({ type }) => {
  let data;
  switch (type) {
    case 'total':
      data = {
        title: 'Total',
      };
      break;
    case 'expenses':
      data = {
        title: 'Expenses',
      };
      break;
    case 'incomes':
      data = {
        title: 'Encomes',
      };
      break;
    default:
      break;
  }
  return (
    <div className="stats text-center ">
      <span>{data.title}</span>
      <div className="data">
        <div>1000</div>
        <span className="upDownIcons positive">
          <ArrowDownwardOutlinedIcon fontSize="large" />
        </span>
      </div>
    </div>
  );
};

export default Stats;
