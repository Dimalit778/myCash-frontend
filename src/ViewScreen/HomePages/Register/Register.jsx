import React, { useEffect, useState } from 'react';
import './register.css';

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/Loader';
import { useRegisterMutation } from '../../../Api/SlicesApi/userApiSlice';
import { setCredentials } from '../../../Api/SlicesApi/authSlice';
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
  const [msg, setMsg] = useState(false);

  useEffect(() => {
    if (userInfo?.isVerified) {
      navigate('/dashboard');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await register({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      setMsg(true);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <div className="wrapper d-flex align-items-center justify-content-center w-100">
        <div className="login ">
          <h3 className="p my-4  text-center">Register Here</h3>
          {msg && (
            <div className="link">Link verification sent to your email </div>
          )}

          <Form
            onSubmit={submitHandler}
            className="signInForm d-grid gap-4 p-2"
          >
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
                autoComplete="on"
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
              <button type="submit" className="form-control bn31 ">
                <span className="bn31span">Sign Up</span>
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
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
