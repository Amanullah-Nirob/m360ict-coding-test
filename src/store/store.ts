// external imports
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// internal imports
import { spacexApi } from "./apiSlice/spacexApi";
import collapseMenuReducer from "./slice/collapsMenuSlice";

const rootReducer = combineReducers({
  [spacexApi.reducerPath]: spacexApi.reducer,
  collapseMenu: collapseMenuReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(spacexApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
