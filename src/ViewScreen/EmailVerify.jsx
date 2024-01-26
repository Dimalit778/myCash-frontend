import React, { useEffect, useState } from 'react';
import { success } from '../assets/success.png';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  useUpdateUserMutation,
  useVerifyEmilMutation,
} from 'Api/SlicesApi/userApiSlice';
import Loader from 'components/Loader';
import { toast } from 'react-hot-toast';
import { Alert } from 'react-bootstrap';

const EmailVerify = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile] = useUpdateUserMutation();
  const [verifyEmail] = useVerifyEmilMutation();
  const [error, setError] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (userInfo?.isVerified) {
        setTimeout(() => {
          return navigate('/dashboard');
        }, 3000);
      } else {
        if (userInfo.emailToken) {
          setIsLoading(true);
          try {
            const res = verifyEmail(userInfo.emailToken).unwrap();
            console.log(res);
            updateProfile();
            setIsLoading(false);
          } catch (err) {
            setError(err);
          }
        }
      }
    })();
  }, [userInfo]);

  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div>
          {userInfo?.isVerified ? (
            <div className="alert">
              <Alert severity="success">Email successfully verified ...</Alert>
            </div>
          ) : (
            <div className="alert">
              <Alert severity="error">{error.message}</Alert>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EmailVerify;
