import React, { useEffect } from 'react';

import './stats.css';
import { useGlobalContext } from '../../Context/globalContext';

export const Stats = ({ type }) => {
  const { totalExpense, totalIncome } = useGlobalContext();
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
      <h3>{data.title}</h3>
      <div className="data">
        <h4>{data.stats}</h4>
      </div>
    </div>
  );
};
