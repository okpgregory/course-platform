"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import OnlineTrackingReducer from "./slices/online-member-slice";

const rootReducer = combineReducers({
  onlineTracking: OnlineTrackingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
