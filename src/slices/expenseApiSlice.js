import { apiSlice } from './apiSlice';

const URL = '/transactions';

export const expenseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExpenses: builder.query({
      query: (userId) => `${URL}/get-expenses/${userId}`,
    }),
    deleteExpenses: builder.query({
      query: (userId) => `${URL}/delete-expense/${userId}`,
    }),
    addExpense: builder.query({
      query: (userId) => `${URL}/add-expense/${userId}`,
    }),
  }),
});
export const {
  useGetExpensesQuery,
  useDeleteExpensesQuery,
  useAddExpenseQuery,
} = expenseApiSlice;
