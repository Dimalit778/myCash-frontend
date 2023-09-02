import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from './slices/userSlice.js';
// import { countSlice } from './slices/countSlice.js';
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    // user: userSlice.reducer,
    // counter: countSlice.reducer,
  },
});
