import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  users: {
    firstName: "",
    lastName: "",
    team: "",
    position: "",
    email: "",
    phoneNumber: "",
  },
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
    getTeam: (state, action) => {
      state.team = action.payload;
    },
    getPosition: (state, action) => {
      state.position = action.payload;
    },
    getEmail: (state, action) => {
      state.email = action.payload;
    },
    getPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const {
  getFirstName,
  getLastName,
  getTeam,
  getPosition,
  getEmail,
  getPhoneNumber,
} = dataSlice.actions;

export default dataSlice.reducer;
