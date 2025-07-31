import { configureStore } from "@reduxjs/toolkit";

import productFavoriteReducer from "./productFavoriteSlice";

const store = configureStore({
  reducer: {
    productFavorite: productFavoriteReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;