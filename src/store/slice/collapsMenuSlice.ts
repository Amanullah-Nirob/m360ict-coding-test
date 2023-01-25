import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface CollapseState {
  isCollapse: boolean | undefined;
}

const initialState = {
  isCollapse: false,
} as CollapseState;

export const collapseMenuSlice = createSlice({
  name: "collapseMenu",
  initialState,
  reducers: {
    setIsCollapse: (state, action: PayloadAction<boolean | undefined>) => {
      state.isCollapse = action.payload;
    },
  },
});

export const { setIsCollapse } = collapseMenuSlice.actions;

export default collapseMenuSlice.reducer;
export const selectCollapse = (state: RootState) =>
  state.collapseMenu?.isCollapse;
