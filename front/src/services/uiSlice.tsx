import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface UiType {
  isGetMethodError: boolean;
}

const initialState: UiType = {
  isGetMethodError: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsGetMethodError: (state, action: PayloadAction<boolean>) => {
      state.isGetMethodError = action.payload;
    },
  },
});

export const selectRootState = (state: RootState): RootState => state;

export const { setIsGetMethodError } = uiSlice.actions;
export default uiSlice.reducer;
