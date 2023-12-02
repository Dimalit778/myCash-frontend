import { Opacity } from '@mui/icons-material';
import React from 'react';

const GAuth = () => {
  const handleGoogleClick = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      style={{ backgroundColor: 'red', color: 'white' }}
      className=" text-uppercase"
    >
      google auth
    </button>
  );
};

export default GAuth;
