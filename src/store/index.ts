import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: { user: userReducer }
});

export type AppDispatcher = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
