import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://mycash-ra2a.onrender.com',
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'Expense', 'Income'],
  endpoints: (builder) => ({}),
});
