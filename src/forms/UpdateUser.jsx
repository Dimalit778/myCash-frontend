import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateUserMutation } from '../Api/SlicesApi/userApiSlice';
import { setCredentials } from '../Api/SlicesApi/authSlice';
import { toast } from 'react-hot-toast';
import Loader from '../components/Loader';
import { Form } from 'react-bootstrap';

export const UpdateUser = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    name: '',
    password: '',
  });
  const dispatch = useDispatch();
  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  const submitHandler = async (e) => {
    const { name, password } = userData;
    e.preventDefault();
    try {
      const res = await updateProfile({
        _id: userInfo._id,
        name,
        password,
      }).unwrap();

      dispatch(
        setCredentials({
          _id: res._id,
          name: res.name,
          email: res.email,
          imageUrl: res.imageUrl,
          isVerified: res.isVerified,
        })
      );
      toast.success('Profile updated successfully');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className=" d-flex justify-content-center h-auto text-center     ">
      <Form className="editUser " onSubmit={submitHandler}>
        <h3 className=" text-center">Edit User</h3>
        <Form.Group className=" mb-4" controlId="name">
          <Form.Label className="editLabel d-block">
            <p>Enter Name</p>
          </Form.Label>
          <Form.Control
            className=" text-center "
            type="name"
            placeholder="New Name"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label className="editLabel d-block   ">
            <p>Enter Password</p>
          </Form.Label>
          <Form.Control
            className="form-control"
            id="password"
            placeholder="New Password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          ></Form.Control>
        </Form.Group>
        {isLoading && <Loader />}
        <button type="submit" className="bn3637 bn36 mt-3">
          SAVE
        </button>
      </Form>
    </div>
  );
};
