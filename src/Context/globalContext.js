import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const BASE_URL = 'http://localhost:5000';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [totalExp, setTotalExp] = useState([]);
  const [error, setError] = useState(null);

  const user = JSON.parse(localStorage.getItem('user'));

  // Find Expenses by User ID
  const getExpenses = async () => {
    const id = user._id;
    const respone = await axios.get(
      `${BASE_URL}/transactions/get-expenses/${id}`
    );
    setExpenses(respone.data);
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
    let totalExp = 0;
    expenses.forEach((exp) => {
      totalExp = totalExp + exp.amount;
    });

    return totalExp;
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

    return totalExp;
  };
  return (
    <GlobalContext.Provider
      value={{
        user,
        expenses,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpense,
        totalExp,
        incomes,
        addIncome,
        getIncomes,
        deleteIncome,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

// // Add category by User ID
// const addCategory = async (category) => {
//   const response = await axios
//     .post(`${BASE_URL}/api/newCategory`, category)
//     .catch((err) => {
//       setError(err.response.data.message);
//     });
// };
// // Find categories by User ID
// const getCategories = async (id) => {
//   const respone = await axios.get(`${BASE_URL}/api/getCategories/${id}`);
//   setCategoryList(respone.data);
// };
// // Delete categories by User ID
// const deleteCategory = async (id, userId) => {
//   const res = await axios.delete(`${BASE_URL}/api/deleteCategory/${id}`);
//   getCategories(userId);
// };
