import { apiSlice } from './apiSlice';

const URL = '/api/transactions';

export const expenseApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Expense'],
  endpoints: (builder) => ({
    //? -- GET Expense
    getExpense: builder.query({
      query: (expenseId) => `${URL}/getExpense/${expenseId}`,
      providesTags: ['Expense'],
    }),
    //? -- GET ALL EXPENSES
    getAllExpenses: builder.query({
      query: (userId) => `${URL}/getAllExpenses/${userId}`,
      providesTags: ['Expense'],
    }),
    //? -- ADD  EXPENSE
    addExpense: builder.mutation({
      query: ({ userId, ...rest }) => ({
        url: `${URL}/addExpense/${userId}`,
        method: 'POST',
        body: rest,
      }),
      invalidatesTags: ['Expense'],
    }),
    //? -- UPDATE EXPENSE
    updateExpense: builder.mutation({
      query: ({ _id, ...rest }) => ({
        url: `${URL}/updateExpense/${_id}`,
        method: 'PATCH',
        body: rest,
      }),
      invalidatesTags: ['Expense'],
    }),
    //? -- DELETE EXPENSE
    deleteExpense: builder.mutation({
      query: (expenseId) => ({
        url: `${URL}/deleteExpense/${expenseId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Expense'],
    }),
  }),
});
export const {
  useGetAllExpensesQuery,
  useAddExpenseMutation,
  useDeleteExpenseMutation,
  useUpdateExpenseMutation,
} = expenseApiSlice;
