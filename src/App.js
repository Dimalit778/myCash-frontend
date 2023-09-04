import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashborad/Dashborad';
import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home';
import NavbarComp from './components/navbar/NavbarComp';
import Footer from './components/footer/footer';
import Expenses from './components/dashManu/expenses/Expenses';
import Overview from './components/dashManu/overView/Overview';
import Incomes from './components/dashManu/income/Incomes';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <NavbarComp />
      {/* Get the errors message from server side */}
      <Toaster position="botton-right" toastOptions={{ duration: 3000 }} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashborad" element={<Dashboard />}>
          <Route path="/dashborad/overview" element={<Overview />} />
          <Route path="/dashborad/expenses" element={<Expenses />} />
          <Route path="/dashborad/incomes" element={<Incomes />} />
          {/* <Route path=":/account" element={<Aco />} /> */}
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
