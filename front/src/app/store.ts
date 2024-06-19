import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { apiSlice, rtkQueryGetHttpErrorEmitter } from "../reducers/apiSlice";
import userProfileReducer from "../reducers/userProfileSlice";

export const store = configureStore({
  reducer: {
    userProfile: userProfileReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(rtkQueryGetHttpErrorEmitter),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
