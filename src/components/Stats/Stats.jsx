import React, { useEffect } from 'react';

import './stats.css';
import { useGlobalContext } from '../../Context/globalContext';

export const Stats = ({ type }) => {
  const { totalExpense, totalIncome, totalBalance } = useGlobalContext();
  let data;
  switch (type) {
    case 'expenses':
      data = {
        title: 'Expenses',
        stats: totalExpense(),
      };
      break;
    case 'incomes':
      data = {
        title: 'Encomes',
        stats: totalIncome(),
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
      </div>
    </div>
  );
};
