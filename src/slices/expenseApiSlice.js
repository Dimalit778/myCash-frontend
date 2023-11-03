import { apiSlice } from './apiSlice';

const URL = '/transactions';

export const expenseApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Expense'],
  endpoints: (builder) => ({
    getExpenses: builder.query({
      query: (userId) => `${URL}/get-expenses/${userId}`,
      providesTags: ['Expense'],
    }),

    addExpense: builder.mutation({
      query: (expense) => ({
        url: `${URL}/add-expense`,
        method: 'POST',
        body: expense,
      }),
      invalidatesTags: ['Expense'],
    }),
    updateExpense: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `${URL}/add-expense`,
        method: 'put',
        body: rest,
      }),
      invalidatesTags: ['Expense'],
    }),
    deleteExpense: builder.mutation({
      query: (expenseId) => ({
        url: `${URL}/delete-expense/${expenseId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Expense'],
    }),
  }),
});
export const {
  useGetExpensesQuery,
  useAddExpenseMutation,
  useDeleteExpenseMutation,
  useUpdateExpenseMutation,
} = expenseApiSlice;
