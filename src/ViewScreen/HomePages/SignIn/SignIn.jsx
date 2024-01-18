import React, { useEffect, useState } from 'react';
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {
  useGoogleAuthFBMutation,
  useLoginMutation,
} from 'Api/SlicesApi/userApiSlice';
import { setCredentials } from 'Api/SlicesApi/authSlice';
import Loader from 'components/Loader';

import { GoogleAuth } from 'Api/FireBase/Firebase';
// import GAuth from 'components/GoogleAuth/GAuth';

const SignIn = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  const [googleAuthFB] = useGoogleAuthFBMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard');
    }
  }, [navigate, userInfo]);
  //@  Google Auth -->
  const signGoogleClick = async (e) => {
    e.preventDefault();
    const user = await GoogleAuth();

    if (user) {
      try {
        const res = await googleAuthFB(user).unwrap();

        dispatch(setCredentials({ ...res }));
        navigate('/dashboard');
      } catch (err) {
        console.log(err);
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  //@ Login with Email and Password
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/dashboard');
    } catch (err) {
      toast('Invalid email or password');
    }
  };
  return (
    <>
      <div className="loginForm d-flex align-items-center justify-content-center ">
        <div className=" d-flex justify-content-center  p-2 mb-2 w-50 h-75">
          <div className="form col-md-6 col-lg-4 ">
            <h3 className="p my-5  text-center">Log In Here</h3>
            <form className="signin-form" onSubmit={loginUser}>
              <div className="form-group ">
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  type="text"
                  className=" form-control"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  id="password-field"
                  type="password"
                  className=" form-control"
                  placeholder="Password"
                  required
                />
                <span
                  toggle="#password-field"
                  className="fa fa-fw fa-eye field-icon toggle-password"
                ></span>
              </div>
              {isLoading && <Loader />}
              <div className="formSubmit">
                <button
                  type="submit"
                  className="form-control btn btn-outline-dark submit px-3"
                >
                  Log In
                </button>
              </div>
              {/* <GAuth /> */}
              <button
                onClick={signGoogleClick}
                className="form-control btn btn-outline-dark submit px-3"
              >
                Sign with google
              </button>

              <Link
                className="text d-flex justify-content-center text-decoration-none  "
                to="/resetpassword"
              >
                Forgot password?
              </Link>

              <div className="d-flex align-items-center justify-content-center gap-3">
                <p className=" text-dark mb-0 ">Don't have an account?</p>
                <button
                  type="button"
                  className="btn btn-btn-outline-danger  btn-sm"
                  onClick={() => navigate('/register')}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

// ! ----> sign in with google <---- !
// const { signWithGoogle } = UserAuth();
// const signGoogleClick = async (e) => {
//   e.preventDefault();
//   try {
//     await signWithGoogle();
//     navigate('/dashboard');
//   } catch (error) {
//     console.log(error);
//   }
// };
