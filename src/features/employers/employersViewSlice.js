import { createSlice } from "@reduxjs/toolkit";
import data from "../../app/data.json";

const slice = createSlice({
  name: "employers",
  initialState: data,
  reducers: {},
});

export default slice.reducer;
// export const {} = slice.actions;
export const employerSelector = (state) => state.employers.orgs;
