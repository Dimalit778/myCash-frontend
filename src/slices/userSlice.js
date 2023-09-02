import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    // setCategories: (state, action) => {
    //   if (state.user) {
    //     state.user.setCategories(action.payload.catagories);
    //   } else {
    //     console.log('user has no categories');
    //   }
    // },
    // setExpenses: (state, action) => {
    //   state.expenses = action.payload.expenses;
    // },
    // setExpense: (state, action) => {
    //   const updatedExpenses = state.expenses.map((expense) => {
    //     if (expense._id === action.payload.expense_id)
    //       return action.payload.expense;
    //     return expense;
    //   });
    //   state.expenses = updatedExpenses;
    // },
  },
});

export const {
  setMode,
  setLogin,
  setLogout,
  setCategories,
  setExpenses,
  setExpense,
} = userSlice.actions;
export default userSlice.reducer;
