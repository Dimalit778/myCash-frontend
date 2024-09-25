import React, { useMemo } from "react";

import { useGetAllIncomesQuery } from "api/slicesApi/incomeApiSlice";
import AddForm from "forms/AddForm";
import { filterByMonthAndYear } from "hooks/filterByMonthYear";
import { calculateTotal } from "hooks/calculateTotal";
import TableView from "forms/TableView";
import { numberFormat } from "hooks/numberFormat";
import Loader from "components/Loader";

const IncomesTable = ({ date }) => {
  const actionType = "income";
  const { data: allIncomes, error, isLoading } = useGetAllIncomesQuery();
  const filteredList = useMemo(() => {
    if (!allIncomes) return [];
    return filterByMonthAndYear(allIncomes, date);
  }, [allIncomes, date]);

  const total = useMemo(() => calculateTotal(filteredList), [filteredList]);

  if (error) return <div>error..!!</div>;
  if (isLoading) return <Loader />;

  return (
    <div className="container">
      <div className="data-box">
        <div className="total d-flex justify-content-around mb-1   ">
          <h4 style={{ fontSize: "20px", alignContent: "center" }}> Total incomes : </h4>
          <h2 style={{ fontSize: "20px", alignContent: "center" }}>{numberFormat(total)}</h2>
          <AddForm actionType={actionType} date={date} />
        </div>
        <div className="d-flex justify-content-center ">
          <TableView list={filteredList} actionType={actionType} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(IncomesTable);
