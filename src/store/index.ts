import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export type AppDispatcher = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
