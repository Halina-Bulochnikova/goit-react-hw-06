import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    FilterChange: (state, action) => {
      state.name = action.payload.toLowerCase();
    },
  },
});

export const { FilterChange } = filtersSlice.actions;
export default filtersSlice.reducer;
