import React from 'react';
import './stats.css';

import ArrowUpIcon from '../../assets/balanceIcons/arrowUpIcon.png';
import ArrowDownIcon from '../../assets/balanceIcons/arrowDownIcon.png';
import BalanceIcon from '../../assets/balanceIcons/balance.png';
import { numberFormat } from 'hooks/numberFormat';

const BalanceStats = ({ total }) => {
  return (
    <>
      {total > 0 ? (
        <div className="statHeader text-center  ">
          <span className="title_Main">Balance</span>
          <div className="balanceUp d-flex  justify-content-around    ">
            <div className="textIcon d-flex  align-items-center ">
              <img src={BalanceIcon} alt="BalanceIcon" />
            </div>
            <div className=" d-flex  align-items-center justify-content-between  ">
              <h4>{numberFormat(total)}</h4>
            </div>
            <div className=" d-flex  align-items-center justify-content-between  ">
              <img src={ArrowUpIcon} alt="ArrowUp" height={80} width={80} />
            </div>
          </div>
        </div>
      ) : (
        <div className="statHeader text-center  ">
          <span className="title_Main">Balance</span>
          <div className="balanceDown d-flex  justify-content-around    ">
            <div className="textIcon d-flex  align-items-center ">
              <img src={BalanceIcon} alt="BalanceIcon" />
            </div>
            <div className=" d-flex  align-items-center justify-content-between  ">
              <h4>{numberFormat(total)}</h4>
            </div>
            <div className=" d-flex  align-items-center justify-content-between  ">
              <img src={ArrowDownIcon} alt="ArrowDown" height={80} width={80} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BalanceStats;
