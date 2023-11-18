import React from 'react';
import './account.css';

import avatarLogo from 'assets/avatar.jpg';
import { useSelector } from 'react-redux';
import UploadImage from 'forms/UploadImage';

const Account = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="container ">
      <div className="row ">
        <div className="img  border border-2 border-black  d-flex  justify-content-center  align-items-center   col-sm-6  ">
          <img src={avatarLogo} alt="" className="avatarLogo" />
        </div>
        <div className="userInfo d-flex flex-column justify-content-around    col-sm-6 ">
          <div className="d-flex">
            <div className="left w-100   text-center ">
              <h3 className="h3Info">Name :</h3>
              <h3 className="h3Info">Email :</h3>
            </div>
            <div className="right w-100  text-center   ">
              <h3 className="h3Info">{userInfo.name} </h3>
              <h3 className="h3Info">{userInfo.email} </h3>
            </div>
          </div>
          <div className="uploadImage d-flex justify-content-center ">
            <UploadImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
