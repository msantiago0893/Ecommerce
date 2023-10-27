import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import appSlice from "./slices/app.slice";
import categorySlice from "./slices/category.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    app: appSlice,
    category: categorySlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;