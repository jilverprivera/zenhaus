"use client";

import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./slices/ui-slice";

export const store = configureStore({
  reducer: {
    [uiSlice.name]: uiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
