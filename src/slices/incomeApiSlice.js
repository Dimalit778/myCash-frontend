import { apiSlice } from './apiSlice';

const URL = '/transactions';

export const incomeApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Income'],
  endpoints: (builder) => ({
    getIncomes: builder.query({
      query: (userId) => `${URL}/get-incomes/${userId}`,
      providesTags: ['Income'],
    }),
    addIncome: builder.mutation({
      query: (income) => ({
        url: `${URL}/add-income`,
        method: 'POST',
        body: income,
      }),
      invalidatesTags: ['Income'],
    }),
    updateIncome: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `${URL}/add-income`,
        method: 'put',
        body: rest,
      }),
      invalidatesTags: ['Income'],
    }),
    deleteIncome: builder.mutation({
      query: (incomeId) => ({
        url: `${URL}/delete-income/${incomeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Income'],
    }),
  }),
});
export const {
  useGetIncomesQuery,
  useAddIncomeMutation,
  useDeleteIncomeMutation,
  useUpdateIncomeMutation,
} = incomeApiSlice;
