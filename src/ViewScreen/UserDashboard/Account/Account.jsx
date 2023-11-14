import React from 'react';
import './account.css';

import avatarLogo from 'assets/avatar.jpg';
import { useSelector } from 'react-redux';

const Account = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="container ">
      <div className="row ">
        <div className="img  border border-2 border-black  d-flex  justify-content-center  align-items-center   col-sm-6  ">
          <img src={avatarLogo} alt="" className="avatarLogo" />
        </div>
        <div className="userInfo border border-2 border-black    d-flex p-4   col-sm-6 ">
          <div className="left w-100   text-center ">
            <h3 className="h3Info">Name :</h3>
            <h3 className="h3Info">Email :</h3>
          </div>
          <div className="right w-100  text-center   ">
            <h3 className="h3Info">{userInfo.name} </h3>

            <h3 className="h3Info">{userInfo.email} </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;