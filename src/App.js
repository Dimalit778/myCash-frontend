import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Outlet, Route, createRoutesFromElements } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashborad/Dashborad';
import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import NavbarComp from './components/navbar/NavbarComp';
import Footer from './components/footer/footer';
import Expenses from './components/dashManu/expenses/Expenses';
import Overview from './components/dashManu/overView/Overview';
import Incomes from './components/dashManu/income/Incomes';
import Account from './components/dashManu/account/Account';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

const Root = () => {
  return (
    <>
      <Toaster position="botton-right" toastOptions={{ duration: 3000 }} />

      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    // Home Routes
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="login" element={<SignIn />} />
      <Route path="register" element={<Register />} />
      <Route path="about" element={<About />} />
      {/* Dashborad Routes */}

      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Overview />} />
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/expenses" element={<Expenses />} />
        <Route path="/dashboard/incomes" element={<Incomes />} />
        <Route path="/dashboard/account" element={<Account />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
