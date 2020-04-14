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
        (user) => user.username === action.payload.username
      );
      if (!user) {
        console.log("no such user");
        return;
      }
      if (user.password === action.payload.password) {
        state.userLoggedIn = user;
      }
    },
  },
});

export default slice.reducer;

export const { signup, login } = slice.actions;
