import { useResetPasswordMutation } from 'Api/SlicesApi/userApiSlice';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setSetPassword] = useState('');
  const [resetPassword] = useResetPasswordMutation();

  const { resetPassToken } = useParams();

  //   const [isLoading, setIsLoading] = useState(false);
  //   const [msg, setMsg] = useState(false);

  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo?.isVerify) {
      navigate('dashboard');
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await resetPassword({ password }).unwrap();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <>
      <div className="wrapper d-flex align-items-center justify-content-center w-100      ">
        <div className="login ">
          <h3 className=" text-center mt-auto ">Enter New Password</h3>
          <form
            className="signInForm d-grid gap-4 p-2"
            onSubmit={submitHandler}
          >
            {/* ---> Email input <--- */}
            <div className="form-group ">
              <input
                onChange={(e) => setSetPassword(e.target.value)}
                type="text"
                className=" form-control"
                placeholder="*****"
              />
            </div>

            <div className="formSubmit">
              <button
                type="submit"
                className="form-control btn btn-outline-dark submit px-3"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
