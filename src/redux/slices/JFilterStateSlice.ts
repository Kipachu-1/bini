import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface JFilterState {
  sortBy: string;
}

const initialState: JFilterState = {
  sortBy: "new",
};

export const JFilterState = createSlice({
  name: "JFilterState",
  initialState,
  reducers: {
    setFilterSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilterSortBy } = JFilterState.actions;

export const selectJFilterSortBy = (state: RootState) =>
  state.JFilterState.sortBy;

export default JFilterState.reducer;
