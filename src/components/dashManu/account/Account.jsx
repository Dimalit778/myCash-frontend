import React from 'react';
import './account.css';
import { useGlobalContext } from '../../../Context/globalContext';
import avatarLogo from '../../../assets/avatar.jpg';
import { Avatar } from '@mui/material';
const Account = () => {
  const { userData } = useGlobalContext();
  const { firstName, email } = userData;
  // const date = new date('2020-07-22t13:22:10.2566789+00:00');

  // const formatteddate = date.tolocaledatestring('en-gb', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  // });

  // console.log(formatteddate);

  return (
    <div className="container   ">
      <div className="row ">
        <div className="img d-flex  justify-content-center  align-items-center   col-sm-6  ">
          <img src={avatarLogo} alt="" className="avatarLogo" />
        </div>
        <div className="userInfo d-flex p-4   col-sm-6 ">
          <div className="left  text-center ">
            <h3 className="h3Info">Name :</h3>
            <h3 className="h3Info">Email :</h3>
          </div>
          <div className="rigth text-center   ">
            <h3 className="h3Info">{firstName} </h3>

            <h3 className="h3Info">{email} </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
