import React, { useState } from 'react';
import './signin.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { UserAuth } from '../../Context/FireBaseAuthContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const SignIn = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

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
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    try {
      const { data } = await axios.post('/api/user/login', {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem('id', data._id);
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
            <div className="formSubmit">
              <button
                type="submit"
                className="form-control btn btn-outline-dark submit px-3"
              >
                Log In
              </button>
            </div>
            <button
              // onClick={signGoogleClick}
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
  );
};

export default SignIn;
