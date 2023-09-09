import React, { useState } from 'react';
import './register.css';
import { set, useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import NavbarComp from '../../components/navbar/NavbarComp';

const Register = () => {
  const [data, setData] = useState({});

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerUser = async (data) => {
    const { name, email, password } = data;

    try {
      const { data } = await axios.post('/api/user/register', {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success('Welcome ');
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="loginForm d-flex align-items-center justify-content-center  ">
        <div className="form  d-flex justify-content-center  p-2 mb-2  ">
          <div className="form  col-md-8  col-lg-9 col-7 ">
            <h3 className="p my-4  text-center">Register Here</h3>
            <form onSubmit={handleSubmit(registerUser)} className="signin-form">
              <div className="form-two d-flex gap-2">
                {/* ! ----- NAME FORM ------!*/}
                <input
                  id="name"
                  {...register('name', { required: true })}
                  type="text"
                  className=" form-control"
                  placeholder="Full Name"
                />
                {errors.fullName?.message}
              </div>
              {/* ! ----- EMAIL FORM ------!*/}
              <div className="form-group ">
                <input
                  id="email"
                  {...register('email')}
                  type="email"
                  className=" form-control"
                  placeholder="Email"
                  required
                />
                {errors.email?.message}
              </div>
              {/* ! ----- PASSWORD FORM ------!*/}
              <div className="form-group">
                <input
                  id="password-field"
                  {...register('password', { required: true })}
                  type="password"
                  className=" form-control"
                  placeholder="Password"
                />
                {errors.password?.message}
                <span
                  toggle="#password-field"
                  className="fa fa-fw fa-eye field-icon toggle-password"
                ></span>
              </div>
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
