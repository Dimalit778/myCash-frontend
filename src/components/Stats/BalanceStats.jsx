import React from 'react';
import './stats.css';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

const BalanceStats = ({ totalBalance }) => {
  const total = totalBalance();
  //   const isNegative = total < 0;
  //   const balance = isNegative ? -total : total;

  return (
    <div className="stats text-center ">
      <h2>Balance</h2>
      {total > 0 ? (
        <span className="upDownIcons positive">
          <p>positive</p>
          <h3>{total}</h3>
          <ArrowUpwardOutlinedIcon className="iconUpDown" />
        </span>
      ) : (
        <span className="upDownIcons negative">
          <p>negative</p>
          <h3>{-total}</h3>
          <ArrowDownwardOutlinedIcon className="iconUpDown" />
        </span>
      )}
    </div>
  );
};

export default BalanceStats;
