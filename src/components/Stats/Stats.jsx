import React, { useEffect } from 'react';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import './stats.css';

const Stats = ({ type, totalExp, totalInc, TotalCash }) => {
  let data;
  switch (type) {
    case 'total':
      data = {
        title: 'Total',
        stats: TotalCash,
      };
      break;
    case 'expenses':
      data = {
        title: 'Expenses',
        stats: totalExp,
      };
      break;
    case 'incomes':
      data = {
        title: 'Encomes',
        stats: totalInc,
      };
      break;
    default:
      break;
  }
  return (
    <div className="stats text-center ">
      <span>{data.title}</span>
      <div className="data">
        <div>{data.stats}</div>
        <span className="upDownIcons positive">
          <ArrowDownwardOutlinedIcon fontSize="large" />
        </span>
      </div>
    </div>
  );
};

export default Stats;
