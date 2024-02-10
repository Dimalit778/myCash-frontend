import React from 'react';
import './app.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Outlet, Route, createRoutesFromElements } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
//@---> Home Pages -->
import Register from 'viewScreen/homePages/register/Register';
import SignIn from 'viewScreen/homePages/signIn/SignIn';
import Home from 'viewScreen/homePages/home/Home';
import About from 'viewScreen/homePages/about/About';
//@ ---> NavBar && Footer -->
import NavbarComp from 'components/navbar/NavbarComp';
import Main from 'viewScreen/userDashboard/main/Main';

import Footer from 'components/footer/footer';
//@ ---> UserDashboard -->
import Expenses from 'viewScreen/userDashboard/expenses/Expenses';
import Dashboard from 'viewScreen/homePages/dashboard/Dashboard';
import Incomes from 'viewScreen/userDashboard/incomes/Incomes';
import Settings from 'viewScreen/userDashboard/settings/Settings';
import ContactUs from 'viewScreen/userDashboard/contact/ContactUs';
//@ ---> Not Found && Private Route -->
import NotFound from 'viewScreen/NotFound';
import PrivateRoute from 'components/PrivateRoute';
//@ ---> Verify Email -->
import EmailVerify from 'viewScreen/EmailVerify';
//@ ---> Forgot && Reset - Password -->
import ForgotPassword from 'viewScreen/ForgotPassword';
import ResetPassword from 'viewScreen/ResetPassword';
import Admin from 'viewScreen/adminDashboard/Admin';

// axios.defaults.baseURL = 'https://mycash-ra2a.onrender.com/';
// axios.defaults.baseURL = 'http://localhost:5000';
// axios.defaults.withCredentials = true;

const HomeRoot = () => {
  return (
    <>
      <div className="homeRoot">
        <Toaster
          position="top-right"
          toastOptions={{ duration: 3000, style: { marginTop: '5rem' } }}
        />
        <NavbarComp />
        <Outlet />
        <Footer />
      </div>
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
        <Route
          path="/api/auth/verify-email/:emailToken"
          element={<EmailVerify />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/api/auth/reset-password/:id/:token"
          element={<ResetPassword />}
        />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
      </Route>
      {/* -----> Private Route <------ */}
      <Route path="" element={<PrivateRoute />}>
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Main />} />
          {/* --- Private Admin Route ---- */}
          <Route path="admin" element={<Admin />} />
          <Route path="settings" element={<Settings />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="incomes" element={<Incomes />} />
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
