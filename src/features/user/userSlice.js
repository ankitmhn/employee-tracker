import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: { users: [], userLoggedIn: false },
  reducers: {
    signup: (state, action) => {
      state.users.push({
        username: action.payload.username,
        password: action.payload.password,
      });
    },
    login: (state, action) => {
      const user = state.users.filter(
        (user) =>
          user.username === action.payload.username &&
          user.password === action.payload.password
      );
      if (!user) {
        console.log("no such user/authentication failed");
        return;
      }
      state.userLoggedIn = action.payload.username;
    },
    logout: (state) => {
      state.userLoggedIn = false;
    },
  },
});

export default slice.reducer;

export const { signup, login, logout } = slice.actions;

export const loggedInUserSelector = (state) => state.users.userLoggedIn;
