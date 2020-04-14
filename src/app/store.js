import { configureStore } from "@reduxjs/toolkit";
import employerReducer from "../features/employers/employersViewSlice";
// import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    employers: employerReducer,
  },
});
