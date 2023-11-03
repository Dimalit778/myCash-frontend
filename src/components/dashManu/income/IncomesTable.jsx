import React from 'react';
import { useSelector } from 'react-redux';
import { useGetIncomesQuery } from '../../../slices/incomeApiSlice';

import DataTable from '../../../Hooks/DataTable';
import AddForm from '../../../forms/AddForm';

const IncomesTable = ({ date }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const actionType = 'income';
  const {
    data: allIncomes,
    error,
    isLoading,
  } = useGetIncomesQuery(userInfo._id);

  if (error) return <div>error..!!</div>;

  return (
    <div className="container">
      <div className="data-box">
        <div className="total d-flex justify-content-between  ">
          {/* <h2> Total incomes : ${totalIncomesMonth}</h2> */}

          <AddForm actionType={actionType} />
        </div>
        {isLoading ? (
          <>Loading..</>
        ) : (
          <DataTable list={allIncomes} date={date} actionType={actionType} />
        )}
      </div>
    </div>
  );
};

export default IncomesTable;
