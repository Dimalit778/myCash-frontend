import React from 'react';

import { useGetAllIncomesQuery } from 'api/slicesApi/incomeApiSlice';
import AddForm from 'forms/AddForm';
import { filterByMonthAndYear } from 'hooks/filterByMonthYear';
import { calculateTotal } from 'hooks/calculateTotal';
import TableView from 'forms/TableView';
import { numberFormat } from 'hooks/numberFormat';
import Loader from 'components/Loader';

const IncomesTable = ({ date }) => {
  const actionType = 'income';
  const { data: allIncomes, error, isLoading } = useGetAllIncomesQuery();

  if (error) return <div>error..!!</div>;
  if (isLoading) return <Loader />;

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
        <div className="d-flex justify-content-center ">
          <TableView list={filteredList} actionType={actionType} />
        </div>
      </div>
    </div>
  );
};

export default IncomesTable;
