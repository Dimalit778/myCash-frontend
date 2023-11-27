import React from 'react';

import { UpdateUser } from 'forms/UpdateUser';

const Settings = () => {
  return (
    <div className="container min-vh-100   ">
      <h1 className="header text-center m-5"> Settings</h1>
      <div className="row ">
        <div className=" col-md-6  bg-info p-4 ">sss</div>
        <div className=" col-md-6   ">
          <UpdateUser />
        </div>
      </div>
    </div>
  );
};

export default Settings;
