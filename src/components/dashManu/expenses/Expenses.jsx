import React, { useEffect } from 'react';
import { useGlobalContext } from '../../../Context/globalContext';
import './expense.css';
import AddExpenseForm from './addForm';

const Expenses = () => {
  const { expenses, getExpenses, deleteExpense, totalExpense } =
    useGlobalContext();

  const { user } = useGlobalContext();
  useEffect(() => {
    // Get user epxenses
    getExpenses(user._id);
  }, [totalExpense]);
  const column = [
    { title: 'ID' },
    { title: 'Title' },
    { title: 'Category' },
    { title: 'Amount' },
    { title: 'description' },
    { title: 'date' },
  ];
  const deleteExp = (id) => {
    deleteExpense(id);
  };

  return (
    <div className=" text-center mt-5 m-5 ">
      <div className="headExp  ">
        <h2>My Expenses</h2>
      </div>
      <div>
        <AddExpenseForm userId={user._id} />
      </div>

      <div>
        <ul className="d-flex justify-content-between list-unstyled   ">
          {column.map((c, i) => (
            <li key={i}>{c.title}</li>
          ))}
        </ul>
      </div>
      <div className="list">
        {expenses.map((exp, i) => (
          <ul
            className="expensesList d-flex justify-content-between list-unstyled text-center    "
            key={i}
          >
            <li>{i + 1}</li>
            <li>{exp.title}</li>
            <li>{exp.category}</li>
            <li>{exp.amount}</li>
            <li>{exp.description}</li>
            <li>{exp.date}</li>
          </ul>
        ))}
      </div>

      <div className="d-flex justify-content-center ">
        <h5>Total expense: ${totalExpense()}</h5>
      </div>
    </div>
  );
};

export default Expenses;
