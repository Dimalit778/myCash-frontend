import React from 'react';
import './settings.css';

import { UpdateUser } from 'forms/UpdateUser';
import { useDispatch, useSelector } from 'react-redux';
import UploadImage from 'forms/UploadImage';
import { logout } from 'Api/SlicesApi/authSlice';
import { Col, Container, Row } from 'react-bootstrap';
import {
  useDeleteUserMutation,
  useLogoutMutation,
} from 'Api/SlicesApi/userApiSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const [deleteUser] = useDeleteUserMutation();
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      const res = await deleteUser(id);
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
      if (res) return toast.success('User data deleted successfully');
    } catch (e) {
      console.log(e.message);
    }
  };

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
            <p className=" mx-auto text-capitalize">{userInfo.name}</p>
            <p className="mx-auto  ">{userInfo.email}</p>
          </div>
        </Col>
        <Col sm={6} className="">
          <UpdateUser />
        </Col>
      </Row>
      <div className=" text-center p-3">
        <button onClick={() => handleDelete(userInfo._id)}>
          Delete Your User
        </button>
      </div>
    </Container>
  );
};

export default Settings;
