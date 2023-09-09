import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const BASE_URL = 'http://localhost:5000';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [totalExp, setTotalExp] = useState([]);
  const [error, setError] = useState(null);

  const getUserData = async (id) => {
    // const id = localStorage.getItem('id');
    const userData = await axios.get(`${BASE_URL}/api/user/getuser/${id}`);
    setUser(userData.data);
  };

  // Find Expenses by User ID
  const getExpenses = async () => {
    const id = localStorage.getItem('id');
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
  return (
    <GlobalContext.Provider
      value={{
        categoryList,
        getUserData,
        user,
        setUser,
        expenses,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpense,
        totalExp,
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
