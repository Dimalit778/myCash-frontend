import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useGlobalContext } from '../../../../Context/globalContext';

const columns = [
  { id: 'title', label: 'Name', minWidth: 170 },
  { id: 'category', label: 'Category', minWidth: 100 },
  { id: 'amount', label: 'Amount', minWidth: 100 },
  { id: 'description', label: 'Description', minWidth: 100 },
  { id: 'date', label: 'Date', minWidth: 100 },
];

const ExpenseList = () => {
  const { expenses, getExpenses, user } = useGlobalContext();

  useEffect(() => {
    // Get user epxenses
    getExpenses(user._id);
  }, []);

  const [page, setPage] = useState(0);
  const [expensesPerPage, setexpensesPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeexpensesPerPage = (event) => {
    setexpensesPerPage(++event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '70%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses
              .slice(
                page * expensesPerPage,
                page * expensesPerPage + expensesPerPage
              )
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={expenses.length}
        expensesPerPage={expensesPerPage}
        page={page}
        onPageChange={handleChangePage}
        onexpensesPerPageChange={handleChangeexpensesPerPage}
      />
    </Paper>
  );
};

export default ExpenseList;
