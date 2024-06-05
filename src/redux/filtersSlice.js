import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter(state, { payload }) {
      state.filters = payload;
    },
  },
});

export default filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => {
  state.filters.name;
};
