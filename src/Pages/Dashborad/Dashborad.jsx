import React, { useEffect, useState } from 'react';
import DashSidenav from '../../components/sidenav/DashSidenav';
import './dashborad.css';
// import AddModel from '../../models/addModel';
// import GetCategories from '../../helpers/categoriesList/GetCategories';
import Overview from '../../components/dashManu/overView/Overview';
import Expenses from '../../components/dashManu/expenses/Expenses';
import Incomes from '../../components/dashManu/income/Incomes';
import Account from '../../components/dashManu/account/Account';
import { useGlobalContext } from '../../Context/globalContext.js';

const Dashborad = () => {
  const { getUserData, user, totalExpense } = useGlobalContext();
  const [active, setActive] = useState('');

  useEffect(() => {}, [totalExpense]);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Overview />;
      case 2:
        return <Expenses />;
      case 3:
        return <Incomes />;
      case 4:
        return <Account />;
      default:
        return <Overview />;
    }
  };
  return (
    <>
      <div className="d-flex ">
        <DashSidenav active={active} setActive={setActive} />
        <main className=" w-100 ">{displayData()}</main>
      </div>
    </>
  );
};

export default Dashborad;
