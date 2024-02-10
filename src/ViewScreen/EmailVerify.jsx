import React, { useEffect, useState } from 'react';
import successImg from '../assets/success.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useVerifyEmailMutation } from 'Api/slicesApi/userApiSlice.js';

import { Alert } from 'react-bootstrap';
import { setCredentials } from 'Api/slicesApi/authSlice';

const EmailVerify = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const [verifyEmail] = useVerifyEmailMutation();
  const [error, setError] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (userInfo?.isVerified) {
        setTimeout(() => {
          return navigate('/dashboard');
        }, 6000);
      } else {
        if (userInfo?.emailToken) {
          setIsLoading(true);

          try {
            const res = await verifyEmail(userInfo).unwrap();

            dispatch(
              setCredentials({
                _id: res._id,
                name: res.name,
                email: res.email,
                imageUrl: res.imageUrl,
                isVerified: res.isVerified,
              })
            );
            navigate('/dashboard');
            setIsLoading(false);
          } catch (err) {
            setError(err);
          }
        }
      }
    })();
  }, [userInfo]);

  return (
    <div className="verifyEmail d-flex vh-100 justify-content-center align-items-center  ">
      <div
        style={{
          height: '50vh',
          width: '30vw',
          backgroundColor: 'rgb(252, 250, 248)',
        }}
        className=" d-flex justify-content-center  align-items-center "
      >
        {isLoading ? (
          <div className="loader">
            <Alert severity="success">Email successfully verified ...</Alert>
            <img src={successImg} alt="success" />
          </div>
        ) : (
          <div>
            {userInfo?.isVerified ? (
              <div className="alert">
                <h1>success</h1>
                <Alert severity="success">
                  Email successfully verified ...
                </Alert>
              </div>
            ) : (
              <div className="alert">
                {/* <Alert severity="error">{error.message}</Alert> */}
                <h2>error</h2>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailVerify;
