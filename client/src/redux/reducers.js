import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "authentication", // arbitrary name of the slice
  initialState: { isLogin: false, isAuth: {} },
  reducers: {
    loginRed(state, action) {
      state.isLogin = true;
      state.isAuth = action.payload;
    },
  },
});

export const actions = counterSlice.actions;
