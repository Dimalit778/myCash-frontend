import React from 'react';
import './settings.css';

import { UpdateUser } from 'forms/UpdateUser';
import avatarLogo from 'assets/avatar.jpg';
import { useSelector } from 'react-redux';
import UploadImage from 'forms/UploadImage';

import { Col, Container, Row } from 'react-bootstrap';

const Settings = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Container fluid className="settings">
      <Row className=" p-5">
        <h1 className="header text-center pb-5 "> Settings</h1>
        <Col sm={6} className="user pb-4">
          {/* Upload Image Component */}
          <div className="">
            <UploadImage />
          </div>
          <div className="userInfo d-flex flex-column  ">
            <p className=" mx-auto ">{userInfo.name}</p>
            <p className="mx-auto  ">{userInfo.email}</p>
          </div>
        </Col>
        <Col sm={6} className="">
          <UpdateUser />
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
