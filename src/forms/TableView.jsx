import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { numberFormat } from 'Hooks/numberFormat';
import { useDeleteExpenseMutation } from 'Api/SlicesApi/expenseApiSlice';
import { useDeleteIncomeMutation } from 'Api/SlicesApi/incomeApiSlice';
import { Delete } from '@mui/icons-material';
import EditForm from './EditForm';
import { text } from '@fortawesome/fontawesome-svg-core';

function Row({ item, actionType }) {
  const [open, setOpen] = useState(false);
  const { title, category, amount, date, description } = item;
  //! ------{ use RTK Query to Delete Item from the list }
  const [deleteExpense] = useDeleteExpenseMutation();
  const [deleteIncome] = useDeleteIncomeMutation();

  // ----> Delete Item Function <----
  const handleDelete = async (id) => {
    switch (actionType) {
      case 'income':
        return await deleteIncome(id);

      case 'expense':
        return await deleteExpense(id);

      default:
        return null;
    }
  };

  return (
    //? Display each item in row
    <>
      <TableRow
        sx={{ '& > *': { borderBottom: 'unset' } }}
        style={{ backgroundColor: 'LightGray' }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {title}
        </TableCell>
        <TableCell>{numberFormat(amount)}</TableCell>
        <TableCell>{category}</TableCell>
      </TableRow>
      <TableRow>
        {/* //? when open the item  */}
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              {/*//@ Table Head Details */}
              <Table size="small">
                <TableHead>
                  {/*//@ Row details */}
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Category</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Date</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {title}
                    </TableCell>
                    <TableCell align="right">{numberFormat(amount)}</TableCell>
                    <TableCell align="right">{category}</TableCell>
                    <TableCell align="right" Box={text}>
                      {description}
                    </TableCell>
                    <TableCell align="right">{date}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {/*//@ Table  Actions */}
              <Table size="small">
                <TableRow>
                  <TableCell align="right">Edit</TableCell>
                  <TableCell align="right">
                    <EditForm item={item} actionType={actionType} />
                  </TableCell>
                  <TableCell align="right">Delete</TableCell>
                  <TableCell align="right">
                    <button
                      style={{ backgroundColor: 'red' }}
                      className="btn_Upd_dlt"
                      onClick={() => handleDelete(item._id)}
                    >
                      <Delete />
                    </button>
                  </TableCell>
                </TableRow>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function TableView({ list, actionType }) {
  console.log('6 - View table');
  return (
    <TableContainer component={Paper} style={{ maxHeight: '400px' }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{ backgroundColor: 'DarkGrey' }}>
            <TableCell />
            <TableCell>Title</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ scrollBehavior: 'auto', height: '200' }}>
          {list.map((item) => (
            <Row key={item._id} item={item} actionType={actionType} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
