import React, { useState } from 'react';
import { success } from '../assets/success.png';
import { Link, useParams } from 'react-router-dom';

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);
  const param = useParams();
  return (
    <div>
      {validUrl ? (
        <div className="">
          <img src={success} alt="success_img" className="" />
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button className="">Login</button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </div>
  );
};

export default EmailVerify;
