import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateUserMutation } from '../Api/SlicesApi/userApiSlice';
import { setCredentials } from '../Api/SlicesApi/authSlice';
import { toast } from 'react-hot-toast';
import Loader from '../components/Loader';
import { Button, Form } from 'react-bootstrap';

export const UpdateUser = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  // const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.name]);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await updateProfile({
        _id: userInfo._id,
        name,
        email,
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
    <div
      style={{ border: '2px solid black' }}
      className=" d-flex justify-content-center   "
    >
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {/* <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group> */}

        <Button type="submit" variant="primary" className="mt-3">
          Update
        </Button>

        {isLoading && <Loader />}
      </Form>
    </div>
  );
};
