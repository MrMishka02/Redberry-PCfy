import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./dataSlice";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});
