import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    changeFilter: (state, action) => {
      console.log("action:", action);
      console.log("state:", state);
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const selectNameFilter = (state) => state.filters.name;

export default filtersSlice.reducer;