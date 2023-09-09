import React, { useMemo, useState } from 'react';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.css';
import { Outlet, Route, createRoutesFromElements } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashborad/Dashborad';
import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home';
import NavbarComp from './components/navbar/NavbarComp';
import NavbarApp from './components/navbar/NavbarApp';
import Main from './components/dashManu/Main/Main';
import About from './Pages/About/About';
import Footer from './components/footer/footer';
import Expenses from './components/dashManu/expenses/Expenses';
import Overview from './components/dashManu/overView/Overview';
import Incomes from './components/dashManu/income/Incomes';
import Account from './components/dashManu/account/Account';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

const HomeRoot = () => {
  return (
    <>
      <Toaster position="botton-right" toastOptions={{ duration: 3000 }} />
      {/* <NavbarApp /> */}
      <NavbarComp />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    // Home Routes

    <Route path="/">
      <Route path="/" element={<HomeRoot />}>
        <Route index element={<Home />} />
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
      </Route>
      {/* Dashborad Routes */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<Main />} />
        <Route path="overview" element={<Overview />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="incomes" element={<Incomes />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
