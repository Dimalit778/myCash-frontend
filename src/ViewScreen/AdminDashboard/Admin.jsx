import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useAllUsersQuery } from 'Api/SlicesApi/userApiSlice.js';
import React, { useEffect } from 'react';
import { Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo.isAdmin) navigate('/dashboard');
  }, []);

  const { data: allUsers, isLoading } = useAllUsersQuery(userInfo._id);
  console.log(allUsers);
  return (
    <TableContainer
      component={Paper}
      //   style={{ maxHeight: '330px', maxWidth: '600px' }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{ backgroundColor: 'DarkGrey' }}>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell>Photo</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Verified</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>Create At</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody
          style={{ scrollBehavior: 'auto', height: '200', width: '100px' }}
        >
          {allUsers.map((user) => (
            <Row key={user._id} name={user.name} email={user.email} />
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  );
};

export default Admin;
