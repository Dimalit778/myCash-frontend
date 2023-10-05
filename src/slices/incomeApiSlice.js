import { apiSlice } from './apiSlice';

const URL = '/transactions';

export const incomeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getIncomes: builder.query({
      query: (userId) => `${URL}/get-incomes/${userId}`,
    }),
    deleteIncome: builder.query({
      query: (userId) => `${URL}/delete-income/${userId}`,
    }),
    addIncome: builder.query({
      query: (userId) => `${URL}/add-income`,
    }),
  }),
});
export const { useAddIncomeQuery, useDeleteIncomeQuery, useGetIncomesQuery } =
  incomeApiSlice;
