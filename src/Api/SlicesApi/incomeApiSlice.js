import { apiSlice } from './apiSlice';

const URL = '/api/v1/transactions';

export const incomeApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Income'],
  endpoints: (builder) => ({
    //? -- GET INCOME
    getIncome: builder.query({
      query: (incomeId) => `${URL}/getIncome/${incomeId}`,
      providesTags: ['Income'],
    }),
    //? -- GET ALL INCOMES
    getAllIncomes: builder.query({
      query: (userId) => `${URL}/getAllIncomes/${userId}`,
      providesTags: ['Income'],
    }),
    //? -- ADD INCOME
    addIncome: builder.mutation({
      query: ({ userId, ...rest }) => ({
        url: `${URL}/addIncome/${userId}`,
        method: 'POST',
        body: rest,
      }),
      invalidatesTags: ['Income'],
    }),
    //? -- UPDATE INCOME
    updateIncome: builder.mutation({
      query: ({ _id, ...rest }) => ({
        url: `${URL}/updateIncome/${_id}`,
        method: 'PATCH',
        body: rest,
      }),
      invalidatesTags: ['Income'],
    }),
    //? -- DELETE INCOME
    deleteIncome: builder.mutation({
      query: (incomeId) => ({
        url: `${URL}/deleteIncome/${incomeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Income'],
    }),
  }),
});
export const {
  useGetIncomeQuery,
  useGetAllIncomesQuery,
  useAddIncomeMutation,
  useDeleteIncomeMutation,
  useUpdateIncomeMutation,
} = incomeApiSlice;
