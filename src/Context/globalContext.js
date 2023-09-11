import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const BASE_URL = 'http://localhost:5000';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [totalExp, setTotalExp] = useState('');
  const [totalInc, setTotalInc] = useState('');
  const [totalCash, setTotalCash] = useState('');
  const [error, setError] = useState(null);

  const user = JSON.parse(localStorage.getItem('user'));

  // Find Expenses by User ID
  const getExpenses = async () => {
    const id = user._id;
    const respone = await axios.get(
      `${BASE_URL}/transactions/get-expenses/${id}`
    );
    setExpenses(respone.data);
    totalExpense();
    total();
  };
  const addExpense = async (expense) => {
    const response = await axios
      .post(`${BASE_URL}/transactions/add-expense`, expense)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpenses();
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(`${BASE_URL}'/delete-expense/${id}`);
    getExpenses();
  };
  const totalExpense = () => {
    let total = 0;
    expenses.forEach((exp) => {
      total = total + exp.amount;
    });
    setTotalExp(total);
  };

  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}/transactions/add-income`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getIncomes();
  };
  // Find Expenses by User ID
  const getIncomes = async () => {
    const id = user._id;
    const respone = await axios.get(
      `${BASE_URL}/transactions/get-incomes/${id}`
    );
    setIncomes(respone.data);
    totalIncome();
    total();
  };
  const deleteIncome = async (id) => {
    const res = await axios.delete(
      `${BASE_URL}/transactions/delete-income/${id}`
    );

    getIncomes();
  };
  const totalIncome = () => {
    let totalIncomes = 0;
    incomes.forEach((inc) => {
      totalIncomes = totalIncomes + inc.amount;
    });

    setTotalInc(totalIncomes);
  };
  const total = () => {
    let total = 0;
    total = totalExp - setTotalInc;
    setTotalCash(total);
  };
  return (
    <GlobalContext.Provider
      value={{
        user,
        expenses,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExp,
        incomes,
        totalInc,
        addIncome,
        getIncomes,
        deleteIncome,
        totalCash,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
