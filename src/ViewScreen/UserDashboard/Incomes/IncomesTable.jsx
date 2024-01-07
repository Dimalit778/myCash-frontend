import React from 'react';
import { useSelector } from 'react-redux';
import { useGetAllIncomesQuery } from 'Api/SlicesApi/incomeApiSlice';
import AddForm from 'forms/AddForm';
import { filterByMonthAndYear } from 'Hooks/filterByMonthYear';
import { calculateTotal } from 'Hooks/calculateTotal';
import TableView from 'forms/TableView';
import { numberFormat } from 'Hooks/numberFormat';

const IncomesTable = ({ date }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const actionType = 'income';
  const {
    data: allIncomes,
    error,
    isLoading,
  } = useGetAllIncomesQuery(userInfo._id);

  if (error) return <div>error..!!</div>;
  if (isLoading) return <div>Loading..!!</div>;

  // //! ------{  Filter the list by Month and Year }
  const filteredList = filterByMonthAndYear(allIncomes, date);
  //-----------> {  Calculate Total Amount of filtered Month }
  const total = calculateTotal(filteredList);

  return (
    <div className="container">
      <div className="data-box">
        <div className="total d-flex justify-content-around mb-1   ">
          <h2> Total incomes : {numberFormat(total)}</h2>
          <AddForm actionType={actionType} date={date} />
        </div>
        <TableView list={filteredList} actionType={actionType} />
      </div>
    </div>
  );
};

export default IncomesTable;
