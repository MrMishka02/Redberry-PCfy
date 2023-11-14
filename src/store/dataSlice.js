import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  fetchedTeam: [],
  firstName: "",
  lastName: "",
};

export const dataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    getFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    getLastName: (state, action) => {
      state.lastName = action.payload;
    },
    getFetchedTeam: (state, action) => {
      state.fetchedTeam = action.payload;
    },
  },
});

export const { getFirstName, getLastName, getFetchedTeam } = dataSlice.actions;

export default dataSlice.reducer;
