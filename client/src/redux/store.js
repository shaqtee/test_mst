import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducers";

const store = configureStore({
  reducer: {
    middleware: counterSlice.reducer,
  },
});

export default store;
