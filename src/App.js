import React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import { Outlet, Route, createRoutesFromElements } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Register from 'ViewScreen/HomePages/Register/Register';
import Dashboard from 'ViewScreen/HomePages/Dashborad/Dashborad';
import SignIn from 'ViewScreen/HomePages/SignIn/SignIn';
import Home from 'ViewScreen/HomePages/Home/Home';
import NavbarComp from 'components/navbar/NavbarComp';

import Main from 'ViewScreen/UserDashboard/Main/Main';
import About from 'ViewScreen/HomePages/About/About';
import Footer from 'components/footer/footer';
//? UserDashboard
import Expenses from 'ViewScreen/UserDashboard/Expenses/Expenses';
import Incomes from 'ViewScreen/UserDashboard/Incomes/Incomes';
import Account from 'ViewScreen/UserDashboard/Account/Account.jsx';
import Settings from 'ViewScreen/UserDashboard/Settings/Settings';
import ContactUs from 'ViewScreen/UserDashboard/Contact/ContactUs';
import NotFound from 'Hooks/NotFound';
import PrivateRoute from 'components/PrivateRoute.jsx';

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
      {/* -----> Private Route <------ */}
      <Route path="" element={<PrivateRoute />}>
        {/* Dashborad Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Main />} />
          <Route path="settings" element={<Settings />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="incomes" element={<Incomes />} />
          <Route path="account" element={<Account />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
