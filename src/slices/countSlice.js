import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: 5,
};

export const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add1: (state, action) => {
      state.value++;
    },
  },
});
export const { add1 } = countSlice.actions;
export default countSlice.reducer;
