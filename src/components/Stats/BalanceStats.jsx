import React from 'react';
import './stats.css';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

const BalanceStats = ({ totalBalance }) => {
  const total = totalBalance();
  //   const isNegative = total < 0;
  //   const balance = isNegative ? -total : total;

  return (
    <>
      {total > 0 ? (
        <div className="balanceUp text-center ">
          <h3>Balance</h3>
          <span className="upDownIcons positive">
            <h4>{total}</h4>
            <ArrowUpwardOutlinedIcon className="iconUpDown" />
          </span>
        </div>
      ) : (
        <div className="balanceDown text-center ">
          <h3>Balance</h3>
          <span className="upDownIcons negative">
            <h4>{-total}</h4>
            <ArrowDownwardOutlinedIcon className="iconUpDown" />
          </span>
        </div>
      )}
    </>
  );
};

export default BalanceStats;
