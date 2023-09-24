import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:5000';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [userData, setUserData] = useState({}); // USER DATA
  const [incomes, setIncomes] = useState([]); // INCOMES LIST
  const [expenses, setExpenses] = useState([]); // EXPENSES LIST
  const [error, setError] = useState(null); // ERROR

  const [expensesMonth, setExpensesMonth] = useState([
    {
      month: '',
    },
  ]);

  useEffect(() => {
    const Data = JSON.parse(localStorage.getItem('user'));
    setUserData(Data);
  }, []);

  //* * * * { ---  EXPENSES requests --- } * * * * //
  // ------------------------> Find Expenses by User ID
  const getExpenses = async () => {
    const { _id } = userData;
    const respone = await axios.get(
      `${BASE_URL}/transactions/get-expenses/${_id}`
    );
    setExpenses(respone.data);
    totalExpense();
  };
  // ------------------------>  ADD Expenses
  const addExpense = async (expense) => {
    const { title, amount, category, description, date } = expense;
    await axios
      .post(`${BASE_URL}/transactions/add-expense`, {
        userId: userData._id,
        title,
        amount,
        category,
        description,
        date,
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpenses();
  };
  // ------------------------>  DELETE Expenses
  const deleteExpense = async (id) => {
    const res = await axios.delete(
      `${BASE_URL}/transactions/delete-expense/${id}`
    );
    getExpenses();
  };
  // ------------------------>  TOTAL Expenses
  const totalExpense = () => {
    let totalExpenses = 0;
    expenses.forEach((exp) => {
      totalExpenses += exp.amount;
    });
    return totalExpenses;
  };
  // ------------------------> TOTAL Incomes by Month
  const totalExpenseByMonth = (filterdExpense) => {
    let total = 0;
    filterdExpense.forEach((expense) => {
      total += expense.amount;
    });
    return total;
  };

  //* * * * { ---  INCOMES requests --- } * * * * //
  //  ------------------------>  ADD Income
  const addIncome = async (income) => {
    const { title, amount, description, date } = income;
    await axios
      .post(`${BASE_URL}/transactions/add-income`, {
        userId: userData._id,
        title,
        amount,
        description,
        date,
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
    getIncomes();
  };
  // ------------------------> Get INCOMES by User ID
  const getIncomes = async () => {
    const { _id } = userData;

    const respone = await axios.get(
      `${BASE_URL}/transactions/get-incomes/${_id}`
    );

    setIncomes(respone.data);

    totalIncome();
  };
  // ------------------------> DELETE Income
  const deleteIncome = async (id) => {
    const res = await axios.delete(
      `${BASE_URL}/transactions/delete-income/${id}`
    );

    getIncomes();
  };
  // ------------------------> TOTAL Incomes
  const totalIncome = () => {
    let totalIncomes = 0;
    incomes.forEach((income) => {
      totalIncomes += income.amount;
    });

    return totalIncomes;
  };
  // ------------------------> TOTAL Incomes by Month
  const totalIncomeByMonth = (filterdIncome) => {
    let total = 0;
    filterdIncome.forEach((income) => {
      total += income.amount;
    });
    return total;
  };

  //* * * * { ---  TOTAL requests --- } * * * * //
  const totalBalance = () => {
    // ------------------------> TOTAL balance
    return totalIncome() - totalExpense();
  };

  return (
    <GlobalContext.Provider
      value={{
        userData,
        totalBalance,

        expenses,
        totalExpense,
        totalExpenseByMonth,
        addExpense,
        getExpenses,
        deleteExpense,

        incomes,
        totalIncome,
        totalIncomeByMonth,
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
