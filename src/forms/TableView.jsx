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
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { numberFormat } from 'hooks/numberFormat';
import { useDeleteExpenseMutation } from 'api/slicesApi/expenseApiSlice';
import { useDeleteIncomeMutation } from 'api/slicesApi/incomeApiSlice';
import { Delete } from '@mui/icons-material';
import EditForm from './EditForm';

function Row({ item, actionType, index }) {
  const [open, setOpen] = useState(false);
  const { title, category, amount, date } = item;
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
    <>
      {/* //? Display each item in row */}
      <TableRow style={{ backgroundColor: 'LightGrey' }}>
        <TableCell style={{ padding: '0' }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {index}
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {title}
        </TableCell>
        <TableCell>{numberFormat(amount)}</TableCell>
        <TableCell>{category}</TableCell>
      </TableRow>
      {/* //? when open the item  */}
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              {/*//@ Table Head Details */}
              <Table size="small">
                <TableHead>
                  {/*//@ Row details */}
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    <TableCell align="center">Category</TableCell>
                    <TableCell align="center">Date</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {title}
                    </TableCell>
                    <TableCell align="center">{numberFormat(amount)}</TableCell>
                    <TableCell align="center">{category}</TableCell>
                    <TableCell align="center">{date}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {/*//@ Table  Actions */}
              <Table size="small">
                <TableRow>
                  <TableCell style={{ fontWeight: 700, textAlign: 'right' }}>
                    Edit
                  </TableCell>
                  <TableCell align="right">
                    <EditForm item={item} actionType={actionType} />
                  </TableCell>
                  <TableCell style={{ fontWeight: 700, textAlign: 'right' }}>
                    Delete
                  </TableCell>
                  <TableCell align="right">
                    <button
                      style={{
                        backgroundColor: 'red',
                        borderRadius: '5px',
                      }}
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
  return (
    <TableContainer
      component={Paper}
      style={{ maxHeight: '330px', maxWidth: '600px' }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{ backgroundColor: 'DarkGrey' }}>
            <TableCell />
            <TableCell>Title</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          style={{ scrollBehavior: 'auto', height: '200', width: '100px' }}
        >
          {list.map((item, index) => (
            <Row
              key={item._id}
              item={item}
              index={index + 1}
              actionType={actionType}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
