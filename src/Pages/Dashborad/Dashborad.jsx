import React, { useEffect, useState } from 'react';
import DashSidenav from '../../components/sidenav/DashSidenav';
import './dashborad.css';
import { useGlobalContext } from '../../Context/globalContext.js';
import { Outlet } from 'react-router-dom';
import SideNav from '../../components/sidenav/SideNav';

const Dashborad = () => {
  const { totalExpense } = useGlobalContext();

  useEffect(() => {}, [totalExpense]);

  return (
    <>
      <div className="d-flex ">
        {/* <DashSidenav /> */}
        <SideNav />
        <main className=" w-100 ">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Dashborad;
