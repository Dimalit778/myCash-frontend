// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import './dataTable.css';
// import UserActions from './UserActions';
// import { useMemo } from 'react';
// import { Box } from '@mui/material';
// const columns = useMemo(
//   () => [
//     { field: 'title', headerName: 'Title', minWidth: 120, editable: true },
//     {
//       field: 'amount',
//       headerName: 'Amount',
//       type: 'number',
//       width: 90,
//       editable: true,
//     },
//     { field: 'description', headerName: 'Description', minWidth: 150 },
//     {
//       field: 'date',
//       headerName: 'Date',
//       minWidth: 130,
//       editable: true,
//     },
//     {
//       field: 'action',
//       headerName: 'Action',
//       minWidth: 150,
//       renderCell: (params) => <UserActions {...{ params, rowId, setRowId }} />,
//     },
//   ],
//   []
// );

// const actionColums = [
//   {
//     field: 'action',
//     headerName: 'Action',
//     minWidth: 150,
//     renderCell: (params) => <UserActions {...{ params, rowId, setRowId }} />,
//   },
// ],[rowId];

// const DataTable = ({ incomes }) => {
//   const [rowId, setRowId] = React.useState(null);

//   const columns = useMemo(
//     () => [
//       {
//         field: 'title',
//         headerName: 'Title',
//         headerClassName: 'super-app-theme--header',
//         headerAlign: 'center',
//         minWidth: 120,
//         editable: true,
//       },
//       {
//         field: 'amount',
//         headerName: 'Amount',
//         headerClassName: 'super-app-theme--header',
//         headerAlign: 'center',
//         type: 'number',
//         minWidth: 120,
//         editable: true,
//       },
//       {
//         field: 'description',
//         headerName: 'Description',
//         headerClassName: 'super-app-theme--header',
//         headerAlign: 'center',
//         minWidth: 150,
//       },
//       {
//         field: 'date',
//         headerName: 'Date',
//         headerClassName: 'super-app-theme--header',
//         headerAlign: 'center',
//         type: 'datetime',
//         minWidth: 130,
//         editable: true,
//       },
//       {
//         field: 'action',
//         headerName: 'Action',
//         headerClassName: 'super-app-theme--header',
//         headerAlign: 'center',
//         minWidth: 200,
//         renderCell: (params) => (
//           <UserActions {...{ params, rowId, setRowId }} />
//         ),
//       },
//     ],
//     [rowId]
//   );
//   return (
//     <Box
//       sx={{
//         width: '75%',
//         justifyContent: 'center',
//       }}
//     >
//       <DataGrid
//         editMode="row"
//         getRowId={(incomes) => incomes._id}
//         rows={incomes}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         // getRowSpacing={(params) => ({
//         //   top: params.isFirstVisible ? 0 : 5,
//         //   bottom: params.isLastVisible ? 0 : 5,
//         // })}
//         // getRowClassName={(params) => 'GridRowParams'}
//         // onCellEditCommit={(params) => setRowId(params.id)}
//       />
//     </Box>
//   );
// };
// export default DataTable;
