import React, { useEffect, useState } from 'react';
import './register.css';

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loader from '../../utilits/Loader';
import { useRegisterMutation } from '../../slices/userApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await register({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <div className="loginForm d-flex align-items-center justify-content-center  ">
        <div className="form  d-flex justify-content-center  p-2 mb-2  ">
          <div className="form  col-md-8  col-lg-9 col-7 ">
            <h3 className="p my-4  text-center">Register Here</h3>
            <form onSubmit={submitHandler} className="signin-form">
              <Form.Group className="form-group" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/* ! ----- EMAIL FORM ------!*/}
              <Form.Group className="form-group" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/* ! ----- PASSWORD FORM ------!*/}
              <Form.Group className="my-2" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
                <span
                  toggle="#password-field"
                  className="fa fa-fw fa-eye field-icon toggle-password"
                ></span>
              </Form.Group>

              {isLoading && <Loader />}
              {/* ! ----- SUBMIT ------!*/}
              <div className="formSubmit">
                <button
                  type="submit"
                  className="form-control btn btn-outline-dark  submit px-3"
                >
                  Sign Up
                </button>
              </div>

              <div className="d-flex align-items-center justify-content-center gap-3">
                <p className=" mb-0 ">Already have an account?</p>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm"
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
