import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Api/slicesApi/authSlice';

import { apiSlice } from './Api/slicesApi/apiSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiSlice.middleware]),
  devTools: true,
});

export default store;
