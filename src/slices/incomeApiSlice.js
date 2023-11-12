import { apiSlice } from './apiSlice';

const URL = '/api/transactions';

export const incomeApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Income'],
  endpoints: (builder) => ({
    // -- GET INCOME
    getIncome: builder.query({
      query: (userId) => `${URL}/getIncome/${userId}`,
      providesTags: ['Income'],
    }),
    // -- GET ALL INCOMES
    getAllIncomes: builder.query({
      query: (userId) => `${URL}/getAllIncomes/${userId}`,
      providesTags: ['Income'],
    }),
    // -- ADD INCOME
    addIncome: builder.mutation({
      query: ({ userId, ...rest }) => ({
        url: `${URL}/addIncome/${userId}`,
        method: 'POST',
        body: rest,
      }),
      invalidatesTags: ['Income'],
    }),
    // -- UPDATE INCOME
    updateIncome: builder.mutation({
      query: ({ incomeId, ...rest }) => ({
        url: `${URL}/updateIncome/${incomeId}`,
        method: 'PATCH',
        body: rest,
      }),
      invalidatesTags: ['Income'],
    }),
    // -- DELETE INCOME
    deleteIncome: builder.mutation({
      query: (incomeId) => ({
        url: `${URL}/deleteDelete/${incomeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Income'],
    }),
  }),
});
export const {
  useGetAllIncomesQuery,
  useAddIncomeMutation,
  useDeleteIncomeMutation,
  useUpdateIncomeMutation,
} = incomeApiSlice;
