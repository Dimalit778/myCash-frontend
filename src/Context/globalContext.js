import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const BASE_URL = 'http://localhost:5000';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [userData, setUserData] = useState(''); // USER DATA
  const [incomes, setIncomes] = useState([]); // INCOMES LIST
  const [expenses, setExpenses] = useState([]); // EXPENSES LIST

  const [error, setError] = useState(null); // ERROR

  const getUserData = () => {
    const Data = JSON.parse(localStorage.getItem('user'));
    setUserData(Data);
    return Data;
  };

  //* * * * { ---  EXPENSES requests --- } * * * * //

  const getExpenses = async () => {
    // ------------------------> Find Expenses by User ID
    const { _id } = userData;
    const respone = await axios.get(
      `${BASE_URL}/transactions/get-expenses/${_id}`
    );
    setExpenses(respone.data);
    totalExpense();
  };

  const addExpense = async (expense) => {
    // ------------------------>  ADD Expenses
    const response = await axios
      .post(`${BASE_URL}/transactions/add-expense`, expense)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpenses();
  };

  const deleteExpense = async (id) => {
    // ------------------------>  DELETE Expenses
    const res = await axios.delete(`${BASE_URL}'/delete-expense/${id}`);
    getExpenses();
  };

  const totalExpense = () => {
    // ------------------------>  TOTAL Expenses
    let totalExpenses = 0;
    expenses.forEach((exp) => {
      totalExpenses += exp.amount;
    });
    return totalExpenses;
  };

  //* * * * { ---  INCOMES requests --- } * * * * //

  const addIncome = async (income) => {
    //  ------------------------>  ADD Income
    const response = await axios
      .post(`${BASE_URL}/transactions/add-income`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getIncomes();
  };

  const getIncomes = async () => {
    // ------------------------> Get INCOMES by User ID
    const { _id } = userData;

    const respone = await axios.get(
      `${BASE_URL}/transactions/get-incomes/${_id}`
    );
    setIncomes(respone.data);
    totalIncome();
  };

  const deleteIncome = async (id) => {
    // ------------------------> DELETE Income
    const res = await axios.delete(
      `${BASE_URL}/transactions/delete-income/${id}`
    );

    getIncomes();
  };

  const totalIncome = () => {
    // ------------------------> TOTAL Incomes
    let totalIncomes = 0;
    incomes.forEach((income) => {
      totalIncomes += income.amount;
    });

    return totalIncomes;
  };
  //* * * * { ---  TOTAL requests --- } * * * * //

  const totalBalance = () => {
    // ------------------------> TOTAL balance
    return totalIncome() - totalExpense();
  };

  return (
    <GlobalContext.Provider
      value={{
        getUserData,
        userData,
        expenses,
        totalExpense,
        addExpense,
        getExpenses,
        deleteExpense,

        incomes,
        totalIncome,

        addIncome,
        getIncomes,
        deleteIncome,
        totalBalance,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
