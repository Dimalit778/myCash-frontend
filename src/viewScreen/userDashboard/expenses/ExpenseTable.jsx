import React, { useMemo } from "react";

import { useGetAllExpensesQuery } from "api/slicesApi/expenseApiSlice";

import AddForm from "../../../forms/AddForm";
import { filterByMonthAndYear } from "hooks/filterByMonthYear";
import { calculateTotal } from "hooks/calculateTotal";
import Loader from "components/Loader";
import TableView from "forms/TableView";
import { numberFormat } from "hooks/numberFormat";

const ExpenseList = ({ date }) => {
  const actionType = "expense";
  const { data: allExpenses, error, isLoading } = useGetAllExpensesQuery();
  const filteredList = useMemo(() => {
    if (!allExpenses) return [];
    return filterByMonthAndYear(allExpenses, date);
  }, [allExpenses, date]);

  const total = useMemo(() => calculateTotal(filteredList), [filteredList]);

  if (error) return <div>error..!!</div>;
  if (isLoading) return <Loader />;
  return (
    <div className="container">
      <div className="data-box">
        <div className="total d-flex justify-content-around mb-1  ">
          <h3> Total Expenses : {numberFormat(total)} </h3>
          <AddForm actionType={actionType} date={date} />
        </div>
        <div className="d-flex justify-content-center ">
          <TableView list={filteredList} actionType={actionType} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ExpenseList);
