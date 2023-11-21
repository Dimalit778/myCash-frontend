import React from 'react';
import './account.css';

import avatarLogo from 'assets/avatar.jpg';
import { useSelector } from 'react-redux';
import UploadImage from 'forms/UploadImage';
import { Image, Transformation } from 'cloudinary-react';

const Account = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="container  ">
      <div className="left_div ">
        <div className="d-flex justify-content-center ">
          {userInfo.imageUrl ? (
            <Image cloudName="dx6oxmki4" publicId={userInfo.imageUrl}>
              <Transformation
                width="250"
                height="250"
                gravity="auto"
                crop="fill"
                radius="max"
                quality="auto"
                fetchFormat="auto"
              />
            </Image>
          ) : (
            <div>
              <div className="d-flex justify-content-center ">
                <img src={avatarLogo} alt="avatarLogo" className="avatarLogo" />
              </div>
              <UploadImage />
            </div>
          )}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div className="left  text-center ">
            <h3 className="h3Info">Name :</h3>
            <h3 className="h3Info">Email :</h3>
          </div>
          <div className="right   text-center   ">
            <h3 className="h3Info">{userInfo.name} </h3>
            <h3 className="h3Info">{userInfo.email} </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
