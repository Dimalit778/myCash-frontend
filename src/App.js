import React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import { Outlet, Route, createRoutesFromElements } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { loader } from './Hooks/Loader.js';

import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashborad/Dashborad';
import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home';
import NavbarComp from './components/navbar/NavbarComp';

import Main from './components/dashManu/Main/Main';
import About from './Pages/About/About';
import Footer from './components/footer/footer';
import Expenses from './components/dashManu/expenses/Expenses';

import Incomes from './components/dashManu/income/Incomes';
import Account from './components/dashManu/account/Account';
import Settings from './components/dashManu/Settings/Settings';
import ContactUs from './components/dashManu/contact/ContactUs';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './utilits/PrivateRoute.jsx';

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
